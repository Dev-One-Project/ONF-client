import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { IQuery } from '../../../../commons/types/generated/types';
import { FETCH_ORGANIZATIONS } from '../leaveAccruals/leaveAccruals.queries';
import LeavesPresenter from './leaves.presenter';
import { IInputData } from './leaves.types';

const LeavesContainer = () => {
  const date = new Date();
  const [filterInit, setFilterInit] = useState(true);
  const [isCheckedChange, setIsCheckedChange] = useState(false);
  const [, setOrganizationArr] = useState<IInputData[]>([{ id: '', name: '' }]);
  const [, setStartEndDate] = useState([
    new Date(date.getFullYear(), date.getMonth(), 1),
    new Date(date.getFullYear(), date.getMonth() + 1, 0),
  ]);

  const { register, handleSubmit, setValue } = useForm();

  const [isOpen, setIsOpen] = useState(false);
  const [aniMode, setAniMode] = useState(false);

  const onChangeStartEndDate = (value: any) => {
    if (value === null) return;
    setStartEndDate([value[0].$d, value[1].$d]);
  };

  const onClickList = () => {
    setIsOpen(true);
    setAniMode(true);
  };

  const onClickCloseModal = () => {
    setAniMode(false);
  };

  const onClickCheckedChange = () => {
    setAniMode(true);
    setIsCheckedChange(true);
  };

  const onSubmit = (data: any) => () => {
    if (data) {
      console.log(data);
      setAniMode(false);
    }
  };

  const { data: organizations } =
    useQuery<Pick<IQuery, 'fetchOrganizations'>>(FETCH_ORGANIZATIONS);

  const organizationsData = organizations?.fetchOrganizations.map(
    (organization) => ({
      id: String(organization.id),
      name: String(organization.name),
    }),
  );

  return (
    <LeavesPresenter
      filterInit={filterInit}
      setFilterInit={setFilterInit}
      organizationsData={organizationsData}
      date={date}
      setOrganizationArr={setOrganizationArr}
      onChangeStartEndDate={onChangeStartEndDate}
      onClickList={onClickList}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      aniMode={aniMode}
      onClickCloseModal={onClickCloseModal}
      register={register}
      handleSubmit={handleSubmit}
      setValue={setValue}
      onSubmit={onSubmit}
      onClickCheckedChange={onClickCheckedChange}
      isCheckedChange={isCheckedChange}
      setIsCheckedChange={setIsCheckedChange}
    />
  );
};

export default LeavesContainer;
