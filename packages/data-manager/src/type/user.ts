export interface ApiUserType extends Record<string, unknown>
{
  gender: 0 | 1 | 2;
  firstname: string;
  lastname: string;
  housewife: boolean;
  age: number;
  country: string;
  email: string;
  favoriteGroups: string;
  favoriteMeal: string;
  favoriteRecipes: string;
  favoriteSensitiveness: string;
  favoriteTaste: string;
  favoriteTemper: string;
  illnesses: string;
  hasIllness: boolean;
  height: number;
  imagename: string;
  marriage: boolean;
  password: string;
  phone: string;
  token: string;
  userUID: string;
  weight: string;
}

export interface PlanType extends Record<string, unknown>
{
  id: string;
  planID: number;
  planUID: string;
  language: 11 | 12 | 13;
  title: string;
  percent: number;
  price: number;
  planType: number;
}
