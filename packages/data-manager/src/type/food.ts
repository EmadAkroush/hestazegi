export interface FoodCategoryType extends Record<string, unknown>
{
  cleanTitle: string;
  foodcategoryUID: string;
  id: string;
  image: string;
  language: 11 | 12 | 13;
  title: string;
  recipeCount: string;
}

export interface foodMaterialGroupType extends Record<string, unknown>
{
  chosenOne: boolean;
  cleanTitle: string;
  entity: number;
  groupUID: string;
  id: string;
  language: 11 | 12 | 13;
  thumbnail: string;
  title: string;
}

export interface foodMaterialType extends Record<string, unknown>
{
  chosenOne: boolean;
  cleanTitle: string;
  entity: number;
  id: string;
  parentUID: string;
  rawMaterialUID: string;
  language: 11 | 12 | 13;
  thumbnail: string;
  title: string;
}

export const foodTasteList = {
  Sweet: '1', /* شیرین */
  LessSweet: '2', /* نسبتا شیرین */
  SweetAndSour: '3', /* ملس */
  LessSour: '4', /* نسبتا ترش */
  Spicy: '5', /* تند */
  LessSpicy: '6', /* نسبتا تند */
  LotSpicy: '7' /* ادویه ای */
};

export interface RecipeType extends Record<string, unknown>
{
  id: string;
  recipeID: number;
  recipeUID: string;
  language: number;
  foodCategoryUID: string;
  title: string;
  cleanTitle?: string;
  thumbnail: string;
  tags?: string[];
  preparationTime: number;
  watingTime: number;
  bakingTime: number;
  cookeMethod: null;
  meals?: string[];
  materials?: string[];
}
