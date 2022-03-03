export interface FoodListProps {
  id: number;
  deleteFoodList: (foodListId: number) => void;
}

// https://simplernerd.com/typescript-dynamic-json/
export interface FoodItemProps {
  [key: string]: any;
}
