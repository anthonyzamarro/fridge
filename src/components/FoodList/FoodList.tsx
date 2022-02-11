// import { useState } from 'react';
import { useState } from 'react';
import FoodItem from '../FoodItem/FoodItem';
import Form from '../Form/Form';

interface FoodListProps {
  listId: number;
}
// https://simplernerd.com/typescript-dynamic-json/
interface FoodItemProps {
  [key: string]: any;
}

const FoodList = ({ listId }: FoodListProps) => {
  const [foodListTitle, setFoodListTitle] = useState<string>('');
  const [foodListData, setFoodListData] = useState<object[]>([]);

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFoodListTitle(e.target.value);
  };

  const handleAddFoodListItem = (newFoodListData: object) => {
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

  return (
    <div key={listId} className="food-list">
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
