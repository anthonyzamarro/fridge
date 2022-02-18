import { useState, useEffect } from 'react';
// components
import FoodList from './components/FoodList/FoodList';

import './styles.css';

interface FoodListProps {
  id: number;
  foods: [];
}

interface FoodListArrayProps {
  // id: number;
  list: FoodListProps;
}

// const keys = Object.keys(localStorage).map((key) => key);
// const values = Object.keys(localStorage).map((key) => localStorage[key]);
// console.log(keys, values);

export const App = () => {
  // const [foodListId, setFoodListId] = useState<number>(0);
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
        // setFoodList([...foodList, { id: foodId, list: localStorage[key] }]);
        console.log(localStorage[key]);
        setFoodList([
          ...foodList,
          {
            list: {
              id: foodId,
              foods: localStorage[key],
            },
          },
        ]);
        localStorage.setItem(
          `${foodId}`,
          JSON.stringify({ list: { id: foodId, foods: localStorage[key] } })
        );
      });
      // setFoodListId(foodId);
    } else {
      setFoodList([
        ...foodList,
        {
          list: {
            id: 0,
            foods: [],
          },
        },
      ]);

      localStorage.setItem(
        `${0}`,
        JSON.stringify({ list: { id: 0, foods: [] } })
      );
      // setFoodList([
      //   ...foodList,
      //   {
      //     id: 0,
      //     list: [],
      //   },
      // ]);
      // setFoodListId(foodListId + 1);
    }
  };

  const updateFoodList = () => {
    // const foods = Object.keys(localStorage).map((key) => {
    //   return { list: { id: key, foods: localStorage[key] } };
    // });
    // console.log(foods);
    // setFoodList([...foods]);
    // console.log(localStorage);
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
          foodList.map(({ list }) => {
            return (
              <FoodList
                key={list.id}
                id={0}
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
 * list {
 *  id: number,
 *  items: [
 *    { title: string,
 *      foods: [{name: string, group: string, expire: date, price: number}]
 *    }
 *  ]
 * }
 */
