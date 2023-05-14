import { useMutation } from '@apollo/client';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import {
  IMutation,
  IMutationCreateScheduleTemplateArgs,
} from '../../../../../../commons/types/generated/types';
import { IFormProps } from '../common/form.types';
import ScheduleTemplateFormPresenter from './scheduleTemplateForm.presenter';
import { CREATE_SCHEDULE_TEMPLATE } from './scheduleTemplateForm.queries';
import { IFormData } from './scheduleTemplateForm.types';
import * as yup from 'yup';

const scheduleTemplateSchema = yup.object({
  name: yup.string().min(1).required(),
});

const ScheduleTemplateFormContainer = (props: IFormProps) => {
  const [createScheduleTemplate] = useMutation<
    Pick<IMutation, 'createScheduleTemplate'>,
    IMutationCreateScheduleTemplateArgs
  >(CREATE_SCHEDULE_TEMPLATE);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { isValid },
  } = useForm<IFormData>({
    resolver: yupResolver(scheduleTemplateSchema),
  });

  const onSubmit = async (data: IFormData) => {
    console.log(data);
    try {
      await createScheduleTemplate({
        variables: { createScheduleTemplateInput: data },
        update(cache, { data }) {
          cache.modify({
            fields: {
              fetchAllScheduleTemplates: (prev) => {
                return [data?.createScheduleTemplate, ...prev];
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

  const organizations = props.data?.organizations?.fetchOrganizations?.map(
    (org) => ({
      id: String(org.id),
      name: String(org.name),
    }),
  );

  const roleCategories = props.data?.roleCategories?.fetchRoleCategories?.map(
    (role) => ({
      id: String(role.id),
      name: String(role.name),
    }),
  );

  const scheduleCategories =
    props.data?.scheduleCategories?.fetchAllScheduleCategories?.map(
      (schedule) => ({
        id: String(schedule.id),
        name: String(schedule.name),
      }),
    );

  const onEdit = () => {};
  const onSoftDelete = () => {};
  return (
    <ScheduleTemplateFormPresenter
      onEdit={onEdit}
      onSoftDelete={onSoftDelete}
      editTarget={props.editTarget}
      isValid={isValid}
      scheduleCategories={scheduleCategories}
      organizations={organizations}
      roleCategories={roleCategories}
      setValue={setValue}
      register={register}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      onCancel={props.onCancel}
    />
  );
};

export default ScheduleTemplateFormContainer;
