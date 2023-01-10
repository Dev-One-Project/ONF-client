import * as yup from 'yup';
import { useState } from 'react';
import { IFormData } from './join.types';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import JoinPresenter from './join.presenter';
import { CREATE_ACCOUNT } from './join.queries';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  ErrorModal,
  SuccessModal,
} from '../../../commons/modal/sweetAlertModal';
import { useRouter } from 'next/router';

const schma = yup.object({
  email: yup.string().email('이메일 형식 확인').required('필수'),
  password: yup
    .string()
    .matches(/^(?=.*[a-zA-Z])(?=.*[0-9]).{8,20}$/, '필수')
    .required('필수'),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password'), null], '비밀번호가 같지 않습니다.')
    .required('필수'),
  phone: yup
    .string()
    .min(11, '핸드폰번호 11자리를 입력해주세요')
    .max(11, '핸드폰번호 11자리를 입력해주세요')
    .required('필수'),
  name: yup.string().required('필수'),
  companyName: yup.string(),
  code: yup.string(),
});
const JoinContainer = () => {
  const router = useRouter();
  const checkboxContents: string[] = [
    '[필수] 만 14세 이상입니다.',
    '[필수] 최종이용자 이용약관에 동의합니다.',
    '[필수] 개인정보 수집 및 이용에 동의합니다.',
  ];
  const [checkedList, setCheckedList] = useState<string[]>([]);
  const [isOpenAdmin, setIsOpenAdmin] = useState(false);
  const [isOpenEmployee, setIsOpenEmployee] = useState(false);
  const [aniMode, setAniMode] = useState(false);

  const onClickCloseModal = () => {
    setAniMode(false);

    reset({
      companyName: '',
    });
  };

  const onClickAdminModal = () => {
    setIsOpenAdmin(true);
    setAniMode(true);
  };

  const onClickCloseAdminModal = () => {
    setIsOpenAdmin(false);
    setAniMode(false);
  };

  const onClickEmployeeModal = () => {
    setIsOpenEmployee(true);
    setAniMode(true);
  };

  const onClickCloseEmployeeModal = () => {
    setIsOpenEmployee(false);
    setAniMode(false);
  };

  const [createAccount] = useMutation(CREATE_ACCOUNT);

  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(schma),
    mode: 'onChange',
  });

  const onChangeChecked = (checked: boolean, content: string) => {
    if (checked) setCheckedList([...checkedList, content]);
    else setCheckedList(checkedList.filter((el) => el === content));
  };

  const onChangeCheckedAll = (checked: boolean) => {
    if (checked) {
      const allCheckedArray: string[] = [];
      checkboxContents.forEach((el) => allCheckedArray.push(el));
      setCheckedList(allCheckedArray);
    } else {
      setCheckedList([]);
    }
  };

  const onClickSubmit = async (data: IFormData) => {
    try {
      await createAccount({
        variables: {
          createCompanyInput: {
            name: String(data.companyName),
          },
          invitationCode: String(data.code),
          email: String(data.email),
          password: String(data.password),
          name: String(data.name),
          phone: String(data.phone),
        },
      });
      SuccessModal('회원가입이 완료되었습니다.');
      void router.push('/auth/login');
    } catch (error) {
      ErrorModal(error as string);
    }
  };

  return (
    <>
      <JoinPresenter
        aniMode={aniMode}
        register={register}
        formState={formState}
        checkedList={checkedList}
        handleSubmit={handleSubmit}
        onClickSubmit={onClickSubmit}
        onChangeChecked={onChangeChecked}
        checkboxContents={checkboxContents}
        onChangeCheckedAll={onChangeCheckedAll}
        onClickCloseModal={onClickCloseModal}
        onClickAdminModal={onClickAdminModal}
        onClickEmployeeModal={onClickEmployeeModal}
        isOpenAdmin={isOpenAdmin}
        setIsOpenAdmin={setIsOpenAdmin}
        isOpenEmployee={isOpenEmployee}
        setIsOpenEmployee={setIsOpenEmployee}
        onClickCloseAdminModal={onClickCloseAdminModal}
        onClickCloseEmployeeModal={onClickCloseEmployeeModal}
      />
    </>
  );
};

export default JoinContainer;
