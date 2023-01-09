import { useForm } from 'react-hook-form';
import { IFormProps } from '../common/form.types';
import OrganizationFormPresenter from './oranization.presenter';

const OrganizationFormContainer = (props: IFormProps) => {
  const { register, setValue, handleSubmit } = useForm();

  const onSubmit = (formData: any) => {
    console.log(formData);
  };

  return (
    <OrganizationFormPresenter
      onCancel={props.onCancel}
      data={props.data}
      register={register}
      onSubmit={onSubmit}
      setValue={setValue}
      handleSubmit={handleSubmit}
    />
  );
};

export default OrganizationFormContainer;
