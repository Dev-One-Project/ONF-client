import { CheckCircleOutlined } from '@ant-design/icons';
import { useMutation, useQuery } from '@apollo/client';
import { notification } from 'antd';
import { useForm } from 'react-hook-form';
import { styleSet } from '../../../../commons/styles/styleSet';
import {
  IMutation,
  IMutationChangeAccountArgs,
  IQuery,
} from '../../../../commons/types/generated/types';
import { CHANGE_ACCOUNT, FETCH_ACCOUNT } from './admin.queries';
import AdminProfileUI from './adminProfile.presenter';
import { IFormData } from './adminProfile.types';

const AdminProfile = () => {
  const { data: accountData } =
    useQuery<Pick<IQuery, 'fetchAccount'>>(FETCH_ACCOUNT);

  const [changeAccount] = useMutation<
    Pick<IMutation, 'changeAccount'>,
    IMutationChangeAccountArgs
  >(CHANGE_ACCOUNT);

  const { register, handleSubmit, setValue } = useForm<IFormData>({});

  const onSubmit = async (data: IFormData) => {
    if (data.account.name === '')
      data.account.name = String(accountData?.fetchAccount.name);
    try {
      await changeAccount({
        variables: { name: String(data.account.name) },
        update(cache) {
          cache.modify({
            fields: {
              fetchAccount: () => {},
            },
          });
        },
      });
      notification.open({
        message: '변경 사항이 저장되었습니다.',
        icon: (
          <CheckCircleOutlined style={{ color: styleSet.colors.primary }} />
        ),
        style: { paddingBottom: '0.5rem' },
      });
    } catch (error) {
      if (error instanceof Error) alert(error);
    }
  };

  return (
    <AdminProfileUI
      data={accountData}
      setValue={setValue}
      onSubmit={onSubmit}
      handleSubmit={handleSubmit}
      register={register}
    />
  );
};

export default AdminProfile;
