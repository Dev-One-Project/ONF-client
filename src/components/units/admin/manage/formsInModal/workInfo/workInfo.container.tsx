import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  IMutation,
  IMutationCreateWorkInfoArgs,
} from '../../../../../../commons/types/generated/types';
import { IFormProps } from '../common/form.types';
import { CREATE_WORK_INFO } from './workInfo.queries';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Modal } from 'antd';
import { IFormData } from './workInfo.types';

import WorkInfoFormPresenter from './workInfo.presenter';

const schema = yup.object({
  name: yup.string().min(1).required(),
});

const WorkInfoFormContainer = (props: IFormProps) => {
  const [createWorkInfo] = useMutation<
    Pick<IMutation, 'createWorkInfo'>,
    IMutationCreateWorkInfoArgs
  >(CREATE_WORK_INFO);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { isValid },
  } = useForm<IFormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: IFormData) => {
    const result = { ...data };
    if (Array.isArray(result.fixedLabor))
      result.fixedLabor = result.fixedLabor.join(', ');
    if (Array.isArray(result.weekOffDays))
      result.weekOffDays = result.weekOffDays.join(', ');

    const basicInfoData = {
      name: result.name,
      fixedLabor: result.fixedLabor,
      weekOffDays: result.weekOffDays,
      memo: result.memo,
    };
    const fixedLaborData = {
      fixedHours: result.fixedHours,
      fixedStandard: result.fixedStandard,
      fixedUnitPeriod: result.fixedUnitPeriod,
      fixedPeriodRange: result.fixedPeriodRange,
    };
    const maximumLaborData = {
      maximumStandard: result.maximumStandard,
      maximumHours: result.maximumHours,
      maximumUnitPeriod: result.maximumUnitPeriod,
      maximumPeriodRange: result.maximumPeriodRange,
    };
    try {
      await createWorkInfo({
        variables: {
          createBasicWorkInfoInput: basicInfoData,
          createFixedLaborDaysInput: fixedLaborData,
          createMaximumLaberInput: maximumLaborData,
        },
        update(cache, { data }) {
          cache.modify({
            fields: {
              fetchWorkInfos: (prev) => [data?.createWorkInfo, ...prev],
            },
          });
        },
      });
      props.onCancel();
    } catch (error) {
      error instanceof Error && Modal.error({ content: error.message });
    }
  };

  const [isActive, setIsActive] = useState([true, false, false]);
  const onClickTab = (index: number) => () => {
    setIsActive((prev) => {
      const filtered = prev.map((_, i) => {
        if (i === index) return true;
        else return false;
      });
      return filtered;
    });
  };
  const onEdit = () => {};
  const onSoftDelete = () => {};
  return (
    <WorkInfoFormPresenter
      onEdit={onEdit}
      onSoftDelete={onSoftDelete}
      editTarget={props.editTarget}
      isValid={isValid}
      register={register}
      setValue={setValue}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      isActive={isActive}
      onClickTab={onClickTab}
      onCancel={props.onCancel}
    />
  );
};

export default WorkInfoFormContainer;
