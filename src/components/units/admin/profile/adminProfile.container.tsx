import { CheckCircleOutlined } from '@ant-design/icons';
import { notification } from 'antd';
import React, { FormEvent, useState } from 'react';
import { useForm } from 'react-hook-form';
import { styleSet } from '../../../../commons/styles/styleSet';
import AdminProfileUI from './adminProfile.presenter';

interface IFormData {
  duty?: string[];
  organization?: string[];
  name?: string;
}

const AdminProfile = () => {
  const [categoryModalState, setCategoryModalState] = useState(false);
  const [organizationModalState, setOrganizationModalState] = useState(false);
  const { register, handleSubmit, setValue } = useForm<IFormData>();

  const onSubmit = (data: IFormData) => {
    console.log(data);
    notification.open({
      message: '변경 사항이 저장되었습니다.',
      icon: <CheckCircleOutlined style={{ color: styleSet.colors.primary }} />,
      style: { paddingBottom: '0.5rem' },
    });
  };

  const onClickToggleCategoryModal = () => {
    setCategoryModalState((prev) => !prev);
  };
  const onClickToggleOrganizationModal = () => {
    setOrganizationModalState((prev) => !prev);
  };
  return (
    <AdminProfileUI
      setValue={setValue}
      onSubmit={onSubmit}
      handleSubmit={handleSubmit}
      categoryModalState={categoryModalState}
      organizationModalState={organizationModalState}
      register={register}
      onClickToggleCategoryModal={onClickToggleCategoryModal}
      onClickToggleOrganizationModal={onClickToggleOrganizationModal}
    />
  );
};

export default AdminProfile;
