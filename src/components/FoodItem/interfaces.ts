export enum FoodGroupEnum {
  dairy = 'dairy',
  meat = 'meat' ,
  vegetable = 'vegetable' ,
  fruit = 'fruit' ,
  grain = 'grain' ,
  fat = 'fat',
}

export interface FoodItemProps {
  name: string;
  group: FoodGroupEnum;
  expiration: string;
  price: number;
  id: number;
}

export interface FoodItemHookProps extends FoodItemProps {
  deleteFoodFromList: (id: number) => void;
  updateFoodName: (name: string, id: number, type: string) => void;
  updateFoodGroup: (group: string, id: number, type: string) => void;
  updateFoodExpiration: (expiration: string, id: number, type: string) => void;
  updateFoodPrice: (price: number, id: number, type: string) => void;
}
