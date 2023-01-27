import { useForm } from 'react-hook-form';
import { useMutation, useQuery } from '@apollo/client';
import {
  IMutation,
  IQuery,
} from '../../../../../../commons/types/generated/types';
import { useEffect } from 'react';
import EditLeaveAccrualsPresenter from './editLeaveAccruals.presenter';
import { IEditLeaveAccrualsContainerProps } from './editLeaveAccruals.types';
import {
  DELETE_VACATION_ISSUE,
  FETCH_MEMBERS,
  UPDATE_VACATION_ISSUE,
} from './editLeaveAccruals.queries';

const EditLeaveAccrualsContainer = (
  props: IEditLeaveAccrualsContainerProps,
) => {
  const { register, handleSubmit, control, setValue } = useForm();

  const [deleteVacationIssue] = useMutation<
    Pick<IMutation, 'deleteVacationIssue'>
  >(DELETE_VACATION_ISSUE);

  useEffect(() => {
    if (props.data) {
      setValue('vacationAll', props.data.vacationAll);
      setValue('description', props.data.description);
    }
  }, [props.data, setValue]);

  const { data: members } =
    useQuery<Pick<IQuery, 'fetchMembers'>>(FETCH_MEMBERS);

  const [updateVacationIssue] = useMutation<
    Pick<IMutation, 'updateVacationIssue'>
  >(UPDATE_VACATION_ISSUE);

  const memberData = members?.fetchMembers.map((member) => ({
    id: String(member.id),
    name: String(member.name),
  }));

  const onSubmit = async (data: any) => {
    try {
      console.log(data);
      await updateVacationIssue({
        variables: {
          vacationIssueId: props.listMemberId,
          updateVacationIssueInput: { ...data },
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
      await deleteVacationIssue({
        variables: { vacationIssueId: props.listMemberId },
        update(cache) {
          cache.modify({ fields: () => {} });
        },
      });
      props.setAniMode(false);
    } catch (error) {
      alert('다시 ㄱㄱ');
    }
  };

  return (
    <EditLeaveAccrualsPresenter
      register={register}
      handleSubmit={handleSubmit}
      control={control}
      setValue={setValue}
      memberData={memberData}
      onSubmit={onSubmit}
      onClickDelete={onClickDelete}
      onClickCloseModal={props.onClickCloseModal}
      data={props.data}
      role={props.role}
      onClickCloseMember={props.onClickCloseMember}
    />
  );
};

export default EditLeaveAccrualsContainer;
