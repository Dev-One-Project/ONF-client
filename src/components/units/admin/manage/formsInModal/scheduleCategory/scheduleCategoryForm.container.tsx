import { useMutation } from '@apollo/client';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import {
  IMutation,
  IMutationCreateScheduleCategoryArgs,
} from '../../../../../../commons/types/generated/types';
import { IFormProps } from '../common/form.types';
import ScheduleCategoryFormPresenter from './scheduleCategoryForm.presenter';
import { CREATE_SCHEDULE_CATEGORY } from './scheduleCategoryForm.queries';
import { IFormData } from './scheduleCategoryForm.types';
import * as yup from 'yup';

const categoryFormSchema = yup.object({
  name: yup.string().min(1).required(),
});

const ScheduleCategoryFormContainer = (props: IFormProps) => {
  const [createScheduleCategory] = useMutation<
    Pick<IMutation, 'createScheduleCategory'>,
    IMutationCreateScheduleCategoryArgs
  >(CREATE_SCHEDULE_CATEGORY);

  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<IFormData>({
    resolver: yupResolver(categoryFormSchema),
  });

  const onSubmit = async (data: IFormData) => {
    console.log(data);
    if (!data.name) return;
    try {
      await createScheduleCategory({
        variables: { createScheduleCategoryInput: data },
        update(cache, { data }) {
          cache.modify({
            fields: {
              fetchAllScheduleCategories: (prev) => {
                return [data?.createScheduleCategory, ...prev];
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
  return (
    <ScheduleCategoryFormPresenter
      isValid={isValid}
      register={register}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      onCancel={props.onCancel}
    />
  );
};

export default ScheduleCategoryFormContainer;
