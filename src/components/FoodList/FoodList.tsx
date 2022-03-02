import { useState, useEffect } from 'react';
// components
import FoodItem from '../FoodItem/FoodItem';
import Form from '../Form/Form';

export interface FoodListProps {
  id: number;
  deleteFoodList: (foodListId: number) => void;
}
// https://simplernerd.com/typescript-dynamic-json/
export interface FoodItemProps {
  [key: string]: any;
}

const FoodList = ({ id, deleteFoodList }: FoodListProps) => {
  const [foodListTitle, setFoodListTitle] = useState<string>('');
  const [foodListData, setFoodListData] = useState<FoodItemProps[]>([]);

  const handleChangeUpdateTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFoodListTitle(e.target.value);
  };

  const handleClickUpdateTitle = (newTitle: string) => {
    const newListWithNewTitle = foodListData.map((food) => {
      if (food.title) {
        return Object.assign(food, { title: newTitle });
      }
      return food;
    });
    setFoodListData(newListWithNewTitle);
    if (localStorage.length) {
      localStorage.setItem(id.toString(), JSON.stringify(newListWithNewTitle));
    }
  };

  const handleAddFoodListItem = (newFoodListData: FoodListProps) => {
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
    localStorage.setItem(id.toString(), JSON.stringify([...updatedList]));
  };

  const handleChangeFoodItem = (
    field: string | number,
    foodId: number,
    type: string
  ) => {
    console.log(field, foodId);
    const updatedFoodList = foodListData.map((food) => {
      if (food.id === foodId) {
        return {
          ...food,
          [type]: field,
        };
      }
      return food;
    });
    setFoodListData([...updatedFoodList]);
    if (localStorage.length) {
      localStorage.setItem(id.toString(), JSON.stringify(updatedFoodList));
    }
  };

  useEffect(() => {
    if (localStorage.length) {
      /**
       * since we have nested localstate data, we need to initialize the food list's data
       * inside of useEffect and pass the food list id to get its specific list data
       */
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
      <h2>Add New Food Item</h2>
      <Form handleForm={handleAddFoodListItem} listId={id} />
      <h2>{foodListData[0] && foodListData[0].title}</h2>
      <ul>
        {foodListData.map((food: FoodItemProps, index: number) => {
          {
            // 0th index is always the title of the list. returning the list including the 0th index
            // will result in the title being deleted if the first list item is deleted
            if (index > 0) {
              return (
                <li key={`${id}-${food.id}`}>
                  <FoodItem
                    id={food.id}
                    name={food.name}
                    // name={values.name}
                    expiration={food.expiration}
                    group={food.group}
                    price={food.price}
                    deleteFoodFromList={handleClickDeleteFoodListItem}
                    updateFoodName={handleChangeFoodItem}
                    updateFoodGroup={handleChangeFoodItem}
                    updateFoodExpiration={handleChangeFoodItem}
                    updateFoodPrice={handleChangeFoodItem}
                  />
                </li>
              );
            }
          }
        })}
      </ul>
    </div>
  );
};

export default FoodList;
