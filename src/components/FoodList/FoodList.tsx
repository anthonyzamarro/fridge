import { useState, useEffect } from 'react';
import FoodItem from '../FoodItem/FoodItem';
import Form from '../Form/Form';

export interface FoodListProps {
  id: number;
  deleteFoodList: (foodListId: number) => void;
}
// https://simplernerd.com/typescript-dynamic-json/
interface FoodItemProps {
  [key: string]: any;
}

const FoodList = ({ id, deleteFoodList }: FoodListProps) => {
  const [foodListTitle, setFoodListTitle] = useState<string>('');
  const [, setFoodListTitleUpdated] = useState<string>();
  const [foodListData, setFoodListData] = useState<object[]>([]);

  const handleChangeUpdateTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFoodListTitle(e.target.value);
  };

  const handleClickUpdateTitle = (newTitle: string) => {
    setFoodListTitleUpdated(newTitle);
  };

  const handleAddFoodListItem = (newFoodListData: FoodListProps) => {
    const parsedList = JSON.parse(JSON.stringify(foodListData));
    setFoodListData([...parsedList, newFoodListData]);
    console.log('original:', [...parsedList, newFoodListData]);
    localStorage.setItem(
      id.toString(),
      JSON.stringify([...parsedList, newFoodListData])
    );
  };

  const handleClickDeleteFoodListItem = (foodId: number) => {
    const updatedList = foodListData.filter(
      (food: FoodItemProps) => food.id !== foodId
    );
    setFoodListData([...updatedList]);
  };

  // const handleClickDeleteFoodList = (foodId: number) => {
  //   localStorage.removeItem(foodId.toString());
  // };

  useEffect(() => {
    if (localStorage.length) {
      setFoodListData(JSON.parse(localStorage[id]));
    }
  }, []);

  return (
    <div key={id} className={`food-list ${id}`}>
      <input
        type="button"
        value="Delete List"
        onClick={() => deleteFoodList(id)}
      />
      <form>
        <input
          type="text"
          name="foodListTitle"
          defaultValue={foodListTitle}
          onChange={handleChangeUpdateTitle}
          placeholder="food list title"
        />
        <input
          type="button"
          name="Update Title"
          value="Update Title"
          onClick={() => handleClickUpdateTitle(foodListTitle)}
        />
      </form>
      <Form handleForm={handleAddFoodListItem} />
      {foodListData &&
        foodListData.map((food: FoodItemProps) => {
          return (
            <li key={`${food.id}`}>
              <FoodItem
                id={food.id}
                name={food.name}
                expiration={food.expiration}
                group={food.group}
                price={food.price}
                deleteFoodFromList={handleClickDeleteFoodListItem}
              />
            </li>
          );
        })}
    </div>
  );
};

export default FoodList;
