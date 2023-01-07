import { IQuery } from '../../../../../../commons/types/generated/types';

export interface IFormProps {
  onCancel: () => void;
  editTarget: any;
  tab: string;
  data?: {
    members?: Pick<IQuery, 'fetchMembers'>;
    organizations?: Pick<IQuery, 'fetchOrganizations'>;
    roleCategories?: Pick<IQuery, 'fetchRoleCategories'>;
  };
}
