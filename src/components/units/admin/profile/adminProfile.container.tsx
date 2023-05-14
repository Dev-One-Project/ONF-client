import { useMutation, useQuery } from '@apollo/client';
import { useForm } from 'react-hook-form';
import {
  IMutation,
  IMutationChangeAccountArgs,
  IQuery,
} from '../../../../commons/types/generated/types';
import { CHANGE_ACCOUNT, FETCH_ACCOUNT } from './admin.queries';
import AdminProfileUI from './adminProfile.presenter';
import { IFormData } from './adminProfile.types';
import AntdNotificationModal from '../../../commons/modal/antdNotificationModal';

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
      AntdNotificationModal({ message: '변경 사항이 저장되었습니다.' });
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
