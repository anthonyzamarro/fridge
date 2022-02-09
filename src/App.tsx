import React, { useState } from 'react';
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
  const [newFoodListData, setNewFoodListData] = useState<object>({});
  const [foodList, setFoodList] = useState<boolean>(false);

  const handleFormData = (data: object) => {
    setNewFoodListData({
      ...data,
    });
  };

  const handleNewFoodList = () => {
    setFoodList(!foodList);
  };

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
      {foodList && (
        <div>
          <Form handleForm={handleFormData} />
          <FoodList
            listName={'first list'}
            listId={0}
            foods={newFoodListData}
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
