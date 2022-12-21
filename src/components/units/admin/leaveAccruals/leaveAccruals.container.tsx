import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  IQuery,
  IQueryFetchOrganizationsArgs,
  IQueryFetchVacationIssuesArgs,
} from '../../../../commons/types/generated/types';
import LeaveAccrualsPresenter from './leaveAccruals.presenter';
import { FETCH_ORGANIZATIONS, FETCH_V_ISSUES } from './leaveAccruals.queries';

const LeaveAccrualsContainer = () => {
  const { register, handleSubmit } = useForm();

  const [isSelect, setIsSelect] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [aniMode, setAniMode] = useState(false);

  const [init, setInit] = useState(true);
  const [filterInit, setFilterInit] = useState(true);

  console.log(init, filterInit);

  const onClickOpenModal = () => {
    setIsOpen(true);
    setAniMode(true);
  };

  const onClickCloseModal = () => {
    setAniMode(false);
  };

  const onClickEmployee = () => {
    setIsSelect(true);
  };

  const onClickList = () => {
    setIsSelect(false);
  };

  const onSubmit = (data: any) => {
    if (data) {
      console.log(data);
      setAniMode(false);
    }
  };

  const { data } = useQuery<
    Pick<IQuery, 'fetchVacationIssues'>,
    IQueryFetchVacationIssuesArgs
  >(FETCH_V_ISSUES, {
    variables: { companyId: '00b9f2a4-86e7-4071-9b69-35163bdd8998' },
  });

  const { data: organizations } = useQuery<
    Pick<IQuery, 'fetchOrganizations'>,
    IQueryFetchOrganizationsArgs
  >(FETCH_ORGANIZATIONS, {
    variables: { companyId: '00b9f2a4-86e7-4071-9b69-35163bdd8998' },
  });

  const organizationsData = organizations?.fetchOrganizations.map(
    (el) => el.name,
  );

  return (
    <LeaveAccrualsPresenter
      isSelect={isSelect}
      onClickEmployee={onClickEmployee}
      onClickList={onClickList}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      aniMode={aniMode}
      onClickOpenModal={onClickOpenModal}
      onClickCloseModal={onClickCloseModal}
      onSubmit={onSubmit}
      register={register}
      handleSubmit={handleSubmit}
      data={data}
      organizationsData={organizationsData}
      init={init}
      setInit={setInit}
      filterInit={filterInit}
      setFilterInit={setFilterInit}
    />
  );
};

export default LeaveAccrualsContainer;
