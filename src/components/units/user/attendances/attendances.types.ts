import { IQuery } from '../../../../commons/types/generated/types';

export interface IUserAttenancesProps {
  data?: Pick<IQuery, 'fetchMemberWorkChecks'>;
}
