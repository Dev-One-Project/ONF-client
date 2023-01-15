import {
  FieldValues,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue,
} from 'react-hook-form';

import { IQuery } from '../../../../../../commons/types/generated/types';
import { Address } from 'react-daum-postcode';
import { Dispatch, SetStateAction } from 'react';
import { valueType } from 'antd/es/statistic/utils';

export interface OrganizationFormPresenterProps {
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  onSubmit: SubmitHandler<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  onCancel: () => void;
  data?: {
    organizations?: Pick<IQuery, 'fetchOrganizations'>;
  };
  isOpenModal: boolean;
  onCompleteSearch: (e: Address) => void;
  setIsOpenModal: Dispatch<SetStateAction<boolean>>;
  setWifiTab: Dispatch<SetStateAction<boolean>>;
  wifiTab: boolean;
  setPositionTab: Dispatch<SetStateAction<boolean>>;
  positionTab: boolean;
  currentPosition: Partial<GeolocationCoordinates>;
  setCurrentPosition: Dispatch<SetStateAction<Partial<GeolocationCoordinates>>>;
  markerPosition: Partial<GeolocationCoordinates>;
  radius: valueType | null;
  setRadius: Dispatch<SetStateAction<valueType | null>>;
  address: string;
  onChangeMarkerPosition: (args: Partial<GeolocationCoordinates>) => void;
  paintIp: () => void;
  onTogglePositionTab: () => void;
}
