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
}: FoodItemProps) => {
  const [foodName, setFoodName] = useState<string>(name);
  const [foodGroup, setFoodGroup] = useState<string>(group);
  const [foodExpiration, setFoodExpiration] = useState<string>(expiration);
  const [foodPrice, setFoodPrice] = useState<number>(price as number);

  const handleClickDeleteFoodItem = () => {
    deleteFoodFromList(id);
  };

  const handleChangeUpdateFoodValues = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: string
  ) => {
    switch (type) {
      case 'name':
        setFoodName(e.target.value);
        break;
      case 'group':
        setFoodGroup(e.target.value);
        break;
      case 'expiration':
        setFoodExpiration(e.target.value);
        break;
      case 'price':
        setFoodPrice(parseInt(e.target.value));
        break;
      default:
        break;
    }
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
          onChange={(e) => handleChangeUpdateFoodValues(e, 'name')}
        />
        <button onClick={() => updateFoodName(foodName, id)}>
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
          onChange={(e) => handleChangeUpdateFoodValues(e, 'group')}
        />
        <button onClick={() => updateFoodGroup(foodGroup, id)}>
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
          onChange={(e) => handleChangeUpdateFoodValues(e, 'expiration')}
        />
        <button onClick={() => updateFoodExpiration(foodExpiration, id)}>
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
          onChange={(e) => handleChangeUpdateFoodValues(e, 'price')}
        />
        <button onClick={() => updateFoodPrice(foodPrice, id)}>
          Update food price
        </button>
      </label>
      <br />
      <button onClick={handleClickDeleteFoodItem}>Delete food item</button>
    </div>
  );
};

export default FoodItem;
