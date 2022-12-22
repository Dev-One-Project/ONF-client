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
  membership?: InputMaybe<IMembership_Type>;
  name?: InputMaybe<Scalars['String']>;
  rules?: InputMaybe<Scalars['String']>;
};

export type ICreateGlobalConfigInput = {
  allowedCheckInAfter?: Scalars['Int'];
  allowedCheckInBefore?: Scalars['Int'];
  companyId: Scalars['String'];
  isCheckInEnabled?: Scalars['Boolean'];
  isCheckOutEnabled?: Scalars['Boolean'];
  isScheduleEnabled?: Scalars['Boolean'];
  isVacationEnabled?: Scalars['Boolean'];
  isWorkLogEnabled?: Scalars['Boolean'];
};

export type ICreateHolidayInput = {
  dateName?: InputMaybe<Scalars['String']>;
  locdate?: InputMaybe<Scalars['String']>;
  premuimRate?: InputMaybe<Scalars['Int']>;
};

export type ICreateMemberInput = {
  companyId: Scalars['String'];
  exitDate?: InputMaybe<Scalars['String']>;
  isAdmin?: InputMaybe<Scalars['Boolean']>;
  joinDate: Scalars['String'];
  leave?: InputMaybe<Scalars['Int']>;
  memo?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  organizationId?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  roleCategoryId?: InputMaybe<Scalars['String']>;
};

export type ICreateNoticeBoardInput = {
  contents: Scalars['String'];
  title: Scalars['String'];
};

