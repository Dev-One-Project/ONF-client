import { useMutation } from '@apollo/client';
import { useForm } from 'react-hook-form';
import {
  IMutation,
  IMutationCreateRoleCategoryArgs,
} from '../../../../../../commons/types/generated/types';
import { IFormProps } from '../common/form.types';
import RoleCategoryFormPresenter from './roleCategoryForm.presenter';
import { CREATE_ROLE_CATEGORY } from './roleCategoryForm.queries';

const RoleCategoryFormContainer = (props: IFormProps) => {
  const [createRoleCategory] = useMutation<
    Pick<IMutation, 'createRoleCategory'>,
    IMutationCreateRoleCategoryArgs
  >(CREATE_ROLE_CATEGORY);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { isValid },
  } = useForm();

  const onSubmit = async (data: any) => {
    console.log(data);
    try {
      await createRoleCategory({
        variables: { createRoleCategoryInput: data },
        update(cache, { data }) {
          cache.modify({
            fields: {
              fetchRoleCategories: (prev) => {
                return [data?.createRoleCategory, ...prev];
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

  const onEdit = () => {};
  const onSoftDelete = () => {};
  return (
    <RoleCategoryFormPresenter
      isValid={isValid}
      handleSubmit={handleSubmit}
      register={register}
      onSubmit={onSubmit}
      onCancel={props.onCancel}
      editTarget={props.editTarget}
      onEdit={onEdit}
      onSoftDelete={onSoftDelete}
      setValue={setValue}
    />
  );
};

export default RoleCategoryFormContainer;
