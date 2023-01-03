import { useForm } from 'react-hook-form';
import { useMutation, useQuery } from '@apollo/client';
import CompanyPresenter from './company.presenter';
import {
  CREATE_HOLIDAY,
  FETCH_COMPANY,
  FETCH_CONFIG,
  FETCH_HOLIDAY,
  UPDATE_COMPANY,
  UPDATE_GLOBAL_CONFIG,
  UPDATE_HOLIDAY,
  UPLOAD_SINGLE_FILE,
} from './company.queries';
import { useEffect } from 'react';
import { ErrorModal } from '../../../commons/modal/sweetAlertModal';

const CompanyContainer = () => {
  const [updateCompany] = useMutation(UPDATE_COMPANY);
  const [createHoliday] = useMutation(CREATE_HOLIDAY);
  const [updateHoliday] = useMutation(UPDATE_HOLIDAY);
  const [uploadSingleFile] = useMutation(UPLOAD_SINGLE_FILE);
  const [updateGlobalConfig] = useMutation(UPDATE_GLOBAL_CONFIG);
  const { data: fetchCompany } = useQuery(FETCH_COMPANY, {
    fetchPolicy: 'network-only',
  });
  const { data: fetchHoliday } = useQuery(FETCH_HOLIDAY);
  const { data: fetchGlobalConfig } = useQuery(FETCH_CONFIG);
  const { register, handleSubmit, watch, setValue } = useForm();
  useEffect(() => {
    setValue('name', fetchCompany?.fetchCompanyDetail.name);
    setValue('rules', fetchCompany?.fetchCompanyDetail.rules);
  }, [setValue, fetchCompany]);
  useEffect(() => {
    setValue(
      'allowedCheckInBefore',
      fetchGlobalConfig?.fetchGlobalConfig?.allowedCheckInBefore,
    );
    setValue(
      'allowedCheckInAfter',
      fetchGlobalConfig?.fetchGlobalConfig?.allowedCheckInAfter,
    );
    setValue(
      'isWorkLogEnabled',
      fetchGlobalConfig?.fetchGlobalConfig?.isWorkLogEnabled,
    );
    setValue(
      'isVacationEnabled',
      fetchGlobalConfig?.fetchGlobalConfig?.isVacationEnabled,
    );
    setValue(
      'isScheduleEnabled',
      fetchGlobalConfig?.fetchGlobalConfig?.isScheduleEnabled,
    );
    setValue(
      'isCheckInEnabled',
      fetchGlobalConfig?.fetchGlobalConfig?.isCheckInEnabled,
    );
    setValue(
      'isCheckOutEnabled',
      fetchGlobalConfig?.fetchGlobalConfig?.isCheckOutEnabled,
    );
  }, [setValue, fetchGlobalConfig]);
  useEffect(() => {
    setValue('dateName', fetchHoliday?.fetchHoliday[0]?.dateName);
    setValue('locdate', fetchHoliday?.fetchHoliday[0]?.locdate);
  }, [setValue, fetchHoliday]);

  const onClickUpdate = async (data: any) => {
    if (watch('logoUrl')?.length) {
      uploadSingleFile({
        variables: {
          file: data.logoUrl[0],
        },
      })
        .then(async (res) => {
          await updateCompany({
            variables: {
              updateCompanyInput: {
                name: data.name,
                logoUrl: res.data.uploadSingleFile.url,
                rules: data.rules,
                membership: 'ENTERPRISE',
              },
            },
          });
        })
        .catch((error) => {
          if (error instanceof Error) ErrorModal(String(error));
        });
    } else {
      await updateCompany({
        variables: {
          updateCompanyInput: {
            name: data.name,
            logoUrl: fetchCompany?.fetchCompanyDetail.logoUrl,
            rules: data.rules,
            membership: 'ENTERPRISE',
          },
        },
      });
    }

    watch('dateName')?.length
      ? await updateHoliday({
          variables: {
            holidayId: fetchHoliday.fetchHoliday[0].id,
            updateHolidayInput: {
              dateName: data.dateName,
              locdate: data.locdate,
            },
          },
        })
      : await createHoliday({
          variables: {
            createHolidayInput: {
              dateName: data.dateName,
              locdate: data.locdate,
            },
          },
        });

    await updateGlobalConfig({
      variables: {
        updateGlobalConfigInput: {
          allowedCheckInBefore: Number(data.allowedCheckInBefore),
          allowedCheckInAfter: Number(data.allowedCheckInAfter),
          isWorkLogEnabled: data.isWorkLogEnabled,
          isVacationEnabled: data.isVacationEnabled,
          isScheduleEnabled: data.isScheduleEnabled,
          isCheckInEnabled: data.isCheckInEnabled,
          isCheckOutEnabled: data.isCheckOutEnabled,
        },
      },
    });
  };

  return (
    <CompanyPresenter
      register={register}
      handleSubmit={handleSubmit}
      onClickUpdate={onClickUpdate}
      fetchCompanyDetail={fetchCompany?.fetchCompanyDetail}
      fetchGlobalConfig={fetchGlobalConfig?.fetchGlobalConfig}
    />
  );
};

export default CompanyContainer;
