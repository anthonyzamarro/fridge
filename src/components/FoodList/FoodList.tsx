import { useState } from 'react';
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

// const ls = JSON.parse(JSON.stringify(localStorage));
const ls = Object.keys(localStorage).map((key) => localStorage[key]);
console.log('ls:', ls);

const FoodList = ({ id, deleteFoodList }: FoodListProps) => {
  const [foodListTitle, setFoodListTitle] = useState<string>('');
  const [, setFoodListTitleUpdated] = useState<string>();
  const [foodListData, setFoodListData] = useState<object[]>(ls);
  // const [foodListData, setFoodListData] = useState<object[]>(
  //   JSON.parse(JSON.stringify(localStorage)) || [{}]
  // );
  // const [foodListData, setFoodListData] = useState<object[]>(
  //   JSON.parse(localStorage[0])
  // );

  const handleChangeUpdateTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFoodListTitle(e.target.value);
  };

  const handleClickUpdateTitle = (newTitle: string) => {
    setFoodListTitleUpdated(newTitle);
    // console.log(localStorage.getItem(id.toString()));
    // localStorage.setItem(
    //   id.toString(),
    //   JSON.stringify({
    //     ...foodListData,
    //     title: foodListTitleUpdated,
    //   })
    // );
  };

  const handleAddFoodListItem = (newFoodListData: FoodListProps) => {
    // const newFoodItem = [
    //   ...foodListData,
    //   // title: foodListTitleUpdated,
    //   newFoodListData,
    // ];
    // if (localStorage.length) {
    //   const storedFoodList = Object.keys(localStorage).map(
    //     (key) => localStorage[key]
    //     );
    //   console.log(storedFoodList);
    //   setFoodListData(foodListData.concat(newFoodListData));
    // }
    // Object.keys(foodListData).forEach(() => {
    //   setFoodListData([foodListData].concat(newFoodListData));
    // });
    // setFoodListData([foodListData].concat([newFoodListData]));
    // parsedList.push(newFoodListData);
    // setFoodListData([
    //   ...JSON.parse(foodListData[id].toString()),
    //   newFoodListData,
    // ]);
    // console.log(
    //   [...JSON.parse(foodListData[id].toString()), newFoodListData],
    //   id
    // );
    console.log('original:', foodListData);
    const parsedList = JSON.parse(JSON.stringify(foodListData));
    setFoodListData([...parsedList, newFoodListData]);
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
      {[foodListData].map((food: FoodItemProps) => {
        // console.log(foodListData);
        return (
          <li key={`${id}-${food.id}-${food.name}`} id={`${food.list?.id}`}>
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
