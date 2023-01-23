import { SignalInterface } from '@alwatr/signal';
import { queryDomain } from '@godgiven/manifest';
import { l10n } from '@alwatr/i18n';
import { getAuthorization, user } from '../controller/user.js';
import type { ApiResponseType } from '../type/api.js';
import { joinParameterList } from '@alwatr/router/core.js';
import { apiStatusNameList, LanguageList } from '../type/api.js';
import { RecipeType } from '../type/food.js';
// import { getJson } from '@alwatr/fetch';

export { RecipeType } from '../type/food.js';

export interface QuerySortType extends Record<string, unknown>
{
  sort?: number;
}

export interface FilterType extends Record<string, unknown>
{
  rawMaterial?: string[];
  categoryRecipes?: string[];
}

export interface RecipeQuery extends Record<string, unknown>
{
  sort?: number;
  filter: FilterType;
}

declare global
{
  /**
   * Global signals value type registry.
   */
  interface AlwatrSignals
  {
    readonly 'query-recipe-list-data': RecipeQuery;
    readonly 'recipe-list-changed': RecipeListRequestType;
  }
}

export const queryRecipeListData = new SignalInterface('query-recipe-list-data');
export const recipeListChanged = new SignalInterface('recipe-list-changed');

queryRecipeListData.addListener((options) =>
{
  const langItem = LanguageList[l10n.locale?.language as 'fa' ?? 'fa'];
  const params: Record<string, string | number> = {
    lang: langItem
  };
  if (options.sort != null) { params.Sort = options.sort; }
  const qString = joinParameterList(params);
  const langString = (langItem != null ? `?${qString}` : '');
  void fetch(`${queryDomain.value as string}/recipe/list${langString}`, {
    method: 'Get',
    headers: {
      ...getAuthorization().header,
      'content-type': 'application/json'
    }
    // body: JSON.stringify()
  })
    .then(response => response.json()) // convert to json
    .then((data: ApiResponseType<RecipeListRequestType>) =>
    {
      recipeListChanged.dispatch(data.content);
      if (apiStatusNameList[data.status] === 'NotValidAutorizeCode')
      {
        user.checkData.dispatch(null);
      }
    });
});

export interface RecipeListRequestType extends Record<string, unknown>
{
  count: number;
  items?: RecipeType[];
}
