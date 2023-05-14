import { IQuery } from '../../../../../../commons/types/generated/types';
import { Address } from 'react-daum-postcode';
import { Dispatch, SetStateAction } from 'react';
import { valueType } from 'antd/es/statistic/utils';
import { FormActionTypes } from '../common/form.types';

export interface OrganizationFormPresenterProps extends FormActionTypes {
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
  range: valueType | null;
  setRange: Dispatch<SetStateAction<valueType | null>>;
  address: string;
  onChangeMarkerPosition: (args: Partial<GeolocationCoordinates>) => void;
  paintIp?: () => void;
  onTogglePositionTab: () => void;
}

export interface IFormData {
  name?: string;
  checkPoint?: string;
  address: string;
  lat?: string;
  lng?: string;
  range?: number;
  description?: string;
  color: string;
}
