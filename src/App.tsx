import { useEffect, useState } from 'react';
// components
import FoodList from './components/FoodList/FoodList';
import Form from './components/Form/Form';

// props
// import { FoodItemProps } from './components/FoodItem/FoodItem';

import './styles.css';

// const defaultData = [
//   {
//     name: 'pop corn',
//     expiration: new Date(),
//     group: 'grain',
//     id: 0,
//     price: 5,
//   },
//   {
//     name: 'carrots',
//     expiration: new Date(),
//     group: 'vegetable',
//     id: 1,
//     price: 1,
//   },
//   {
//     name: 'blueberries',
//     expiration: new Date(),
//     group: 'fruit',
//     id: 2,
//     price: 2,
//   },
// ];

// const defaultFoodData = {
//   name: '',
//   group: '',
//   expiration: new Date(),
//   id: 0,
// };

export const App = () => {
  // each food item
  const [foodListData, setfoodListData] = useState<object[]>([]);
  // each food list
  const [addFoodList, setaddFoodList] = useState<boolean>(false);
  const [foodListId, setFoodListId] = useState<number>(0);
  const [foodList, setFoodList] = useState<object>({});
  const [foodListTitle, setFoodListTitle] = useState<string>('Food List Title');

  const handleFormData = (newFoodListData: object) => {
    setfoodListData([
      ...foodListData,
      {
        ...newFoodListData,
      },
    ]);
    setFoodList({
      foodListId,
      foodListData,
    });
  };

  const handleNewFoodList = () => {
    setaddFoodList(!addFoodList);
    setFoodListId(foodListId + 1);
  };

  useEffect(() => {
    console.log(foodListData, foodList, foodListId);
  }, [foodListData, foodList, foodListId]);

  return (
    <>
      <h1>Hello, React {process.env.NODE_ENV}</h1>
      <div>
        <input
          type="button"
          onClick={handleNewFoodList}
          value="Add Food List"
        />
      </div>
      {addFoodList && (
        <div className="new-food-list">
          <Form handleForm={handleFormData} />
          <FoodList
            foodListTitle={foodListTitle}
            setFoodListTitle={setFoodListTitle}
            listId={foodListId}
            foods={foodListData}
          />
        </div>
      )}
    </>
  );
};

/**
 * add new food lists
 * see food list
 * edit existing food lists
 * delete food lists
 *
 * see food items in a list
 * edit food item in a list
 * delete food item in a list
 */
