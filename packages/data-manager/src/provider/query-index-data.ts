import { SignalInterface } from '@alwatr/signal';
import { queryDomain } from '@godgiven/manifest';
import { getAuthorization, user } from '../controller/user.js';
import type { ApiResponseType } from '../type/api.js';
import type { ApiUserType } from '../type/user.js';
import { apiStatusNameList } from '../type/api.js';
import type { FoodCategoryType } from '../type/food.js';
// import { getJson } from '@alwatr/fetch';

declare global
{
  /**
   * Global signals value type registry.
   */
  interface AlwatrSignals
  {
    readonly 'query-index-data': null;
    readonly 'index-data-changed': MainRequestType;
  }
}

export const queryIndexData = new SignalInterface('query-index-data');
export const getIndexData = new SignalInterface('index-data-changed');

queryIndexData.addListener(() =>
{
  void fetch(`${queryDomain.value as string}/v1/init`, {
    method: 'Get',
    headers: {
      ...getAuthorization().header,
      'content-type': 'application/json'
    }
    // body: JSON.stringify()
  })
    .then(response => response.json()) // convert to json
    .then((data: ApiResponseType<MainRequestType>) =>
    {
      getIndexData.dispatch(data.content);
      if (data.content != null)
      {
        user.content = data.content.account;
      }
      if (apiStatusNameList[data.status] === 'NotValidAutorizeCode')
      {
        user.checkData.dispatch(null);
      }
    });
});

export interface MainRequestType extends Record<string, unknown>
{
  account?: ApiUserType;
  sliders?: Array<{
    id: string;
    sliderUID: string;
    language: number;
    title: string;
    image: string;
    url: string;
    priority: number;
  }>;
  foodcategories?: FoodCategoryType[];
}
