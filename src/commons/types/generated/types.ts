export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Upload: any;
};

export type IAccount = {
  __typename?: 'Account';
  company?: Maybe<ICompany>;
  email: Scalars['String'];
  id: Scalars['String'];
  member?: Maybe<IMember>;
  name: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  roles?: Maybe<Scalars['String']>;
};

export type ICompany = {
  __typename?: 'Company';
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  globalConfig?: Maybe<IGlobalConfig>;
  id?: Maybe<Scalars['String']>;
  logoUrl?: Maybe<Scalars['String']>;
  memberCount?: Maybe<Scalars['Int']>;
  membership?: Maybe<IMembership_Type>;
  name?: Maybe<Scalars['String']>;
  rules?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ICreateCompanyInput = {
  logoUrl?: InputMaybe<Scalars['String']>;
  memberCount?: InputMaybe<Scalars['Int']>;
  membership?: InputMaybe<IMembership_Type>;
  name?: InputMaybe<Scalars['String']>;
  rules?: InputMaybe<Scalars['String']>;
};

export type ICreateGlobalConfigInput = {
  allowedCheckInAfter?: InputMaybe<Scalars['Int']>;
  allowedCheckInBefore?: InputMaybe<Scalars['Int']>;
  isCheckInEnabled?: InputMaybe<Scalars['Boolean']>;
  isCheckOutEnabled?: InputMaybe<Scalars['Boolean']>;
  isScheduleEnabled?: InputMaybe<Scalars['Boolean']>;
  isVacationEnabled?: InputMaybe<Scalars['Boolean']>;
  isWorkLogEnabled?: InputMaybe<Scalars['Boolean']>;
};

export type ICreateHolidayInput = {
  dateName?: InputMaybe<Scalars['String']>;
  locdate?: InputMaybe<Scalars['String']>;
};

export type ICreateMemberInput = {
  exitDate?: InputMaybe<Scalars['DateTime']>;
  joinDate?: InputMaybe<Scalars['DateTime']>;
  memo?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  organizationId?: InputMaybe<Scalars['String']>;
  roleCategoryId?: InputMaybe<Scalars['String']>;
};

export type ICreateNoticeBoardInput = {
  contents: Scalars['String'];
  preface: Scalars['String'];
  title: Scalars['String'];
};

export type ICreateOrganizationInput = {
  address: Scalars['String'];
  checkPoint?: InputMaybe<Scalars['String']>;
  color: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
  lat?: InputMaybe<Scalars['String']>;
  lng?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  range?: InputMaybe<Scalars['Int']>;
};

export type ICreateRoleCategoryInput = {
  colorCode: Scalars['String'];
  memo: Scalars['String'];
  name: Scalars['String'];
};

export type ICreateScheduleCategoryInput = {
  color: Scalars['String'];
  isNotHolidayWork?: InputMaybe<Scalars['Boolean']>;
  isOvertime?: InputMaybe<Scalars['Boolean']>;
  memo?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type ICreateScheduleInput = {
  memberId: Array<Scalars['String']>;
  scheduleTemplateId: Scalars['String'];
};

export type ICreateScheduleTemplateInput = {
  colorCode: Scalars['String'];
  endTime: Scalars['String'];
  memo?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  organizationId: Array<Scalars['String']>;
  roleCategoryId: Array<Scalars['String']>;
  scheduleCategoryId?: InputMaybe<Scalars['String']>;
  startTime: Scalars['String'];
};

export type ICreateVacationCategoryInput = {
  deductionDays: Scalars['Float'];
  memo?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  organizationId: Scalars['String'];
  paidTime: Scalars['Int'];
  roleCategoryId: Scalars['String'];
  timeOption: Scalars['String'];
};

export type ICreateVacationInput = {
  description?: InputMaybe<Scalars['String']>;
  memberId: Scalars['String'];
  vacationCategoryId: Scalars['String'];
  vacations: Array<Scalars['DateTime']>;
};

export type ICreateVacationIssueInput = {
  description: Scalars['String'];
  expirationDate: Scalars['DateTime'];
  memberId: Scalars['String'];
  startingPoint: Scalars['DateTime'];
  vacationAll: Scalars['Int'];
};

export type ICreateWorkCheckInput = {
  isComfirmed?: Scalars['Boolean'];
  isWorking?: InputMaybe<Scalars['Boolean']>;
  memberId: Scalars['String'];
  organizationId?: InputMaybe<Scalars['String']>;
  quittingTime?: InputMaybe<Scalars['String']>;
  roleCategoryId?: InputMaybe<Scalars['String']>;
  scheduleId?: InputMaybe<Scalars['String']>;
  workCheckMemo?: InputMaybe<Scalars['String']>;
  workDay: Scalars['DateTime'];
  workingTime: Scalars['String'];
};

export type IFile = {
  __typename?: 'File';
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  name: Scalars['String'];
  url: Scalars['String'];
};

export type IGlobalConfig = {
  __typename?: 'GlobalConfig';
  allowedCheckInAfter?: Maybe<Scalars['Int']>;
  allowedCheckInBefore?: Maybe<Scalars['Int']>;
  company?: Maybe<ICompany>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  isCheckInEnabled?: Maybe<Scalars['Boolean']>;
  isCheckOutEnabled?: Maybe<Scalars['Boolean']>;
  isScheduleEnabled?: Maybe<Scalars['Boolean']>;
  isVacationEnabled?: Maybe<Scalars['Boolean']>;
  isWorkLogEnabled?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type IHoliday = {
  __typename?: 'Holiday';
  company: ICompany;
  dateName?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  locdate?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['String']>;
};

export enum IMembership_Type {
  Basic = 'BASIC',
  Enterprise = 'ENTERPRISE',
  Free = 'FREE',
  Pro = 'PRO'
}

export type IMember = {
  __typename?: 'Member';
  company: ICompany;
  exitDate?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  isJoin: Scalars['Boolean'];
  joinDate?: Maybe<Scalars['DateTime']>;
  leave?: Maybe<Scalars['Float']>;
  memo?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  organization: IOrganization;
  phone?: Maybe<Scalars['String']>;
  roleCategory: IRoleCategory;
};

export type IMutation = {
  __typename?: 'Mutation';
  /** 관리자 휴가발생 다수 수정하기  */
  UpdateManyVacationsIssue: Array<IVacationIssue>;
  /** 초대코드 확인 */
  checkInvitationCode: Scalars['String'];
  createAccount: IAccount;
  /** 관리자용 출퇴근기록 생성하기 */
  createAdminWorkCheck: IWorkCheck;
  /**
   * 회사 신규 가입
   * @deprecated 회원가입 시 자동으로 회사가 생성됩니다. 테스트용으로 수동생성시에만 사용하여 주세요
   */
  createCompany: ICompany;
  /** 퇴근하기 */
  createEndWorkCheck: IWorkCheck;
  createGlobalConfig: IGlobalConfig;
  /** Create Holiday such as company founding anniversary */
  createHoliday: IHoliday;
  /** Create holidays such as "설날" */
  createHolidays: Scalars['String'];
  /** 멤버 정보 입력 */
  createMember: IMember;
  createNoticeBoard: INoticeBoard;
  /** 조직 신규 생성 */
  createOrganization: IOrganization;
  /** Create RoleCategory */
  createRoleCategory: IRoleCategory;
  /** 근무일정 생성 */
  createSchedule: Array<ISchedule>;
  /** 근무일정 유형 생성 */
  createScheduleCategory: IScheduleCategory;
  /** 근무일정 템플릿 생성 */
  createScheduleTemplate: IScheduleTemplate;
  /** 출근하기 */
  createStartWorkCheck: IWorkCheck;
  /** (관리자) 휴가관리 만들기 */
  createVacation: Array<IVacation>;
  /** 휴가유형 만들기 */
  createVacationCategory: IVacationCategory;
  /** 관리자 휴가 발생 만들기 */
  createVacationIssue: IVacationIssue;
  /** 근무노트 생성 */
  createWorkCheckMemo: IWorkCheck;
  /** 회사 정보 영구 삭제 / 복구 불가능하므로 사용 주의 */
  deleteCompany: Scalars['Boolean'];
  /** 근무일정 다수 삭제 */
  deleteManySchedule: Scalars['Boolean'];
  /** 근무일정 유형 다수 삭제 */
  deleteManyScheduleCategory: Scalars['Boolean'];
  /** 근무일정 템플릿 다수 삭제 */
  deleteManyScheduleTemplate: Scalars['Boolean'];
  /** 관리자 휴가발생 다수 삭제하기 */
  deleteManyVacationIssue: Scalars['Boolean'];
  /** 출근기록 다수 삭제 */
  deleteManyWorkCheck: Scalars['Boolean'];
  /** 멤버 정보 완전 삭제 */
  deleteMember: Scalars['Boolean'];
  deleteNoticeBoard: Scalars['Boolean'];
  /** 근무일정 단일 삭제 */
  deleteOneSchedule: Scalars['Boolean'];
  /** 근무일정 유형 단일 삭제 */
  deleteOneScheduleCategory: Scalars['Boolean'];
  /** 근무일정 템플릿 단일 삭제 */
  deleteOneScheduleTemplate: Scalars['Boolean'];
  /** 출퇴근기록 단일 삭제 */
  deleteOneWorkCheck: Scalars['Boolean'];
  /** 조직 정보 삭제 */
  deleteOrganization: Scalars['Boolean'];
  /** Delte RoleCategory by useing roleCategoryId */
  deleteRoleCategory: Scalars['Boolean'];
  /** (관리자) 휴가 완전 삭제 */
  deleteVacation: Scalars['Boolean'];
  /** 휴가유형ID로 데이터 완전 삭제하기 */
  deleteVacationCategory: Scalars['Boolean'];
  /** 관리자 휴가 발생 삭제하기 */
  deleteVacationIssue: Scalars['Boolean'];
  login: Scalars['String'];
  /** Remove refreshtoken in headers */
  logout: Scalars['String'];
  restoreAccessToken: Scalars['String'];
  /** 초대코드 발송 */
  sendCodeToEmail: Scalars['String'];
  /** 멤버 정보 소프트 삭제 */
  softDeleteMember: Scalars['Boolean'];
  /** (관리자) 휴가 삭제 - DB에는 유지 */
  softdeleteVacation: Scalars['Boolean'];
  /** 회사 정보 수정 */
  updateCompany: ICompany;
  updateGlobalConfig: IGlobalConfig;
  updateHoliday: IHoliday;
  /** scheduleId로 찾은 근무일정 다수 수정 */
  updateManySchedule: Array<ISchedule>;
  /** 출퇴근기록 다수 수정 */
  updateManyWorkCheck: Array<IWorkCheck>;
  /** 멤버 정보 수정 */
  updateMember: IMember;
  updateNoticeBoard: INoticeBoard;
  /** 근무일정 단일 수정 */
  updateOneSchedule: ISchedule;
  /** 출퇴근기록 단일 수정 */
  updateOneWorkCheck: IWorkCheck;
  /** 조직 정보 수정 */
  updateOrganization: IOrganization;
  /** Update RoleCategory */
  updateRoleCategory: IRoleCategory;
  /** 근무일정 유형 수정 */
  updateScheduleCategory: IScheduleCategory;
  /** 근무일정 템플릿 수정 */
  updateScheduleTemplate: IScheduleTemplate;
  /** (관리자) 휴가 수정하기 */
  updateVacation: IVacation;
  /** 휴가유형Id와 Input을 적어 데이터 수정하기 */
  updateVacationCategory: IVacationCategory;
  /** 관리자 휴가 발생 수정하기 */
  updateVacationIssue: IVacationIssue;
  /** Upload multiple files / Max total size approximatly 10M */
  uploadMultipleFiles: Array<IFile>;
  /** Upload a single file / Max file size apporximatly 10M */
  uploadSingleFile: IFile;
};


export type IMutationUpdateManyVacationsIssueArgs = {
  updateVacationIssueInput?: InputMaybe<IUpdateVacationIssueInput>;
  vacationIssueId: Array<Scalars['String']>;
};


export type IMutationCheckInvitationCodeArgs = {
  invitationCode: Scalars['String'];
  memberId: Scalars['String'];
};


export type IMutationCreateAccountArgs = {
  createCompanyInput?: InputMaybe<ICreateCompanyInput>;
  email: Scalars['String'];
  invitationCode?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  password: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
};


export type IMutationCreateAdminWorkCheckArgs = {
  createWorkCheckInput: ICreateWorkCheckInput;
};


export type IMutationCreateCompanyArgs = {
  createCompanyInput: ICreateCompanyInput;
};


export type IMutationCreateEndWorkCheckArgs = {
  workCheckId: Scalars['String'];
};


export type IMutationCreateGlobalConfigArgs = {
  createGlobalConfigInput?: InputMaybe<ICreateGlobalConfigInput>;
};


export type IMutationCreateHolidayArgs = {
  createHolidayInput: ICreateHolidayInput;
};


export type IMutationCreateMemberArgs = {
  createMemberInput: ICreateMemberInput;
};


export type IMutationCreateNoticeBoardArgs = {
  createNoticeBoardInput: ICreateNoticeBoardInput;
};


export type IMutationCreateOrganizationArgs = {
  createOrganizationInput: ICreateOrganizationInput;
};


export type IMutationCreateRoleCategoryArgs = {
  createRoleCategoryInput: ICreateRoleCategoryInput;
};


export type IMutationCreateScheduleArgs = {
  createScheduleInput: ICreateScheduleInput;
  dates: Array<Scalars['DateTime']>;
};


export type IMutationCreateScheduleCategoryArgs = {
  createScheduleCategoryInput: ICreateScheduleCategoryInput;
};


export type IMutationCreateScheduleTemplateArgs = {
  createScheduleTemplateInput: ICreateScheduleTemplateInput;
};


export type IMutationCreateVacationArgs = {
  createVacaionInput: ICreateVacationInput;
};


export type IMutationCreateVacationCategoryArgs = {
  createVacationCategoryInput: ICreateVacationCategoryInput;
};


export type IMutationCreateVacationIssueArgs = {
  createVacationIssueInput: ICreateVacationIssueInput;
};


export type IMutationCreateWorkCheckMemoArgs = {
  workCheckId: Scalars['String'];
  workCheckMemo: Scalars['String'];
};


export type IMutationDeleteManyScheduleArgs = {
  scheduleId: Array<Scalars['String']>;
};


export type IMutationDeleteManyScheduleCategoryArgs = {
  scheduleCategoryId: Array<Scalars['String']>;
};


export type IMutationDeleteManyScheduleTemplateArgs = {
  scheduleTemplateId: Array<Scalars['String']>;
};


export type IMutationDeleteManyVacationIssueArgs = {
  vacationIssueId: Array<Scalars['String']>;
};


export type IMutationDeleteManyWorkCheckArgs = {
  workCheckId: Array<Scalars['String']>;
};


export type IMutationDeleteMemberArgs = {
  memberId: Scalars['String'];
};


export type IMutationDeleteNoticeBoardArgs = {
  noticeBoardId: Scalars['String'];
};


export type IMutationDeleteOneScheduleArgs = {
  scheduleId: Scalars['String'];
};


export type IMutationDeleteOneScheduleCategoryArgs = {
  scheduleCategoryId: Scalars['String'];
};


export type IMutationDeleteOneScheduleTemplateArgs = {
  scheduleTemplateId: Scalars['String'];
};


export type IMutationDeleteOneWorkCheckArgs = {
  workCheckId: Scalars['String'];
};


export type IMutationDeleteOrganizationArgs = {
  organizationid: Scalars['String'];
};


export type IMutationDeleteRoleCategoryArgs = {
  roleCategoryId: Scalars['String'];
};


export type IMutationDeleteVacationArgs = {
  vacationId: Scalars['String'];
};


export type IMutationDeleteVacationCategoryArgs = {
  vacationCategoryId: Scalars['String'];
};


export type IMutationDeleteVacationIssueArgs = {
  vacationIssueId: Scalars['String'];
};


export type IMutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type IMutationSendCodeToEmailArgs = {
  email: Scalars['String'];
  memberId: Scalars['String'];
};


export type IMutationSoftDeleteMemberArgs = {
  memberId: Scalars['String'];
};


export type IMutationSoftdeleteVacationArgs = {
  vacationId: Scalars['String'];
};


export type IMutationUpdateCompanyArgs = {
  updateCompanyInput: IUpdateCompanyInput;
};


export type IMutationUpdateGlobalConfigArgs = {
  updateGlobalConfigInput: IUpdateGlobalConfigInput;
};


export type IMutationUpdateHolidayArgs = {
  holidayId: Scalars['String'];
  updateHolidayInput: IUpdateHolidayInput;
};


export type IMutationUpdateManyScheduleArgs = {
  scheduleId: Array<Scalars['String']>;
  updateScheduleInput: IUpdateScheduleInput;
};


export type IMutationUpdateManyWorkCheckArgs = {
  updateWorkCheckInput: IUpdateWorkCheckInput;
  workCheckId: Array<Scalars['String']>;
};


export type IMutationUpdateMemberArgs = {
  memberId: Scalars['String'];
  updateMemberInput: IUpdateMemberInput;
};


export type IMutationUpdateNoticeBoardArgs = {
  noticeBoardId: Scalars['String'];
  updateNoticeBoardInput: IUpdateNoticeBoardInput;
};


export type IMutationUpdateOneScheduleArgs = {
  scheduleId: Scalars['String'];
  updateScheduleInput: IUpdateScheduleInput;
};


export type IMutationUpdateOneWorkCheckArgs = {
  updateWorkCheckInput: IUpdateWorkCheckInput;
  workCheckId: Scalars['String'];
};


export type IMutationUpdateOrganizationArgs = {
  organizationId: Scalars['String'];
  updateOrganizationInput: IUpdateOrganizationInput;
};


export type IMutationUpdateRoleCategoryArgs = {
  roleCategoryId: Scalars['String'];
  updateRoleCategoryInput: IUpdateRoleCategoryInput;
};


export type IMutationUpdateScheduleCategoryArgs = {
  scheduleCategoryId: Scalars['String'];
  updateScheduleCategoryInput: IUpdateScheduleCategoryInput;
};


export type IMutationUpdateScheduleTemplateArgs = {
  scheduleTemplateId: Scalars['String'];
  updateScheduleTemplateInput: IUpdateScheduleTemplatInput;
};


export type IMutationUpdateVacationArgs = {
  updateVacationInput: IUpdateVacationInput;
  vacationId: Scalars['String'];
};


export type IMutationUpdateVacationCategoryArgs = {
  updateVacationCategoryInput: IUpdateVacationCategoryInput;
  vacationCategoryId: Scalars['String'];
};


export type IMutationUpdateVacationIssueArgs = {
  updateVacationIssueInput: IUpdateVacationIssueInput;
  vacationIssueId: Scalars['String'];
};


export type IMutationUploadMultipleFilesArgs = {
  files: Array<Scalars['Upload']>;
};


export type IMutationUploadSingleFileArgs = {
  file: Scalars['Upload'];
};

export type INoticeBoard = {
  __typename?: 'NoticeBoard';
  account: IAccount;
  company: ICompany;
  contents: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  preface: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type IOrganization = {
  __typename?: 'Organization';
  address?: Maybe<Scalars['String']>;
  checkPoint?: Maybe<Scalars['String']>;
  company?: Maybe<ICompany>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lat?: Maybe<Scalars['String']>;
  lng?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  range?: Maybe<Scalars['Int']>;
  scheduleTemplate: Array<IScheduleTemplate>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type IQuery = {
  __typename?: 'Query';
  fetchAccount: IAccount;
  fetchAllNoticeBoards: Array<INoticeBoard>;
  /** 근무일정 유형 전체 조회 */
  fetchAllScheduleCategories: Array<IScheduleCategory>;
  /** 근무일정 템플릿 전체 조회 */
  fetchAllScheduleTemplates: Array<IScheduleTemplate>;
  /**
   * 회사 정보 조회
   * @deprecated Initializing Status / Need Update
   */
  fetchCompanyDetail: ICompany;
  /** 지정된 기간동안의 회사+지점에 속한 멤버들의 출퇴근 기록 조회 - 목록형 - 관리자 */
  fetchDateMemberWorkChecks: Array<IWorkCheck>;
  fetchGlobalConfig: IGlobalConfig;
  /** Fetch Holiday such as companyAnniversary */
  fetchHoliday: Array<IHoliday>;
  /** Fetch Holidays in ASC order */
  fetchHolidays: Array<IHoliday>;
  /** 선택한 기간동안의 근무일정 조회 - 목록형 - 관리자 */
  fetchListTypeSchedule: Array<ISchedule>;
  /** memberId(사원ID)로 개별 조회, memberId 입력시 입력한 member 조회, 아니면 로그인한 유저 정보 조회 */
  fetchMember: IMember;
  /** member개인(나)의 출퇴근 기록 조회 - 직원모드 */
  fetchMemberWorkChecks: Array<IWorkCheck>;
  /** comanyId에 해당하는 멤버 전체 조회 */
  fetchMembers: Array<IMember>;
  /** 회사 지점에 속한 멤버들의 출퇴근 기록을 월별로 조회 - 달력형 - 관리자 */
  fetchMonthWorkChecks: Array<Array<Array<IWorkCheck>>>;
  fetchOneNoticeBoard: INoticeBoard;
  /** 조직 상세 조회 */
  fetchOrganizationDetail: IOrganization;
  /** 조직 리스트 조회 */
  fetchOrganizations: Array<IOrganization>;
  /** Fetch RoleCategorys */
  fetchRoleCategories: Array<IRoleCategory>;
  /** Fetch RoleCategory */
  fetchRoleCategory: IRoleCategory;
  /** (관리자) 휴가 ID를 통한 휴가 조회 */
  fetchVacation: IVacation;
  /** 휴가유형ID를 적어서 하나의 유형 찾기 */
  fetchVacationCategory: IVacationCategory;
  /** 휴가유형 전체 찾기 */
  fetchVacationCategorys: Array<IVacationCategory>;
  /** 관리자 휴가 발생Id 조회 */
  fetchVacationIssue: IVacationIssue;
  /** 관리자 EndDate가 기준일자인 휴가발생 조회하기 */
  fetchVacationIssueBaseDate: Array<Array<IVacationIssue>>;
  /** 관리자 기준일자 기준으로 앞에 발생된 휴가 목록 조회 */
  fetchVacationIssueDetailDate: Array<Array<IVacationIssue>>;
  /** 관리자 기준일자 기준으로 앞에 발생된 휴가 퇴사자랑 같이 조회 */
  fetchVacationIssueDetailDateDelete: Array<Array<IVacationIssue>>;
  /** 관지라 EndDate가 기준일자이고, 퇴사자랑 같이 조회 */
  fetchVacationIssueWithBaseDateDelete: Array<Array<IVacationIssue>>;
  /** (관리자) 활성직원 조회 */
  fetchVacationWithDate: Array<Array<IVacation>>;
  /** (관리자) 비활성화 된 직원 함께 조회 */
  fetchVacationWithDelete: Array<Array<IVacation>>;
};


export type IQueryFetchDateMemberWorkChecksArgs = {
  endDate: Scalars['DateTime'];
  organizationId?: InputMaybe<Array<Scalars['String']>>;
  startDate: Scalars['DateTime'];
};


export type IQueryFetchListTypeScheduleArgs = {
  endDate: Scalars['DateTime'];
  organizationId: Array<Scalars['String']>;
  startDate: Scalars['DateTime'];
};


export type IQueryFetchMemberArgs = {
  memberId?: InputMaybe<Scalars['String']>;
};


export type IQueryFetchMemberWorkChecksArgs = {
  endDate: Scalars['DateTime'];
  startDate: Scalars['DateTime'];
};


export type IQueryFetchMonthWorkChecksArgs = {
  isActiveMember?: Scalars['Boolean'];
  month: Scalars['String'];
  organizationId: Array<Scalars['String']>;
};


export type IQueryFetchOneNoticeBoardArgs = {
  noticeBoardId: Scalars['String'];
};


export type IQueryFetchOrganizationDetailArgs = {
  organizationId: Scalars['String'];
};


export type IQueryFetchRoleCategoryArgs = {
  roleCategoryId: Scalars['String'];
};


export type IQueryFetchVacationArgs = {
  vacationId: Scalars['String'];
};


export type IQueryFetchVacationCategoryArgs = {
  vacationCategoryId: Scalars['String'];
};


export type IQueryFetchVacationCategorysArgs = {
  organizationid: Scalars['String'];
};


export type IQueryFetchVacationIssueArgs = {
  vacationIssueId: Scalars['String'];
};


export type IQueryFetchVacationIssueBaseDateArgs = {
  baseDate: Scalars['DateTime'];
  endDate?: InputMaybe<Scalars['DateTime']>;
  organizationId: Array<Scalars['String']>;
  startDate?: InputMaybe<Scalars['DateTime']>;
};


export type IQueryFetchVacationIssueDetailDateArgs = {
  baseDate: Scalars['DateTime'];
  endDate?: InputMaybe<Scalars['DateTime']>;
  organizationId: Array<Scalars['String']>;
  startDate?: InputMaybe<Scalars['DateTime']>;
};


export type IQueryFetchVacationIssueDetailDateDeleteArgs = {
  baseDate: Scalars['DateTime'];
  endDate?: InputMaybe<Scalars['DateTime']>;
  organizationId: Array<Scalars['String']>;
  startDate?: InputMaybe<Scalars['DateTime']>;
};


export type IQueryFetchVacationIssueWithBaseDateDeleteArgs = {
  baseDate: Scalars['DateTime'];
  endDate?: InputMaybe<Scalars['DateTime']>;
  organizationId: Array<Scalars['String']>;
  startDate?: InputMaybe<Scalars['DateTime']>;
};


export type IQueryFetchVacationWithDateArgs = {
  EndDate?: InputMaybe<Scalars['DateTime']>;
  StartDate?: InputMaybe<Scalars['DateTime']>;
  organizationId: Array<Scalars['String']>;
};


export type IQueryFetchVacationWithDeleteArgs = {
  EndDate?: InputMaybe<Scalars['DateTime']>;
  StartDate?: InputMaybe<Scalars['DateTime']>;
  organizationId: Array<Scalars['String']>;
};

export type IRoleCategory = {
  __typename?: 'RoleCategory';
  colorCode: Scalars['String'];
  company: ICompany;
  id: Scalars['String'];
  memo?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  scheduleTemplate: Array<IScheduleTemplate>;
};

export type ISchedule = {
  __typename?: 'Schedule';
  company: ICompany;
  date: Scalars['DateTime'];
  endWorkTime?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  member: IMember;
  memo?: Maybe<Scalars['String']>;
  organization: IOrganization;
  roleCategory: IRoleCategory;
  scheduleCategory: IScheduleCategory;
  scheduleTemplate: IScheduleTemplate;
  startWorkTime?: Maybe<Scalars['String']>;
};

export type IScheduleCategory = {
  __typename?: 'ScheduleCategory';
  color: Scalars['String'];
  company: ICompany;
  id: Scalars['String'];
  isNotHolidayWork?: Maybe<Scalars['Boolean']>;
  isOvertime?: Maybe<Scalars['Boolean']>;
  memo?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

export type IScheduleTemplate = {
  __typename?: 'ScheduleTemplate';
  breakTime?: Maybe<Scalars['String']>;
  colorCode: Scalars['String'];
  company: ICompany;
  endTime: Scalars['String'];
  id: Scalars['String'];
  memo?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  organization: Array<IOrganization>;
  roleCategory: Array<IRoleCategory>;
  scheduleCategory?: Maybe<IScheduleCategory>;
  startTime: Scalars['String'];
};

export type IUpdateCompanyInput = {
  logoUrl?: InputMaybe<Scalars['String']>;
  memberCount?: InputMaybe<Scalars['Int']>;
  membership?: InputMaybe<IMembership_Type>;
  name?: InputMaybe<Scalars['String']>;
  rules?: InputMaybe<Scalars['String']>;
};

export type IUpdateGlobalConfigInput = {
  allowedCheckInAfter?: InputMaybe<Scalars['Int']>;
  allowedCheckInBefore?: InputMaybe<Scalars['Int']>;
  isCheckInEnabled?: InputMaybe<Scalars['Boolean']>;
  isCheckOutEnabled?: InputMaybe<Scalars['Boolean']>;
  isScheduleEnabled?: InputMaybe<Scalars['Boolean']>;
  isVacationEnabled?: InputMaybe<Scalars['Boolean']>;
  isWorkLogEnabled?: InputMaybe<Scalars['Boolean']>;
};

export type IUpdateHolidayInput = {
  dateName?: InputMaybe<Scalars['String']>;
  locdate?: InputMaybe<Scalars['String']>;
};

export type IUpdateMemberInput = {
  exitDate?: InputMaybe<Scalars['DateTime']>;
  joinDate?: InputMaybe<Scalars['DateTime']>;
  memo?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Scalars['String']>;
  roleCategoryId?: InputMaybe<Scalars['String']>;
};

export type IUpdateNoticeBoardInput = {
  contents?: InputMaybe<Scalars['String']>;
  preface?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type IUpdateOrganizationInput = {
  address?: InputMaybe<Scalars['String']>;
  checkPoint?: InputMaybe<Scalars['String']>;
  color?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  lat?: InputMaybe<Scalars['String']>;
  lng?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  range?: InputMaybe<Scalars['Int']>;
};

export type IUpdateRoleCategoryInput = {
  colorCode?: InputMaybe<Scalars['String']>;
  memo?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type IUpdateScheduleCategoryInput = {
  color?: InputMaybe<Scalars['String']>;
  isNotHolidayWork?: InputMaybe<Scalars['Boolean']>;
  isOvertime?: InputMaybe<Scalars['Boolean']>;
  memo?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type IUpdateScheduleInput = {
  EndWorkTime?: InputMaybe<Scalars['String']>;
  memo?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Scalars['String']>;
  roleCategoryId?: InputMaybe<Scalars['String']>;
  scheduleCategoryId?: InputMaybe<Scalars['String']>;
  startWorkTime?: InputMaybe<Scalars['String']>;
};

export type IUpdateScheduleTemplatInput = {
  colorCode?: InputMaybe<Scalars['String']>;
  endTime?: InputMaybe<Scalars['String']>;
  memo?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Array<Scalars['String']>>;
  roleCategoryId?: InputMaybe<Array<Scalars['String']>>;
  scheduleCategoryId?: InputMaybe<Scalars['String']>;
  startTime?: InputMaybe<Scalars['String']>;
};

export type IUpdateVacationCategoryInput = {
  description?: InputMaybe<Scalars['String']>;
  memberId: Scalars['String'];
  vacationCategoryId?: InputMaybe<Scalars['String']>;
  vacations?: InputMaybe<Scalars['String']>;
};

export type IUpdateVacationInput = {
  description?: InputMaybe<Scalars['String']>;
  memberId: Scalars['String'];
  vacationCategoryId: Scalars['String'];
  vacationEndDate: Scalars['DateTime'];
  vacationStartDate: Scalars['DateTime'];
};

export type IUpdateVacationIssueInput = {
  description?: InputMaybe<Scalars['String']>;
  expirationDate?: InputMaybe<Scalars['DateTime']>;
  memberId?: InputMaybe<Scalars['String']>;
  startingPoint?: InputMaybe<Scalars['DateTime']>;
  vacationAll?: InputMaybe<Scalars['Int']>;
};

export type IUpdateWorkCheckInput = {
  isComfirmed?: InputMaybe<Scalars['Boolean']>;
  isWorking?: InputMaybe<Scalars['Boolean']>;
  memberId?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Scalars['String']>;
  quittingTime?: InputMaybe<Scalars['String']>;
  roleCategoryId?: InputMaybe<Scalars['String']>;
  scheduleId?: InputMaybe<Scalars['String']>;
  workCheckMemo?: InputMaybe<Scalars['String']>;
  workDay?: InputMaybe<Scalars['DateTime']>;
  workingTime?: InputMaybe<Scalars['String']>;
};

export type IVacation = {
  __typename?: 'Vacation';
  company?: Maybe<ICompany>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  member?: Maybe<IMember>;
  organization?: Maybe<IOrganization>;
  vacationCategory?: Maybe<IVacationCategory>;
  vacationEndDate?: Maybe<Scalars['DateTime']>;
  vacationStartDate: Scalars['DateTime'];
};

export type IVacationCategory = {
  __typename?: 'VacationCategory';
  deductionDays: Scalars['Float'];
  id: Scalars['String'];
  memo?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  organization: IOrganization;
  paidTime: Scalars['Int'];
  roleCategory: IRoleCategory;
  timeOption: Scalars['String'];
};

export type IVacationIssue = {
  __typename?: 'VacationIssue';
  company?: Maybe<ICompany>;
  description: Scalars['String'];
  expirationDate: Scalars['DateTime'];
  id: Scalars['String'];
  member: IMember;
  organization: IOrganization;
  remaining?: Maybe<Scalars['Int']>;
  startingPoint: Scalars['DateTime'];
  useVacation?: Maybe<Scalars['Int']>;
  vacationAll: Scalars['Int'];
};

export type IWorkCheck = {
  __typename?: 'WorkCheck';
  company: ICompany;
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  isComfirmed: Scalars['Boolean'];
  member: IMember;
  organization?: Maybe<IOrganization>;
  quittingTime?: Maybe<Scalars['DateTime']>;
  roleCategory?: Maybe<IRoleCategory>;
  schedule?: Maybe<ISchedule>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  workCheckMemo?: Maybe<Scalars['String']>;
  workDay: Scalars['DateTime'];
  workingTime?: Maybe<Scalars['DateTime']>;
};
