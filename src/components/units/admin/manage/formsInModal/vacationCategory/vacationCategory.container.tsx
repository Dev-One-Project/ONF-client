import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { IFormProps } from '../common/form.types';
import VacationCategoryFormPresenter from './vacationCategory.presenter';
import { IFormData } from './vacationCategory.types';
import * as yup from 'yup';
import { useMutation } from '@apollo/client';
import { CREATE_VACATION_CATEGORY } from './vacationCategory.queries';
import {
  IMutation,
  IMutationCreateVacationCategoryArgs,
} from '../../../../../../commons/types/generated/types';

const schema = yup.object({
  name: yup.string().min(1).required(),
});

const VacationCategoryFormContainer = (props: IFormProps) => {
  const [createVacationCategory] = useMutation<
    Pick<IMutation, 'createVacationCategory'>,
    IMutationCreateVacationCategoryArgs
  >(CREATE_VACATION_CATEGORY);

  const {
    register,
    setValue,
    handleSubmit,
    formState: { isValid },
  } = useForm<IFormData>({ resolver: yupResolver(schema) });

  const onSubmit = async (data: IFormData) => {
    data.deductionDays = Number(data.deductionDays);
    data.paidTime = Number(data.paidTime);
    console.log(data);
    try {
      await createVacationCategory({
        variables: { createVacationCategoryInput: { ...data } },
        update(cache, { data }) {
          cache.modify({
            fields: {
              fetchVacationCategories: (prev) => [
                data?.createVacationCategory,
                ...prev,
              ],
            },
          });
        },
      });
      props.onCancel();
    } catch (error) {
      alert(error as string);
    }
  };

  const organizations = props.data?.organizations?.fetchOrganizations.map(
    (org) => ({
      id: String(org.id),
      name: String(org.name),
    }),
  );

  const roleCategories = props.data?.roleCategories?.fetchRoleCategories.map(
    (role) => ({
      id: String(role.id),
      name: String(role.name),
    }),
  );
  const onEdit = () => {};
  const onSoftDelete = () => {};
  return (
    <VacationCategoryFormPresenter
      onEdit={onEdit}
      onSoftDelete={onSoftDelete}
      editTarget={props.editTarget}
      isValid={isValid}
      organizations={organizations}
      roleCategories={roleCategories}
      onSubmit={onSubmit}
      onCancel={props.onCancel}
      register={register}
      setValue={setValue}
      handleSubmit={handleSubmit}
    />
  );
};

export default VacationCategoryFormContainer;
