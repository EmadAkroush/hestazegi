// import jwt from 'jwt-decode';
import { SignalInterface } from '@alwatr/signal';
import { routeChangeSignal, router } from '@alwatr/router';
import { l10n } from '@alwatr/i18n';
import { queryDomain } from '@godgiven/manifest';
import { queryIndexData } from '../provider/query-index-data.js';
import { apiStatusNameList } from '../type/api.js';
import type { ApiResponseType } from '../type/api.js';
import type { ApiUserType } from '../type/user.js';
import type { Route } from '@alwatr/router';

export type userPage = 'login' | 'register' | 'main';

export interface UserRequestCodeType extends Record<string, unknown>
{
  email: 'string';
  has_Account: boolean;
}

export interface UserType extends Record<string, unknown>
{
  firstName: string;
  lastName: string;
  gender: 0 | 1 | 2;
  housewife: boolean;
}

export interface RegisterUserType extends UserType
{
  password?: string;
  referralCode: string;
}

declare global
{
  /**
   * Global signals value type registry.
   */
  interface AlwatrSignals
  {
    readonly 'logout': null;
    readonly 'login': null;
    readonly 'register': null;
    readonly 'request-code': string;
    readonly 'receive-code': ApiResponseType<UserRequestCodeType>;
    readonly 'request-verify-code': { phone: string; code: number; };
    readonly 'request-verify-password': { user: string; pass: string; };
    readonly 'receive-verify-password': ApiUserType | string;
    readonly 'receive-verify-code': ApiUserType | string;
    readonly 'request-register': RegisterUserType;
    readonly 'receive-register': ApiResponseType<unknown>;
    readonly 'check-user-data': ApiUserType | null;
  }
}

export const user = {
  content: null as ApiUserType | null | undefined,
  logout: new SignalInterface('logout'),
  login: new SignalInterface('login'),
  register: new SignalInterface('register'),
  requestCode: new SignalInterface('request-code'),
  receiveCode: new SignalInterface('receive-code'),
  requestVerifyCode: new SignalInterface('request-verify-code'),
  receiveVerifyCode: new SignalInterface('receive-verify-code'),
  requestVerifyPassword: new SignalInterface('request-verify-password'),
  receiveVerifyPassword: new SignalInterface('receive-verify-password'),
  requestRegister: new SignalInterface('request-register'),
  receiveRegister: new SignalInterface('receive-register'),
  checkData: new SignalInterface('check-user-data'),
  checkTheUserLogin,
  checkPermission
};

user.logout.addListener(() =>
{
  localStorage.removeItem('token');
  queryIndexData.dispatch(null);
});

user.requestVerifyPassword.addListener((data) =>
{
  void fetch(`${queryDomain.value as string}/account/password`, {
    method: 'Post',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      username: data.user,
      password: data.pass,
      referrerUrl: 'string'
    })
  })
    .then(response => response.json()) // convert to json
    .then((data: ApiResponseType<ApiUserType>) =>
    {
      if (
        apiStatusNameList[data.status] === 'UserNotFound' ||
        apiStatusNameList[data.status] === 'NotValidPassOrMail'
      )
      {
        data.message = 'Not_Valid_Pass_Or_Mail';
        user.receiveVerifyCode.dispatch(data.message);
        return;
      }

      if (apiStatusNameList[data.status] === 'Successful')
      {
        user.receiveVerifyPassword.dispatch(data.content);
        localStorage.setItem('token', data.content.token);
        user.checkData.dispatch(data.content);
      }
      else
      {
        data.message = 'Error_Please_Contact_With_Admin';
        user.receiveVerifyPassword.dispatch(data.message);
      }
    });
});

user.login.addListener(() =>
{
  const currentPath = router.makeUrl({
    sectionList: router.currentRoute.sectionList
  });

  const linkObject: Partial<Route> = {
    sectionList: [l10n.locale?.language ?? 'fa', 'login']
  };

  if (router.currentRoute.sectionList.length > 1)
  {
    linkObject.queryParamList = {
      backUrl: currentPath
    };
  }

  const link = router.makeUrl(linkObject);
  const { pathname, search, hash } = new URL(`${window.location.origin}${link}`);
  void routeChangeSignal.request({ pathname, search, hash });
});

