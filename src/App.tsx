import { useState } from 'react';
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
      const foodId =
        parseInt(Object.keys(localStorage).sort()[localStorage.length - 1]) + 1;
      Object.keys(localStorage).forEach((key) => {
        console.log(localStorage[key]);
        setFoodList([...foodList, { id: foodId, list: localStorage[key] }]);
      });
      setFoodListId(foodId + 1);
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

  // useEffect(() => {
  //   if (localStorage.length) {
  // for (const data in localStorage) {
  //   if (parseInt(data)) {
  //         // console.log(localStorage[data], data);
  //         // setFoodList([
  //         //   // ...localStorage[data],
  //         //   // {
  //         //   //   id: 0,
  //         //   //   // list: localStorage[data],
  //         //   // },
  //         // ]);
  //         // setFoodListId(foodListId + 1);
  //       }
  //     }
  //   }
  // }, []);

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
            return <FoodList key={list.id} id={list.id} />;
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
