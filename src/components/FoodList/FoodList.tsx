// import { useState } from 'react';
import { useEffect, useState } from 'react';
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

const ls = Object.keys(localStorage).map((key) => localStorage[key]);
console.log(ls);

const FoodList = ({ id, deleteFoodList }: FoodListProps) => {
  const [foodListTitle, setFoodListTitle] = useState<string>('');
  const [foodListTitleUpdated, setFoodListTitleUpdated] = useState<string>();
  const [foodListData, setFoodListData] = useState<object[]>(ls);

  const handleChangeUpdateTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFoodListTitle(e.target.value);
  };

  const handleClickUpdateTitle = (newTitle: string) => {
    setFoodListTitleUpdated(newTitle);
    // console.log(localStorage.getItem(id.toString()));
  };

  const handleAddFoodListItem = (newFoodListData: FoodListProps) => {
    console.log(foodListData, newFoodListData);
    setFoodListData([
      ...foodListData,
      {
        ...newFoodListData,
      },
    ]);
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
    // console.log(foodListData, id);
    // localStorage.setItem(
    //   id.toString(),
    //   JSON.stringify({
    //     title: foodListTitleUpdated,
    //     foodListData,
    //   })
    // );
    // localStorage.setItem(id.toString(), JSON.stringify(foodListData));
  }, [foodListData, foodListTitleUpdated, id]);

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
      {foodListData.map((food: FoodItemProps) => {
        return (
          <li key={food.id} id={`${food.id}`}>
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
