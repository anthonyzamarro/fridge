// import { useState } from 'react';
import { useState } from 'react';
import FoodItem from '../FoodItem/FoodItem';
import Form from '../Form/Form';

interface FoodListProps {
  listId: number;
  // foods: object[];
  foodListTitle: string;
}
// https://simplernerd.com/typescript-dynamic-json/
interface FoodItemProps {
  [key: string]: any;
}

const FoodList = ({ listId, foodListTitle }: FoodListProps) => {
  // const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setFoodListTitle(e.target.value);
  // };

  const [foodListData, setFoodListData] = useState<object[]>([]);

  const handleFormData = (newFoodListData: object) => {
    setFoodListData([
      ...foodListData,
      {
        ...newFoodListData,
      },
    ]);
  };

  return (
    <div key={listId} className="food-list">
      <input
        type="text"
        defaultValue={foodListTitle}
        // onChange={handleChangeTitle}
        placeholder="food list title"
      />
      <Form handleForm={handleFormData} />
      {foodListData.map((food: object) => {
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
