import { useRouter } from 'next/router';
import VacationPresenter from './vacation.presenter';

const VacationContainer = () => {
  const router = useRouter();

  const onClickCancel = () => {
    void router.back();
  };

  return <VacationPresenter onClickCancel={onClickCancel} />;
};

export default VacationContainer;
