import { SignalInterface } from '@alwatr/signal';
import { queryDomain } from '@godgiven/manifest';
import type { ApiResponseType } from '../type/api.js';
export { apiStatusNameList } from '../type/api.js';

declare global
{
  /**
   * Global signals value type registry.
   */
  interface AlwatrSignals
  {
    readonly 'request-news-letter': NewsLetterDataType;
    readonly 'receive-news-letter': ApiResponseType<null>;
  }
}

export const requestNewsLetter = new SignalInterface('request-news-letter');
export const receiveNewsLetter = new SignalInterface('receive-news-letter');

requestNewsLetter.addListener((input) =>
{
  void fetch(`${queryDomain.value as string}/contactus/newsLetter`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(input)
  })
    .then(response => response.json()) // convert to json
    .then((data: ApiResponseType<null>) =>
    {
      receiveNewsLetter.dispatch(data);
    });
});

export interface NewsLetterDataType extends Record<string, unknown>
{
  email: string;
  recipes: boolean;
  recipeTips: boolean;
  recipeInfo: boolean;
}
