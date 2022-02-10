import { useState } from 'react';
// components
import FoodList from './components/FoodList/FoodList';

import './styles.css';

interface FoodListArrayProps {
  id: number;
  title: string;
  list: object[];
}

export const App = () => {
  const [foodListId, setFoodListId] = useState<number>(0);
  const [foodList, setFoodList] = useState<FoodListArrayProps[]>([]);
  const [foodListTitle, setFoodListTitle] = useState<string>('');

  const handleClickAddFoodList = () => {
    setFoodList([
      ...foodList,
      {
        id: foodListId,
        title: foodListTitle,
        list: [],
      },
    ]);
    setFoodListId(foodListId + 1);
    setFoodListTitle(`${foodListId} list`);
  };

  return (
    <>
      <h1>Hello, React {process.env.NODE_ENV}</h1>
      <div>
        <input
          type="button"
          onClick={handleClickAddFoodList}
          value="Add Food List"
        />
      </div>

      <div className="food-list__container">
        {foodList.length > 0 &&
          foodList.map((list) => {
            console.log(list);
            return (
              <FoodList
                key={list.id}
                foodListTitle={list.title}
                listId={list.id}
              />
            );
          })}
      </div>
    </>
  );
};

/**
 * add new food lists X
 * see food list X
 * edit existing food lists
 * delete food lists
 *
 * see food items in a list
 * edit food item in a list
 * delete food item in a list
 */
