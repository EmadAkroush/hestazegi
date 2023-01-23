export const apiStatusNameList = {
  0: 'None',
  1: 'Successful',
  2: 'UnSuccessful',

  6: 'NotEmpty',
  7: 'NotValidAutorizeCode',
  8: 'NotValidRequest',
  9: 'AccessDeny',

  // user
  10: 'NotValidPassOrMail',
  11: 'NotValidCode',
  12: 'UserNotFound',
  13: 'UserExist',
  14: 'NotValidPhone',

  // product

  // coupen

  50: 'NotFound',
  51: 'NotExist',
  52: 'NotHasRole',
  400: 'BadRequest'
};

export type ApiStatusNumberType = keyof typeof apiStatusNameList;

export interface ApiResponseType<T> extends Record<string, unknown>
{
  status: ApiStatusNumberType;
  content: T;
  message: string | null;
}

export const LanguageList = {
  no: 0,
  fa: 11,
  en: 12,
  ar: 13
};
