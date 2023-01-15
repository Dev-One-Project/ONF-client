import { useMutation } from '@apollo/client';
import { valueType } from 'antd/es/statistic/utils';
import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { Address } from 'react-daum-postcode';
import { useForm } from 'react-hook-form';
import {
  IMutation,
  IMutationCreateOrganizationArgs,
} from '../../../../../../commons/types/generated/types';
import { IFormProps } from '../common/form.types';
import OrganizationFormPresenter from './organizationForm.presenter';
import { CREATE_ORGANIZATION } from './organizationForm.queries';

const IP_API_KEY = '726352a79674495788faaade6bbbb04d';

const OrganizationFormContainer = (props: IFormProps) => {
  const [createOrganization] = useMutation<
    Pick<IMutation, 'createOrganization'>,
    IMutationCreateOrganizationArgs
  >(CREATE_ORGANIZATION);
  const { register, setValue, handleSubmit, reset } = useForm();
  const [positionTab, setPositionTab] = useState(false);
  const [wifiTab, setWifiTab] = useState(false);
  const [ip, setIp] = useState('');
  const [currentPosition, setCurrentPosition] = useState<
    Partial<GeolocationCoordinates>
  >({ latitude: undefined, longitude: undefined });
  const [markerPosition, setMarkerPosition] = useState<
    Partial<GeolocationCoordinates>
  >({ latitude: undefined, longitude: undefined });
  const [radius, setRadius] = useState<valueType | null>(150);
  const [address, setAddress] = useState<string>('');

  // IP 와 현재 위치 좌표를 얻어옴.
  useEffect(() => {
    let isComponentMounted = true;
    const getIp = async () => {
      await axios
        .get(`https://ipgeolocation.abstractapi.com/v1/?api_key=${IP_API_KEY}`)
        .then((res) => {
          if (isComponentMounted) setIp(res.data.ip_address);
        });
    };
    void getIp();

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
    setValue('radius', radius);
  };

  const paintIp = useCallback(() => {
    setValue('ip', ip);
  }, [ip, setValue]);

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

  const onSubmit = async (formData: any) => {
    console.log(formData);

    // 백엔드 api 수정되면 삭제
    if (formData) return;

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
    } catch (error) {
      alert(error as string);
    }
  };
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <OrganizationFormPresenter
      onTogglePositionTab={onTogglePositionTab}
      paintIp={paintIp}
      onChangeMarkerPosition={onChangeMarkerPosition}
      currentPosition={currentPosition}
      setCurrentPosition={setCurrentPosition}
      markerPosition={markerPosition}
      radius={radius}
      setRadius={setRadius}
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
