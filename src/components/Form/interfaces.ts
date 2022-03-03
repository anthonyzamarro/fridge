import { FoodItemProps } from '../FoodList/interfaces';
export interface FormProps {
  listId: number;
  handleForm: (val: FoodItemProps) => void;
}
