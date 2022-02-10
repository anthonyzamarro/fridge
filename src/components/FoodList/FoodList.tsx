// import { useState } from 'react';
import FoodItem from '../FoodItem/FoodItem';
// import FoodItemProps from '../FoodItem/FoodItem';

interface FoodListProps {
  listId: number;
  foods: object[];
  foodListTitle: string;
}
// https://simplernerd.com/typescript-dynamic-json/
interface FoodItemProps {
  [key: string]: any;
}

const FoodList = ({ listId, foods, foodListTitle }: FoodListProps) => {
  // const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setFoodListTitle(e.target.value);
  // };

  return (
    <div key={listId}>
      <h2>
        <input
          type="text"
          defaultValue={foodListTitle}
          // onChange={handleChangeTitle}
          placeholder="food list title"
        />
      </h2>
      {/* {console.log(foods)} */}
      {foods.map((food: object) => {
        let foodItem: FoodItemProps = {};
        foodItem = food;
        {
          return (
            <li key={foodItem.id++}>
              <FoodItem
                id={foodItem.id++}
                name={foodItem.name}
                expiration={foodItem.expiration}
                group={foodItem.group}
                price={foodItem.price}
              />
            </li>
          );
        }
      })}
    </div>
  );
};

export default FoodList;
