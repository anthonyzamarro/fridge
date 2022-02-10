import { useState } from 'react';
// components
import FoodList from './components/FoodList/FoodList';
import Form from './components/Form/Form';

// props
// import { FoodItemProps } from './components/FoodItem/FoodItem';

import './styles.css';

interface FoodListArrayProps {
  id: number;
  title: string;
  list: object[];
}

export const App = () => {
  // each food item
  const [foodListData, setFoodListData] = useState<object[]>([]);
  // each food list
  // const [addFoodList, setAddFoodList] = useState<object[]>([]);
  const [foodListId, setFoodListId] = useState<number>(0);
  const [foodList, setFoodList] = useState<FoodListArrayProps[]>([]);
  const [foodListTitle, setFoodListTitle] = useState<string>('');

  const handleFormData = (newFoodListData: object) => {
    setFoodListData([
      ...foodListData,
      {
        ...newFoodListData,
      },
    ]);
  };

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

  // useEffect(() => {
  //   console.log(foodListData, foodListId, foodListTitle);
  // }, [foodListData, foodListId, foodListTitle]);

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
      <Form handleForm={handleFormData} />
      <div className="new-food-list">
        {foodList.length &&
          foodList.map((list) => {
            console.log(list);
            return (
              <FoodList
                key={list.id}
                foodListTitle={list.title}
                // setFoodListTitle={setFoodListTitle}
                listId={list.id}
                foods={foodListData}
              />
            );
          })}
        {/* <FoodList
          foodListTitle={foodListTitle}
          setFoodListTitle={setFoodListTitle}
          listId={foodListId}
          foods={foodListData}
        /> */}
      </div>
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
