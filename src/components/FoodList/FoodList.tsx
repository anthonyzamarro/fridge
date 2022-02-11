// import { useState } from 'react';
import { useEffect, useState } from 'react';
import FoodItem from '../FoodItem/FoodItem';
import Form from '../Form/Form';

export interface FoodListProps {
  id: number;
}
// https://simplernerd.com/typescript-dynamic-json/
interface FoodItemProps {
  [key: string]: any;
}

const FoodList = ({ id }: FoodListProps) => {
  const [foodListTitle, setFoodListTitle] = useState<string>('');
  const [foodListData, setFoodListData] = useState<object[]>([]);

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFoodListTitle(e.target.value);
  };

  const handleAddFoodListItem = (newFoodListData: FoodListProps) => {
    setFoodListData([
      ...foodListData,
      {
        ...newFoodListData,
      },
    ]);
  };

  const handleDeleteFoodItem = (foodId: number) => {
    const updatedList = foodListData.filter(
      (food: FoodItemProps) => food.id !== foodId
    );
    setFoodListData([...updatedList]);
  };

  useEffect(() => {
    // console.log(foodListData, id);
    // TODO: fix logic for adding foodListTitle to food list
    localStorage.setItem(
      id.toString(),
      !foodListTitle
        ? JSON.stringify(foodListData)
        : `${foodListTitle} ${JSON.stringify(foodListData)}`
    );
  }, [foodListData, id, foodListTitle]);

  return (
    <div key={id} className={`food-list ${id}`}>
      <input
        type="text"
        defaultValue={foodListTitle}
        onChange={handleChangeTitle}
        placeholder="food list title"
      />
      <Form handleForm={handleAddFoodListItem} />
      {foodListData.map((food: FoodItemProps) => {
        return (
          <li key={food.id}>
            <FoodItem
              id={food.id}
              name={food.name}
              expiration={food.expiration}
              group={food.group}
              price={food.price}
              deleteFoodFromList={handleDeleteFoodItem}
            />
          </li>
        );
      })}
    </div>
  );
};

export default FoodList;
