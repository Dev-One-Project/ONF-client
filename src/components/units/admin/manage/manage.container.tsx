import { useForm } from "react-hook-form";
import ManagePresenter from "./manage.presenter";

const ManageContainer = () => {
  const { register, handleSubmit } = useForm({});

  return <ManagePresenter register={register} handleSubmit={handleSubmit} />;
};

export default ManageContainer;
