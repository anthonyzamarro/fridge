import { useState, useEffect } from 'react';
// components
import FoodList from './components/FoodList/FoodList';

import './styles.css';

interface FoodListProps {
  id: number;
  foods: object[];
}

// interface FoodListArrayProps {
//   list: FoodListProps;
// }

export const App = () => {
  const [foodList, setFoodList] = useState<FoodListProps[]>([]);

  const handleClickAddFoodList = () => {
    if (localStorage.length) {
      // get largest key value from localstorage and add one for new key
      const foodId =
        parseInt(Object.keys(localStorage).sort()[localStorage.length - 1]) + 1;
      Object.keys(localStorage).forEach((key) => {
        /*
          spread existing keys into food list state and add new item to state
        */
        setFoodList([
          ...foodList,
          {
            id: foodId,
            foods: localStorage[key],
          },
        ]);
      });
      console.log(
        foodList,
        foodList.filter(({ id }) => id === foodId)
      );

      // update localstorage with new item
      localStorage.setItem(
        foodId.toString(),
        JSON.stringify({
          foods: foodList.filter(({ id }) => id === foodId),
        })
      );
    } else {
      setFoodList([
        {
          id: 0,
          foods: [],
        },
      ]);

      localStorage.setItem(`${0}`, JSON.stringify({ foods: [] }));
    }
  };

  const updateFoodList = () => {
    const foods = Object.keys(localStorage).map((key) => {
      return { id: parseInt(key), foods: localStorage[key] };
    });
    setFoodList(foods);
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
          foodList.map(({ id }) => {
            return (
              <FoodList
                key={id}
                id={id}
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
