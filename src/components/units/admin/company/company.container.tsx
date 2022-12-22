import { useForm } from 'react-hook-form';
import { useMutation, useQuery } from '@apollo/client';
import CompanyPresenter from './company.presenter';
import {
  CREATE_HOLIDAY,
  FETCH_COMPANY,
  FETCH_HOLIDAY,
  UPDATE_COMPANY,
  UPDATE_GLOBAL_CONFIG,
  UPDATE_HOLIDAY,
  UPLOAD_SINGLE_FILE,
} from './company.queries';

const CompanyContainer = () => {
  const { register, handleSubmit, getValues } = useForm();
  const [updateCompany] = useMutation(UPDATE_COMPANY);
  const [createHoliday] = useMutation(CREATE_HOLIDAY);
  const [updateHoliday] = useMutation(UPDATE_HOLIDAY);
  const [uploadSingleFile] = useMutation(UPLOAD_SINGLE_FILE);
  const [updateGlobalConfig] = useMutation(UPDATE_GLOBAL_CONFIG);
  const { data: fetchCompany } = useQuery(FETCH_COMPANY, {
    variables: {
      companyId: '64254cf0-ed54-4511-ab0f-5da7e7b694bc',
    },
  });
  const { data: fetchHoliday } = useQuery(FETCH_HOLIDAY, {
    variables: {
      companyId: '64254cf0-ed54-4511-ab0f-5da7e7b694bc',
    },
  });

  const onClickUpdate = async (data: any) => {
    let resultUrl = fetchCompany.fetchCompany.logoUrl;
    if (getValues('logoUrl')) {
      resultUrl = await uploadSingleFile({
        variables: {
          file: data.logoUrl[0],
        },
      });
    }

    fetchHoliday.fetchHoliday.dateName
      ? await updateHoliday({
          variables: {
            createHolidayInput: {
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

    await updateCompany({
      variables: {
        companyId: '64254cf0-ed54-4511-ab0f-5da7e7b694bc',
        updateCompanyInput: {
          name: data.name,
          logoUrl: resultUrl.data.url,
          rules: data.rules,
          membership: 'ENTERPRISE',
        },
      },
    });

    await updateGlobalConfig({
      variables: {
        updateGlobalConfigInput: {
          allowedCheckInBefore: data.allowedCheckInBefore,
          allowedCheckInAfter: data.allowedCheckInAfter,
          isWorkLogEnabled: data.isWorkLogEnabled,
          isVacationEnabled: data.isWorkLogEnabled,
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
    />
  );
};

export default CompanyContainer;
