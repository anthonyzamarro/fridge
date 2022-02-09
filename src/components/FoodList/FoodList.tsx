import { useState } from 'react';
import FoodItem from '../FoodItem/FoodItem';

interface FoodListProps {
  listId: number;
  foods: object[];
}
// https://simplernerd.com/typescript-dynamic-json/
interface FoodItemProps {
  [key: string]: any;
}

const FoodList = ({ listId, foods }: FoodListProps) => {
  const [foodListTitle, setFoodListTitle] = useState<string>('Food List Title');

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFoodListTitle(e.target.value);
  };

  return (
    <div key={listId}>
      <h2>
        <input type="text" value={foodListTitle} onChange={handleChangeTitle} />
      </h2>
      {console.log(foods)}
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
