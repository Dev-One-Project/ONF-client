import { useForm } from "react-hook-form";
import CompanyPresenter from "./company.presenter";

const CompanyContainer = () => {
  const { register, handleSubmit } = useForm({});

  return <CompanyPresenter register={register} handleSubmit={handleSubmit} />;
};

export default CompanyContainer;
