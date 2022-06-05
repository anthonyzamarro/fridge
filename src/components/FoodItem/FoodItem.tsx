import { useEffect, useState } from 'react';
// utils functions
import { dateFormat } from '../../utils/dateFormat/dateFormat';
// import expirationDate from '../../utils/expirationDate/expirationDate';
// import expirationTimer from '../../utils/expirationTimer/expirationTimer';

// interfaces
import { FoodGroupEnum, FoodItemHookProps } from './interfaces';

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
}: FoodItemHookProps) => {
  const [foodName, setFoodName] = useState<string>(name);
  const [foodGroup, setFoodGroup] = useState<string>(group);
  const [foodExpiration, setFoodExpiration] = useState<string>(expiration);
  const [expired, setExpired] = useState<boolean>(false);
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

  useEffect(() => {
    let today = new Date()
    let expiresObject = new Date(expiration)
    let expires = new Date(expiresObject.setDate(expiresObject.getDate() + 1))
    if (expires < today) {
      setExpired(true)
    } else {
      setExpired(false)
    }
  }, [expiration])


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
        <button onClick={() => updateFoodName(foodName, id, 'name')}>
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
        <button onClick={() => updateFoodGroup(foodGroup, id, 'group')}>
          Update food group
        </button>
      </label>
      <label htmlFor={'foodExpiration'}>
        <p>
          Expiration Date: {dateFormat(expiration)} {" "}
          {expired && <span style={{'color': 'red', 'background' : 'yellow', 'padding' : '3px'}}>FOOD IS EXPIRED</span>}
        </p>
        <input
          type="date"
          name={foodExpiration}
          id={foodExpiration}
          defaultValue={foodExpiration}
          onChange={(e) => handleChangeUpdateFoodValues(e, 'expiration')}
          />
        <button
          onClick={() => updateFoodExpiration(foodExpiration, id, 'expiration')}
        >
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
        <button onClick={() => updateFoodPrice(foodPrice, id, 'price')}>
          Update food price
        </button>
      </label>
      <br />
      <button onClick={handleClickDeleteFoodItem}>Delete food item</button>
    </div>
  );
};

export default FoodItem;
