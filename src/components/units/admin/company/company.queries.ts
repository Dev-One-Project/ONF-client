import { gql } from '@apollo/client';

export const UPDATE_GLOBAL_CONFIG = gql`
  mutation updateGlobalConfig(
    $updateGlobalConfigInput: UpdateGlobalConfigInput!
  ) {
    updateGlobalConfig(updateGlobalConfigInput: $updateGlobalConfigInput) {
      id
      allowedCheckInBefore
      allowedCheckInAfter
      isWorkLogEnabled
      isVacationEnabled
      isScheduleEnabled
      isCheckInEnabled
      isCheckOutEnabled
    }
  }
`;

export const UPDATE_COMPANY = gql`
  mutation updateCompany($updateCompanyInput: UpdateCompanyInput!) {
    updateCompany(updateCompanyInput: $updateCompanyInput) {
      id
      name
      logoUrl
      rules
    }
  }
`;

export const FETCH_COMPANY = gql`
  query fetchCompanyDetail {
    fetchCompanyDetail {
      id
      name
      logoUrl
      rules
    }
  }
`;

export const FETCH_CONFIG = gql`
  query fetchGlobalConfig {
    fetchGlobalConfig {
      id
      allowedCheckInBefore
      allowedCheckInAfter
      isWorkLogEnabled
      isVacationEnabled
      isScheduleEnabled
      isCheckInEnabled
      isCheckOutEnabled
    }
  }
`;

export const CREATE_HOLIDAY = gql`
  mutation createHoliday($createHolidayInput: CreateHolidayInput!) {
    createHoliday(createHolidayInput: $createHolidayInput) {
      id
    }
  }
`;

export const UPDATE_HOLIDAY = gql`
  mutation updateHoliday(
    $holidayId: String!
    $updateHolidayInput: UpdateHolidayInput!
  ) {
    updateHoliday(
      holidayId: $holidayId
      updateHolidayInput: $updateHolidayInput
    ) {
      id
    }
  }
`;

export const FETCH_HOLIDAY = gql`
  query fetchHoliday {
    fetchHoliday {
      id
      dateName
      locdate
    }
  }
`;

export const UPLOAD_SINGLE_FILE = gql`
  mutation uploadSingleFile($file: Upload!) {
    uploadSingleFile(file: $file) {
      id
      url
    }
  }
`;
