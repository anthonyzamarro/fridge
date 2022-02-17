import { useState, useEffect } from 'react';
// components
import FoodList from './components/FoodList/FoodList';

import './styles.css';

interface FoodListArrayProps {
  id: number;
  list: object[];
}

export const App = () => {
  const [foodListId, setFoodListId] = useState<number>(0);
  const [foodList, setFoodList] = useState<FoodListArrayProps[]>([]);

  const handleClickAddFoodList = () => {
    if (localStorage.length) {
      // get largest key value from localstorage and add one for new key
      const foodId =
        parseInt(Object.keys(localStorage).sort()[localStorage.length - 1]) + 1;
      Object.keys(localStorage).forEach((key) => {
        /*
          spread existing keys into food list and add new items
        */
        setFoodList([...foodList, { id: foodId, list: localStorage[key] }]);
      });
      setFoodListId(foodId);
    } else {
      setFoodList([
        ...foodList,
        {
          id: foodListId,
          list: [],
        },
      ]);
      setFoodListId(foodListId + 1);
    }
  };

  const updateFoodList = () => {
    const foods = Object.keys(localStorage).map((key) => {
      return { id: parseInt(key), list: localStorage[key] };
    });
    setFoodList([...foods]);
  };

  const handleClickDeleteFoodList = (foodId: number) => {
    localStorage.removeItem(foodId.toString());
    updateFoodList();
  };

  useEffect(() => {
    if (localStorage.length) {
      updateFoodList();
    }
  }, []);

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
            return (
              <FoodList
                key={list.id}
                id={list.id}
                deleteFoodList={handleClickDeleteFoodList}
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