user.register.addListener(() =>
{
  const link = router.makeUrl({ sectionList: [l10n.locale?.language ?? 'fa', 'register'] });
  const { pathname, search, hash } = new URL(`${window.location.origin}${link}`);
  void routeChangeSignal.request({ pathname, search, hash });
});

user.requestCode.addListener((phone) =>
{
  void fetch(`${queryDomain.value as string}/account/authenticate`, {
    method: 'Post',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      username: phone,
      password: 'string',
      code: 0,
      referrerUrl: 'string'
    })
  })
    .then(response => response.json()) // convert to json
    .then((data: ApiResponseType<UserRequestCodeType>) =>
    {
      user.receiveCode.dispatch(data);
    });
});

user.requestVerifyCode.addListener((data) =>
{
  void fetch(`${queryDomain.value as string}/account/verifyCode`, {
    method: 'Post',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      username: data.phone,
      password: 'string',
      code: data.code,
      referrerUrl: 'string'
    })
  })
    .then(response => response.json()) // convert to json
    .then((data: ApiResponseType<ApiUserType>) =>
    {
      if (
        apiStatusNameList[data.status] === 'NotValidCode' &&
        apiStatusNameList[data.status] === 'NotValidPassOrMail'
      )
      {
        data.message = 'Your_Input_Code_Is_Wrong';
        user.receiveVerifyCode.dispatch(data.message);
        return;
      }

      if (apiStatusNameList[data.status] === 'Successful')
      {
        user.receiveVerifyCode.dispatch(data.content);
        localStorage.setItem('token', data.content.token);
        user.checkData.dispatch(data.content);
      }
      else
      {
        data.message = 'Error_Please_Contact_With_Admin';
        user.receiveVerifyCode.dispatch(data.message);
      }
    });
});

user.checkData.addListener((data) =>
{
  if (data != null)
  {
    user.content = data;
    if (
      data.firstname === '' ||
      data.lastname === '' ||
      data.firstname == null ||
      data.lastname == null ||
      data == null)
    {
      user.register.dispatch(null);
    }
  }
});

user.requestRegister.addListener((input) =>
{
  const token = getAuthorization();
  void fetch(`${queryDomain.value as string}/account/register`, {
    method: 'Post',
    headers: {
      ...token.header,
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      firstname: input.firstName,
      lastname: input.lastName,
      gender: input.gender,
      housewife: input.housewife,
      password: input.password,
      referralCode: input.referralCode ?? ''
    })
  })
    .then(response => response.json()) // convert to json
    .then((data: ApiResponseType<ApiUserType>) =>
    {
      user.receiveRegister.dispatch(data);
      let link = router.makeUrl({ sectionList: [l10n.locale?.language ?? 'fa'] });
      if (input.hireChef === true)
      {
        link = router.makeUrl({ sectionList: [l10n.locale?.language ?? 'fa', 'chef-assistant'] });
      }
      const { pathname, search, hash } = new URL(`${window.location.origin}${link}`);
      void routeChangeSignal.request({ pathname, search, hash });
    });
});

interface reqType
{
  header?: { Authorization?: string; };
  userData?: { UserUID: string; };
}

/**
 *
 */
export function getAuthorization(): reqType
{
  const object: reqType = {};
  const token = localStorage.getItem('token');
  if (token == null) { return object; }
  if (token === '') { return object; }
  // const userData = jwt(user.token);
  object.header = { Authorization: `Bearer ${token}` };
  // object.userData = userData as { UserUID: string; };
  return object;
}

/**
 *
 */
function checkTheUserLogin(): boolean
{
  if (user.content == null) { return false; }
  if (user.content.firstname === '') { return false; }
  if (user.content.lastname === '') { return false; }
  if (user.content.firstname == null) { return false; }
  if (user.content.lastname == null) { return false; }
  return true;
}

/**
 *
 */
function checkPermission(action: string, entity: string): boolean
{
  console.log(action, entity);
  // const permission: Record<string, Record<string, unknown>> = {
  //   nutrient: {
  //     overdose: false
  //   }
  // };
  // if (permission[entity] == null) { return false; }
  // if (permission[entity][action] == null) { return false; }
  if (user.content == null) { return false; }
  if (user.content.subscription === 1) { return true; }
  if (user.content.subscription === 2) { return true; }
  return false;
}