export type ICreateOrganizationInput = {
  address: Scalars['String'];
  color: Scalars['String'];
  companyId: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
  lat?: InputMaybe<Scalars['String']>;
  lng?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type ICreateScheduleCategoryInput = {
  colorCode: Scalars['String'];
  isNotHolidayWork?: InputMaybe<Scalars['Boolean']>;
  isOvertime?: InputMaybe<Scalars['Boolean']>;
  memo?: InputMaybe<Scalars['String']>;
  scheduleCategoryName: Scalars['String'];
};

export type ICreateScheduleInput = {
  finishWorkTime: Scalars['String'];
  startWorkTime: Scalars['String'];
};

export type ICreateScheduleTemplateInput = {
  colorCode: Scalars['String'];
  endTime: Scalars['String'];
  memo?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  organizationId: Scalars['String'];
  roleCategoryId: Scalars['String'];
  scheduleCategoryId?: InputMaybe<Scalars['String']>;
  startTime: Scalars['String'];
};

export type ICreateVacationCategoryInput = {
  deductionDays: Scalars['Int'];
  memo?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  organizationId: Scalars['String'];
  paidTime: Scalars['Int'];
  roleCategoryId: Scalars['String'];
  timeOption: Scalars['String'];
  vacationCategoryGroup: Scalars['String'];
};

export type ICreateVacationInput = {
  description?: InputMaybe<Scalars['String']>;
  memberId: Scalars['String'];
  vacationCategoryId?: InputMaybe<Scalars['String']>;
  vacations?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type ICreateVacationIssueInput = {
  description: Scalars['String'];
  expirationDate: Scalars['DateTime'];
  memberId: Scalars['String'];
  startingPoint: Scalars['DateTime'];
  vacationAll: Scalars['Int'];
};

export type ICreateWorkCheckInput = {
  breakEndTime?: InputMaybe<Scalars['DateTime']>;
  breakStartTime?: InputMaybe<Scalars['DateTime']>;
  memberId: Scalars['String'];
  organizationId: Scalars['String'];
  quittingTime?: InputMaybe<Scalars['DateTime']>;
  roleCategoryId: Scalars['String'];
  scheduleId: Scalars['String'];
  workCheckMemo?: InputMaybe<Scalars['String']>;
  workDay: Scalars['DateTime'];
  workingTime?: InputMaybe<Scalars['DateTime']>;
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
  dateName?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  locdate?: Maybe<Scalars['String']>;
  premuimRate?: Maybe<Scalars['Int']>;
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
  exitDate?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  isJoin: Scalars['Boolean'];
  joinDate: Scalars['String'];
  leave?: Maybe<Scalars['Int']>;
  memo?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  organization?: Maybe<IOrganization>;
  phone: Scalars['String'];
  roleCategory?: Maybe<IRoleCategory>;
};

export type IMutation = {
  __typename?: 'Mutation';
  /** 초대코드 확인 */
  checkInvitationCode: Scalars['String'];
  createAccount: IAccount;
  /** 관리자용 출퇴근기록 생성하기 */
  createAdminWorkCheck: IWorkCheck;
  /** 회사 신규 가입 */
  createCompany: ICompany;
  /** 휴게종료 시간 자동 생성 */
  createEndBreakTime: IWorkCheck;
  /** 퇴근기록 자동 생성 */
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
  /** 근무기록 생성 */
  createSchedule: ISchedule;
  /** 근무일정 유형 생성 */
  createScheduleCategory: IScheduleCategory;
  /** 근무일정 템플릿 생성 */
  createScheduleTemplate: IScheduleTemplate;
  /** 휴게시작 시간 자동 생성(자동 휴게시간 설정 때는 X) */
  createStartBreakTime: IWorkCheck;
  /** 출근기록 자동 생성 */
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
  /** 멤버 정보 완전 삭제 */
  deleteMember: Scalars['Boolean'];
  deleteNoticeBoard: Scalars['Boolean'];
  /** 조직 정보 삭제 */
  deleteOrganization: Scalars['Boolean'];
  /** 근무기록 삭제 */
  deleteSchedule: Scalars['Boolean'];
  /** 근무일정 유형 삭제 */
  deleteScheduleCategory: Scalars['Boolean'];
  /** 근무일정 템플릿 삭제 */
  deleteScheduleTemplate: Scalars['Boolean'];
  /** (관리자) 휴가 완전 삭제 */
  deleteVacation: Scalars['Boolean'];
  /** 휴가유형ID로 데이터 완전 삭제하기 */
  deleteVacationCategory: Scalars['Boolean'];
  /** 관리자 휴가 발생 삭제하기 */
  deleteVacationIssue: Scalars['Boolean'];
  /** 출퇴근기록 삭제 */
  deleteWorkCheck: Scalars['Boolean'];
  login: Scalars['String'];
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
  /** 멤버 정보 수정 */
  updateMember: IMember;
  updateNoticeBoard: INoticeBoard;
  /** 조직 정보 수정 */
  updateOrganization: IOrganization;
  /** scheduleId(근무기록Id)로 근무기록 수정 */
  updateSchedule: ISchedule;
  /** 근무일정 유형 수정 */
  updateScheduleCategory: IScheduleCategory;
  /** 근무일정 템플릿 수정 */
  updateScheduleTemplate: IScheduleTemplate;
  /** (관리자) 휴가 수정하기 */
  updateVacation: Array<IVacation>;
  /** 휴가유형Id와 Input을 적어 데이터 수정하기 */
  updateVacationCategory: IVacationCategory;
  /** 관리자 휴가 발생 수정하기 */
  updateVacationIssue: IVacationIssue;
  /** 출퇴근기록 수정 */
  updateWorkCheck: IWorkCheck;
  /** Upload multiple files / Max total size approximatly 10M */
  uploadMultipleFiles: Array<IFile>;
  /** Upload a single file / Max file size apporximatly 10M */
  uploadSingleFile: IFile;
};


export type IMutationCheckInvitationCodeArgs = {
  invitationCode: Scalars['String'];
  memberId: Scalars['String'];
};


export type IMutationCreateAccountArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type IMutationCreateAdminWorkCheckArgs = {
  companyId: Scalars['String'];
  createWorkCheckInput: ICreateWorkCheckInput;
};


export type IMutationCreateCompanyArgs = {
  createCompanyInput: ICreateCompanyInput;
};


export type IMutationCreateEndBreakTimeArgs = {
  workCheckId: Scalars['String'];
};


export type IMutationCreateEndWorkCheckArgs = {
  workCheckId: Scalars['String'];
};


export type IMutationCreateGlobalConfigArgs = {
  createGlobalConfigInput: ICreateGlobalConfigInput;
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


export type IMutationCreateScheduleArgs = {
  createScheduleInput: ICreateScheduleInput;
};


export type IMutationCreateScheduleCategoryArgs = {
  createScheduleCategoryInput: ICreateScheduleCategoryInput;
};


export type IMutationCreateScheduleTemplateArgs = {
  createScheduleTemplateInput: ICreateScheduleTemplateInput;
};


export type IMutationCreateStartBreakTimeArgs = {
  workCheckId: Scalars['String'];
};


export type IMutationCreateStartWorkCheckArgs = {
  memberId: Scalars['String'];
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


export type IMutationDeleteCompanyArgs = {
  companyId: Scalars['String'];
};


export type IMutationDeleteMemberArgs = {
  memberId: Scalars['String'];
};


export type IMutationDeleteNoticeBoardArgs = {
  noticeBoardId: Scalars['String'];
};


export type IMutationDeleteOrganizationArgs = {
  organizationid: Scalars['String'];
};


export type IMutationDeleteScheduleArgs = {
  scheduleId: Scalars['String'];
};


export type IMutationDeleteScheduleCategoryArgs = {
  scheduleCategoryId: Scalars['String'];
};


export type IMutationDeleteScheduleTemplateArgs = {
  scheduleTemplateId: Scalars['String'];
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


export type IMutationDeleteWorkCheckArgs = {
  workCheckId: Scalars['String'];
};


export type IMutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type IMutationSendCodeToEmailArgs = {
  companyId: Scalars['String'];
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
  companyId: Scalars['String'];
  updateCompanyInput: ICreateCompanyInput;
};


export type IMutationUpdateGlobalConfigArgs = {
  updateGlobalConfigInput: IUpdateGlobalConfigInput;
};


export type IMutationUpdateMemberArgs = {
  memberId: Scalars['String'];
  updateMemberInput: IUpdateMemberInput;
};


export type IMutationUpdateNoticeBoardArgs = {
  noticeBoardId: Scalars['String'];
  updateNoticeBoardInput: IUpdateNoticeBoardInput;
};


export type IMutationUpdateOrganizationArgs = {
  organizationId: Scalars['String'];
  updateOrganizationInput: IUpdateOrganizationInput;
};


export type IMutationUpdateScheduleArgs = {
  scheduleId: Scalars['String'];
  updateScheduleInput: IUpdateScheduleInput;
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
};


export type IMutationUpdateVacationCategoryArgs = {
  updateVacationCategoryInput: IUpdateVacationCategoryInput;
  vacationCategoryId: Scalars['String'];
};


export type IMutationUpdateVacationIssueArgs = {
  updateVacationIssueInput: IUpdateVacationIssueInput;
  vacationIssueId: Scalars['String'];
};


export type IMutationUpdateWorkCheckArgs = {
  updateWorkCheckInput: IUpdateWorkCheckInput;
  workCheckId: Scalars['String'];
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
  contents: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type IOrganization = {
  __typename?: 'Organization';
  address?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  company?: Maybe<ICompany>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lat?: Maybe<Scalars['String']>;
  lng?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
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
  /** 해당 회사에 속하는 member들의 출퇴근 기록 조회 */
  fetchCompanyWorkChecks: Array<IWorkCheck>;
  /** 지정된 기간동안의 회사+지점에 속한 멤버들의 출퇴근 기록 조회 */
  fetchDateMemberWorkChecks: Array<IWorkCheck>;
  fetchGlobalConfig: IGlobalConfig;
  /** Fetch Holidays in ASC order */
  fetchHolidays: Array<IHoliday>;
  /** memberId(사원ID)로 개별 조회 */
  fetchMember: IMember;
  fetchMemberSchedule: ISchedule;
  /** member개인의 출퇴근 기록 조회 */
  fetchMemberWorkChecks: Array<IWorkCheck>;
  /** comanyId에 해당하는 멤버 전체 조회 */
  fetchMembers: Array<IMember>;
  /** 회사 지점에 속한 멤버들의 출퇴근 기록을 월별로 조회 */
  fetchMonthWorkChecks: Array<Array<IWorkCheck>>;
  fetchOneNoticeBoard: INoticeBoard;
  /** 조직 상세 조회 */
  fetchOrganizationDetail: IOrganization;
  /** 조직 리스트 조회 */
  fetchOrganizations: Array<IOrganization>;
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
  /** 휴가 발생특정날짜 모두조회 */
  fetchVacationIssueWithDate: Array<IVacationIssue>;
  /** 관리자 비활성화된 사원도 같이조회 */
  fetchVacationIssueWithDelete: Array<IVacationIssue>;
  /** 관리자 휴가 발생 조회 */
  fetchVacationIssues: Array<IVacationIssue>;
  /** (관리자) 기간 내 휴가 조회 */
  fetchVacationWithDate: Array<IVacation>;
  /** (관리자) 퇴사자와 함께 조회 */
  fetchVacationWithDelete: Array<IVacation>;
  /** (관리자) 휴가 전체 조회 */
  fetchVacations: Array<IVacation>;
};


export type IQueryFetchCompanyDetailArgs = {
  companyId: Scalars['String'];
};


export type IQueryFetchCompanyWorkChecksArgs = {
  companyId: Scalars['String'];
};


export type IQueryFetchDateMemberWorkChecksArgs = {
  companyId: Scalars['String'];
  endDate: Scalars['DateTime'];
  organizationId?: InputMaybe<Array<Scalars['String']>>;
  startDate: Scalars['DateTime'];
};


export type IQueryFetchGlobalConfigArgs = {
  companyId: Scalars['String'];
};


export type IQueryFetchMemberArgs = {
  memberId: Scalars['String'];
};


export type IQueryFetchMemberScheduleArgs = {
  memberId: Scalars['String'];
};


export type IQueryFetchMemberWorkChecksArgs = {
  memberId: Scalars['String'];
};


export type IQueryFetchMembersArgs = {
  companyId: Scalars['String'];
};


export type IQueryFetchMonthWorkChecksArgs = {
  comapnyId: Scalars['String'];
  month: Scalars['String'];
};


export type IQueryFetchOneNoticeBoardArgs = {
  noticeBoardId: Scalars['String'];
};


export type IQueryFetchOrganizationDetailArgs = {
  organizationId: Scalars['String'];
};


export type IQueryFetchOrganizationsArgs = {
  companyId: Scalars['String'];
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
  companyId: Scalars['String'];
};


export type IQueryFetchVacationIssueDetailDateArgs = {
  baseDate: Scalars['DateTime'];
  companyId: Scalars['String'];
};


export type IQueryFetchVacationIssueDetailDateDeleteArgs = {
  baseDate: Scalars['DateTime'];
  companyId: Scalars['String'];
};


export type IQueryFetchVacationIssueWithBaseDateDeleteArgs = {
  baseDate: Scalars['DateTime'];
  companyId: Scalars['String'];
};


export type IQueryFetchVacationIssueWithDateArgs = {
  endDate: Scalars['DateTime'];
  startDate: Scalars['DateTime'];
};


export type IQueryFetchVacationIssuesArgs = {
  companyId: Scalars['String'];
};


export type IQueryFetchVacationWithDateArgs = {
  vacationEnd: Scalars['DateTime'];
  vacationStart: Scalars['DateTime'];
};


export type IQueryFetchVacationsArgs = {
  companyId: Scalars['String'];
};

export type IRoleCategory = {
  __typename?: 'RoleCategory';
  colorCode: Scalars['String'];
  company: ICompany;
  duty: Scalars['String'];
  id: Scalars['String'];
  memo?: Maybe<Scalars['String']>;
};

export type ISchedule = {
  __typename?: 'Schedule';
  finishWorkTime: Scalars['String'];
  id: Scalars['String'];
  member: IMember;
  organization: IOrganization;
  roleCategory: IRoleCategory;
  startWorkTime: Scalars['String'];
};

export type IScheduleCategory = {
  __typename?: 'ScheduleCategory';
  colorCode: Scalars['String'];
  id: Scalars['String'];
  isNotHolidayWork?: Maybe<Scalars['Boolean']>;
  isOvertime?: Maybe<Scalars['Boolean']>;
  memo?: Maybe<Scalars['String']>;
  scheduleCategoryName: Scalars['String'];
};

export type IScheduleTemplate = {
  __typename?: 'ScheduleTemplate';
  colorCode: Scalars['String'];
  endTime: Scalars['String'];
  id: Scalars['String'];
  memo?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  organization: IOrganization;
  roleCategory: IRoleCategory;
  scheduleCategory?: Maybe<IScheduleCategory>;
  startTime: Scalars['String'];
};

export type IUpdateGlobalConfigInput = {
  allowedCheckInAfter?: Scalars['Int'];
  allowedCheckInBefore?: Scalars['Int'];
  isCheckInEnabled?: Scalars['Boolean'];
  isCheckOutEnabled?: Scalars['Boolean'];
  isScheduleEnabled?: Scalars['Boolean'];
  isVacationEnabled?: Scalars['Boolean'];
  isWorkLogEnabled?: Scalars['Boolean'];
};

export type IUpdateMemberInput = {
  companyId?: InputMaybe<Scalars['String']>;
  exitDate?: InputMaybe<Scalars['String']>;
  isAdmin?: InputMaybe<Scalars['Boolean']>;
  joinDate?: InputMaybe<Scalars['String']>;
  leave?: InputMaybe<Scalars['Int']>;
  memo?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  roleCategoryId?: InputMaybe<Scalars['String']>;
};

export type IUpdateNoticeBoardInput = {
  contents?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type IUpdateOrganizationInput = {
  address?: InputMaybe<Scalars['String']>;
  color?: InputMaybe<Scalars['String']>;
  companyId?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  lat?: InputMaybe<Scalars['String']>;
  lng?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type IUpdateScheduleCategoryInput = {
  colorCode?: InputMaybe<Scalars['String']>;
  isNotHolidayWork?: InputMaybe<Scalars['Boolean']>;
  isOvertime?: InputMaybe<Scalars['Boolean']>;
  memo?: InputMaybe<Scalars['String']>;
  scheduleCategoryName?: InputMaybe<Scalars['String']>;
};

export type IUpdateScheduleInput = {
  finishWorkTime?: InputMaybe<Scalars['String']>;
  startWorkTime?: InputMaybe<Scalars['String']>;
};

export type IUpdateScheduleTemplatInput = {
  colorCode?: InputMaybe<Scalars['String']>;
  endTime?: InputMaybe<Scalars['String']>;
  memo?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Scalars['String']>;
  roleCategoryId?: InputMaybe<Scalars['String']>;
  scheduleCategoryId?: InputMaybe<Scalars['String']>;
  startTime?: InputMaybe<Scalars['String']>;
};

export type IUpdateVacationCategoryInput = {
  deductionDays?: InputMaybe<Scalars['Int']>;
  memo?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Scalars['String']>;
  paidTime?: InputMaybe<Scalars['Int']>;
  roleCategoryId?: InputMaybe<Scalars['String']>;
  timeOption?: InputMaybe<Scalars['String']>;
  vacationCategoryGroup?: InputMaybe<Scalars['String']>;
};

export type IUpdateVacationInput = {
  description?: InputMaybe<Scalars['String']>;
  memberId?: InputMaybe<Scalars['String']>;
  vacationCategoryId?: InputMaybe<Scalars['String']>;
  vacations?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type IUpdateVacationIssueInput = {
  description?: InputMaybe<Scalars['String']>;
  expirationDate?: InputMaybe<Scalars['DateTime']>;
  memberId?: InputMaybe<Scalars['String']>;
  startingPoint?: InputMaybe<Scalars['DateTime']>;
  vacationAll?: InputMaybe<Scalars['Int']>;
};

export type IUpdateWorkCheckInput = {
  breakEndTime?: InputMaybe<Scalars['DateTime']>;
  breakStartTime?: InputMaybe<Scalars['DateTime']>;
  memberId?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Scalars['String']>;
  quittingTime?: InputMaybe<Scalars['DateTime']>;
  roleCategoryId?: InputMaybe<Scalars['String']>;
  scheduleId?: InputMaybe<Scalars['String']>;
  workCheckMemo?: InputMaybe<Scalars['String']>;
  workDay?: InputMaybe<Scalars['DateTime']>;
  workingTime?: InputMaybe<Scalars['DateTime']>;
};

export type IVacation = {
  __typename?: 'Vacation';
  company?: Maybe<ICompany>;
  description: Scalars['String'];
  id: Scalars['String'];
  member?: Maybe<IMember>;
  vacationCategory?: Maybe<IVacationCategory>;
  vacationEnd: Scalars['DateTime'];
  vacationStart: Scalars['DateTime'];
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
  remaining: Scalars['Int'];
  startingPoint: Scalars['DateTime'];
  useVacation: Scalars['Int'];
  vacationAll: Scalars['Int'];
};

export type IWorkCheck = {
  __typename?: 'WorkCheck';
  breakEndTime?: Maybe<Scalars['DateTime']>;
  breakStartTime?: Maybe<Scalars['DateTime']>;
  company: ICompany;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  member: IMember;
  organization: IOrganization;
  quittingTime?: Maybe<Scalars['DateTime']>;
  roleCategory: IRoleCategory;
  schedule: ISchedule;
  updatedAt?: Maybe<Scalars['DateTime']>;
  workCheckMemo?: Maybe<Scalars['String']>;
  workDay: Scalars['DateTime'];
  workingTime?: Maybe<Scalars['DateTime']>;
};
