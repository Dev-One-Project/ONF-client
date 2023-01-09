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

  // 빌드 에러 수정용... 나중에 삭제
  register?: any;
  onSubmit?: any;
  handleSubmit?: any;
  setValue?: any;
}
