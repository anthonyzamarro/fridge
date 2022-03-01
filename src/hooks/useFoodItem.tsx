import { useState } from 'react';

import { FoodItemProps } from '../components/FoodList/FoodList';

export const useFoodItem = (
  initialValues: FoodItemProps[],
  type = '',
  id = 0
) => {
  const [foodListData, setFoodListData] = useState(initialValues);
  console.log(initialValues);
  const updatedFoodName = foodListData.map((food) => {
    if (food.id === id) {
      return {
        ...food,
        name: type,
      };
    }
    return food;
  });
  setFoodListData([...updatedFoodName]);
  if (localStorage.length) {
    localStorage.setItem(id.toString(), JSON.stringify(updatedFoodName));
  }
  return [foodListData, () => setFoodListData([...foodListData])];
};
