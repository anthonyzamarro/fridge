import { useEffect, useState } from 'react';
// utils functions
import { dateFormat } from '../../utils/dateFormat/dateFormat';
// interfaces
import { FormProps } from './interfaces';
// components
import { Input } from '../Elements/FormElements/Input/Input';

const Form = ({ handleForm, listId }: FormProps) => {
  const [foodName, setFoodName] = useState('');
  const [foodGroup, setFoodGroup] = useState('');
  const [foodExpiration, setFoodExpiration] = useState('');
  const [foodPrice, setFoodPrice] = useState(0);
  const [foodId, setFoodId] = useState(1);

  const handleChangeFoodName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFoodName(e.target.value);
  };

  const handleChangeFoodGroup = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFoodGroup(e.target.value);
  };

  const handleChangeFoodExpiration = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFoodExpiration(e.target.value);
  };

  const handleChangeFoodPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFoodPrice(parseInt(e.target.value));
  };

  useEffect(() => {
    if (localStorage.length) {
      const foodList = JSON.parse(
        localStorage.getItem(listId.toString()) as string
      );
      // on first render, get most recently added food item id and add one to it
      // this is to prevent duplicate keys in nested food lists
      if (foodList.length) {
        const ids = Object.keys(foodList).map((key) => foodList[key].id);
        const lastId = ids.sort()[ids.length - 1];
        setFoodId(parseInt(lastId) + 1);
      }
    }
  }, []);

  const submitFormData = () => {
    setFoodId(foodId + 1);
    handleForm({
      name: foodName,
      group: foodGroup,
      expiration: dateFormat(foodExpiration),
      price: foodPrice,
      id: foodId,
    });
  };

  return (
    <form>
      <label htmlFor="name">Food Name: </label>
      <Input
        type="text"
        name="name"
        placeholder="food name"
        defaultValue={foodName}
        handleChange={handleChangeFoodName}
      />
      <br />
      <br />
      <label htmlFor="group">Food Group: </label>
      <Input
        type="text"
        name="group"
        placeholder="food group"
        defaultValue={foodGroup}
        handleChange={handleChangeFoodGroup}
      />
      <br />
      <br />
      <label htmlFor="expiration">Expiration Date: </label>
      <Input
        type="date"
        name="expiration"
        placeholder="food expiration date"
        defaultValue={foodExpiration}
        handleChange={handleChangeFoodExpiration}
      />
      <br />
      <br />
      <label htmlFor="price">Price: </label>
      <Input
        type="number"
        name="price"
        placeholder="price"
        defaultValue={foodPrice.toString()}
        handleChange={handleChangeFoodPrice}
      />
      <br />
      <br />
      <input
        type="button"
        name="submit"
        onClick={submitFormData}
        defaultValue="Submit"
      />
    </form>
  );
};
export default Form;
