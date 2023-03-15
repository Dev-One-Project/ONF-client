import { useMutation } from '@apollo/client';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { IMutation } from '../../../../../../commons/types/generated/types';
import EditLeavesPresenter from './editLeaves.presenter';
import { DELETE_VACATION, UPDATE_VACATION } from './editLeaves.queries';
import { IEditLeavesContainerProps } from './editLeaves.types';

const EditLeavesContainer = (props: IEditLeavesContainerProps) => {
  const { register, handleSubmit, control, setValue } = useForm();

  const [updateVacation] =
    useMutation<Pick<IMutation, 'updateVacation'>>(UPDATE_VACATION);

  const [deleteVacation] =
    useMutation<Pick<IMutation, 'deleteVacation'>>(DELETE_VACATION);

  useEffect(() => {
    if (props.data) {
      setValue('description', props.data.fetchVacation.description);
    }
  });

  const onSubmit = async (data: any) => {
    try {
      data.memberId = props.data?.fetchVacation.member?.id;
      data.vacationStartDate = data.vacationStartEndDate[0];
      data.vacationEndDate = data.vacationStartEndDate[1];

      const { vacationStartEndDate, ...rest } = data;

      await updateVacation({
        variables: {
          vacationId: props.data?.fetchVacation.id,
          updateVacationInput: { ...rest },
        },
        update(cache) {
          cache.modify({ fields: () => {} });
        },
      });
      props.setAniMode(false);
    } catch (error) {}
  };

  const onClickDelete = async () => {
    try {
      await deleteVacation({
        variables: { vacationId: props.data?.fetchVacation.id },
        update(cache) {
          cache.modify({ fields: () => {} });
        },
      });
      props.setAniMode(false);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <EditLeavesPresenter
      vacationCategoriesData={props.vacationCategoriesData}
      data={props.data}
      date={props.date}
      onClickCloseModal={props.onClickCloseModal}
      register={register}
      handleSubmit={handleSubmit}
      control={control}
      setValue={setValue}
      onSubmit={onSubmit}
      onClickDelete={onClickDelete}
    />
  );
};

export default EditLeavesContainer;
