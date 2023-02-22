import { useMutation } from '@apollo/client';
import { yupResolver } from '@hookform/resolvers/yup';
import { valueType } from 'antd/es/statistic/utils';
// import axios from 'axios';
import { useEffect, useState } from 'react';
import { Address } from 'react-daum-postcode';
import { useForm } from 'react-hook-form';
import {
  IMutation,
  IMutationCreateOrganizationArgs,
} from '../../../../../../commons/types/generated/types';
import { IFormProps } from '../common/form.types';
import OrganizationFormPresenter from './organizationForm.presenter';
import { CREATE_ORGANIZATION } from './organizationForm.queries';
import * as yup from 'yup';
import { IFormData } from './organizationForm.types';

const schema = yup.object({
  name: yup.string().min(1).required(),
});

const OrganizationFormContainer = (props: IFormProps) => {
  const [createOrganization] = useMutation<
    Pick<IMutation, 'createOrganization'>,
    IMutationCreateOrganizationArgs
  >(CREATE_ORGANIZATION);
  const {
    register,
    setValue,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm<IFormData>({
    resolver: yupResolver(schema),
  });
  const [positionTab, setPositionTab] = useState(false);
  const [wifiTab, setWifiTab] = useState(false);
  // const [ip, setIp] = useState('');
  const [currentPosition, setCurrentPosition] = useState<
    Partial<GeolocationCoordinates>
  >({ latitude: undefined, longitude: undefined });
  const [markerPosition, setMarkerPosition] = useState<
    Partial<GeolocationCoordinates>
  >({ latitude: undefined, longitude: undefined });
  const [range, setRange] = useState<valueType | null>(150);
  const [address, setAddress] = useState<string>('');

  // 현재 위치 좌표를 얻어옴.
  useEffect(() => {
    let isComponentMounted = true;

    const getLocation = async () => {
      navigator.geolocation.getCurrentPosition((position) => {
        if (isComponentMounted) {
          setCurrentPosition(position.coords);
          setMarkerPosition(position.coords);
        }
      });
    };

    void getLocation();

    reset({
      name: '',
      checkPoint: '',
      description: '',
      address: '',
      color: '',
    });

    return () => {
      isComponentMounted = false;
    };
  }, []);

  const onTogglePositionTab = () => {
    setPositionTab((prev) => !prev);
    setValue('lat', String(markerPosition.latitude));
    setValue('lng', String(markerPosition.longitude));
    setValue('range', Number(range));
  };

  const onCompleteSearch = (e: Address) => {
    setAddress(e.address);
    setValue('address', e.address);
    setIsOpenModal(false);
  };

  const onChangeMarkerPosition = (args: Partial<GeolocationCoordinates>) => {
    setMarkerPosition(args);
    setValue('lat', String(args.latitude));
    setValue('lng', String(args.longitude));
  };

  const onSubmit = async (formData: IFormData) => {
    formData.color = '#fff';
    try {
      await createOrganization({
        variables: { createOrganizationInput: formData },
        update(cache, { data }) {
          cache.modify({
            fields: {
              fetchOrganizations: (prev) => {
                return [data?.createOrganization, ...prev];
              },
            },
          });
        },
      });
      props.onCancel();
    } catch (error) {
      alert(error as string);
    }
  };
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <OrganizationFormPresenter
      isValid={isValid}
      onTogglePositionTab={onTogglePositionTab}
      onChangeMarkerPosition={onChangeMarkerPosition}
      currentPosition={currentPosition}
      setCurrentPosition={setCurrentPosition}
      markerPosition={markerPosition}
      range={range}
      setRange={setRange}
      address={address}
      setWifiTab={setWifiTab}
      wifiTab={wifiTab}
      setPositionTab={setPositionTab}
      positionTab={positionTab}
      isOpenModal={isOpenModal}
      setIsOpenModal={setIsOpenModal}
      onCancel={props.onCancel}
      data={props.data}
      register={register}
      onSubmit={onSubmit}
      setValue={setValue}
      handleSubmit={handleSubmit}
      onCompleteSearch={onCompleteSearch}
    />
  );
};

export default OrganizationFormContainer;
