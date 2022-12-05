import { useRouter } from "next/router";
import VacationWrtieUI from "./vacation.presenter";

const VacationWrite = () => {
  const router = useRouter();

  const onClickCancel = () => {
    void router.back();
  };

  return <VacationWrtieUI onClickCancel={onClickCancel} />;
};

export default VacationWrite;
