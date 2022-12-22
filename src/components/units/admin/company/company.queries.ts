import { gql } from '@apollo/client';

export const UPDATE_GLOBAL_CONFIG = gql`
  mutation updateGlobalConfig(
    $updateGlobalConfigInput: UpdateGlobalConfigInput!
  ) {
    updateGlobalConfig(updateGlobalConfigInput: $updateGlobalConfigInput) {
      id
    }
  }
`;

export const UPDATE_COMPANY = gql`
  mutation updateCompany(
    $companyId: String!
    $updateCompanyInput: UpdateCompanyInput!
  ) {
    updateCompany(
      companyId: $companyId
      updateCompanyInput: $updateCompanyInput
    ) {
      id
    }
  }
`;

export const FETCH_COMPANY = gql`
  query fetchCompanyDetail($companyId: String!) {
    fetchCompanyDetail(companyId: $companyId) {
      id
      name
      logoUrl
      rules
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
  mutation updateHoliday($updateHolidayInput: UpdateHolidayInput!) {
    updateHoliday(updateHolidayInput: $updateHolidayInput) {
      id
    }
  }
`;

export const FETCH_HOLIDAY = gql`
  query fetchHoliday($companyId: String!) {
    fetchHoliday(companyId: $companyId) {
      id
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
