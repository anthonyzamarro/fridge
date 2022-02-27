import { useState } from 'react';

export interface FoodItemProps {
  name: string;
  expiration: string;
  group: string;
  id: number;
  price?: number;
  deleteFoodFromList: (id: number) => void;
  updateFoodName: (name: string, id: number) => void;
  updateFoodGroup: (group: string, id: number) => void;
  updateFoodExpiration: (expiration: string, id: number) => void;
  updateFoodPrice: (price: number, id: number) => void;
}

const FoodItem = ({
  name,
  expiration,
  group,
  price,
  id,
  deleteFoodFromList,
  updateFoodName,
  updateFoodGroup,
  updateFoodExpiration,
  updateFoodPrice,
}: //
FoodItemProps) => {
  const [foodName, setFoodName] = useState<string>(name);
  const [foodGroup, setFoodGroup] = useState<string>(group);
  const [foodExpiration, setFoodExpiration] = useState<string>(expiration);
  const [foodPrice, setFoodPrice] = useState<number>(price as number);

  const handleClickDeleteFoodItem = () => {
    deleteFoodFromList(id);
  };

  const handleChangeSetFoodName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFoodName(e.target.value);
  };

  const handleClickUpdateFoodName = (name: string) => {
    updateFoodName(name, id);
  };

  const handleChangeSetFoodGroup = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFoodGroup(e.target.value);
  };

  const handleClickUpdateFoodGroup = (group: string) => {
    updateFoodGroup(group, id);
  };

  const handleChangeSetFoodExpiration = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFoodExpiration(e.target.value);
  };

  const handleClickUpdateFoodExpiration = (expiration: string) => {
    updateFoodExpiration(expiration, id);
  };

  const handleChangeSetFoodPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFoodPrice(parseInt(e.target.value));
  };

  const handleClickUpdateFoodPrice = (price: number) => {
    updateFoodPrice(price, id);
  };

  return (
    <div key={id}>
      <label htmlFor={'foodName'}>
        <p>Food Name: {name}</p>
        <input
          type="text"
          name={foodName}
          id={foodName}
          defaultValue={foodName}
          onChange={handleChangeSetFoodName}
        />
        <button onClick={() => handleClickUpdateFoodName(foodName)}>
          Update food name
        </button>
      </label>
      <label htmlFor={'foodGroup'}>
        <p>Food Group: {group}</p>
        <input
          type="text"
          name={foodGroup}
          id={foodGroup}
          defaultValue={foodGroup}
          onChange={handleChangeSetFoodGroup}
        />
        <button onClick={() => handleClickUpdateFoodGroup(foodGroup)}>
          Update food group
        </button>
      </label>
      <label htmlFor={'foodExpiration'}>
        <p>Expiration Date: {expiration}</p>
        <input
          type="date"
          name={foodExpiration}
          id={foodExpiration}
          defaultValue={foodExpiration}
          onChange={handleChangeSetFoodExpiration}
        />
        <button onClick={() => handleClickUpdateFoodExpiration(foodExpiration)}>
          Update food expiration date
        </button>
      </label>
      <label htmlFor={'foodPrice'}>
        <p>Price: {price}</p>
        <input
          type="number"
          name={foodPrice?.toString()}
          id={foodPrice?.toString()}
          defaultValue={foodPrice}
          onChange={handleChangeSetFoodPrice}
        />
        <button onClick={() => handleClickUpdateFoodPrice(foodPrice)}>
          Update food price
        </button>
      </label>
      <br />
      <button onClick={handleClickDeleteFoodItem}>Delete food item</button>
    </div>
  );
};

export default FoodItem;
