import { SignalInterface } from '@alwatr/signal';
import { queryDomain } from '@godgiven/manifest';
import { getAuthorization, user } from '../controller/user.js';
import type { ApiResponseType } from '../type/api.js';
import type { FoodCategoryType, foodMaterialGroupType, foodMaterialType } from '../type/food.js';

declare global
{
  /**
   * Global signals value type registry.
   */
  interface AlwatrSignals
  {
    readonly 'query-chef-data': null;
    readonly 'chef-data-changed': ChefDataType;
    readonly 'query-change-chef-data': chefDataRequest;
    readonly 'change-chef-data-receive': null | string;
  }
}

export interface chefDataRequest extends Record<string, unknown>
{
  favoriteMeal: string;
  favoriteTaste: string;
  favoriteGroups: string;
  favoriteSensitiveness: string;
  favoriteRawMaterial: string;
  favoriteNotRawMaterial: string;
}

export interface ChefDataType extends Record<string, unknown>
{
  foodCategories?: FoodCategoryType[];
  groups?: foodMaterialGroupType[];
  rawMaterial?: foodMaterialType[];
}

export const chef = {
  requestData: new SignalInterface('query-chef-data'),
  receiveData: new SignalInterface('chef-data-changed'),
  requestChange: new SignalInterface('query-change-chef-data'),
  receiveChange: new SignalInterface('change-chef-data-receive'),
  checkLocalStorageChefData
};

chef.requestData.addListener(() =>
{
  void fetch(`${queryDomain.value as string}/chefAssistant/getData`, {
    method: 'Get',
    headers: {
      ...getAuthorization().header,
      'content-type': 'application/json'
    }
    // body: JSON.stringify()
  })
    .then(response => response.json()) // convert to json
    .then((data: ApiResponseType<ChefDataType>) =>
    {
      if (data.status === 12) { user.login.dispatch(null); return; }
      if (data.status === 1)
      {
        chef.receiveData.dispatch(data.content);
      }
    });
});

chef.requestChange.addListener((option) =>
{
  void fetch(`${queryDomain.value as string}/chefAssistant/save`, {
    method: 'Post',
    headers: {
      ...getAuthorization().header,
      'content-type': 'application/json'
    },
    body: JSON.stringify(option)
  })
    .then(response =>
    {
      return response.json();
    }) // convert to json
    .then((data: ApiResponseType<ChefDataType>) =>
    {
      if (data.status === 400) { chef.receiveChange.dispatch('Error_Server_Connection'); return; }
      if (data.status === 12) { user.login.dispatch(null); return; }
      if (data.status === 1)
      {
        chef.receiveChange.dispatch(null);
      }
      else
      {
        chef.receiveChange.dispatch('Error');
      }
    });
});

export interface chefDataObjectType extends Record<string, unknown>
{
  step: number;
  data: {
    favoriteMeal: string[];
    favoriteTaste: string[];
    favoriteCategories: string[];
    favoriteSensitiveness: string[];
    rawMaterial: string[];
    notRawMaterial: string[];
  };
}

export const steps = {
  1: 'Add_Favorite_Mail',
  2: 'Add_Favorite_Taste',
  3: 'Add_Favorite_Food_Category',
  4: 'Add_Favorite_Food_Category',
  5: 'Add_Allergic_food'
};

/**
 *
 */
export function checkLocalStorageChefData(): chefDataObjectType
{
  const objString = localStorage.getItem('chefData');
  const validObject: chefDataObjectType = {
    step: 1,
    data: {
      favoriteMeal: [],
      favoriteTaste: [],
      favoriteCategories: [],
      rawMaterial: [],
      notRawMaterial: [],
      favoriteSensitiveness: []
    }
  };
  if (objString == null) { return validObject; }
  if (typeof objString !== 'string') { return validObject; }
  let objData: chefDataObjectType = {
    step: 1,
    data: {
      favoriteMeal: [],
      favoriteTaste: [],
      favoriteCategories: [],
      rawMaterial: [],
      notRawMaterial: [],
      favoriteSensitiveness: []
    }
  };
  try
  {
    objData = JSON.parse(objString);
    if (objData.data.favoriteMeal.length > 0)
    {
      validObject.step = 2;
      validObject.data.favoriteMeal = objData.data.favoriteMeal;
    }
    else
    {
      return validObject;
    }

    if (objData.data.favoriteTaste.length > 0)
    {
      validObject.step = 3;
      validObject.data.favoriteTaste = objData.data.favoriteTaste;
    }
    else
    {
      return validObject;
    }

    if (objData.data.favoriteCategories.length > 0)
    {
      validObject.step = 4;
      validObject.data.favoriteCategories = objData.data.favoriteCategories;
    }
    else
    {
      return validObject;
    }
    if (objData.step >= 4)
    {
      validObject.step = objData.step;
    }
  }
  catch
  {
    return validObject;
  }
  return validObject;
}
