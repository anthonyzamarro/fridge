import { useState, useEffect } from 'react';
// components
import FoodList from './components/FoodList/FoodList';

import './styles.css';

interface FoodListProps {
  id: number;
  foods: object[];
}

interface FoodListArrayProps {
  list: FoodListProps;
}

export const App = () => {
  const [foodList, setFoodList] = useState<FoodListArrayProps[]>([]);

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
            list: {
              id: foodId,
              foods: localStorage[key],
            },
          },
        ]);
      });

      // update localstorage with new item
      localStorage.setItem(
        `${foodId}`,
        JSON.stringify({
          id: foodId,
          foods: foodList.filter(({ list }) => list.id === foodId),
        })
      );
    } else {
      setFoodList([
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
    }
  };

  const updateFoodList = () => {
    const foods = Object.keys(localStorage).map((key) => {
      return { list: { id: parseInt(key), foods: localStorage[key] } };
    });
    // Object.keys(localStorage).forEach((key) => {
    //   setFoodList([{ list: { id: parseInt(key), foods: localStorage[key] } }]);
    // });
    // console.log(foodList, foods);
    setFoodList([...foods]);
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
 * list {
 *  id: number,
 *  items: [
 *    { title: string,
 *      foods: [{name: string, group: string, expire: date, price: number}]
 *    }
 *  ]
 * }
 */
