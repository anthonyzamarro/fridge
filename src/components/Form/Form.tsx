import { useState } from 'react';
// utils functions
import { dateFormat } from '../../utils/dateFormat';
// props
import { FoodListProps } from '../FoodList/FoodList';

interface FormProps {
  listId: number;
  handleForm: (val: FoodListProps) => void;
}

const Form = ({ handleForm, listId }: FormProps) => {
  const [foodName, setFoodName] = useState('');
  const [foodGroup, setFoodGroup] = useState('');
  const [foodExpiration, setFoodExpiration] = useState('');
  const [foodPrice, setFoodPrice] = useState(0);
  const [foodId, setFoodId] = useState(0);

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

  const updateFoodId = () => {
    if (localStorage.length) {
      const foodList = JSON.parse(
        localStorage.getItem(listId.toString()) as string
      );
      if (foodList.length) {
        const ids = Object.keys(foodList).map((key) => foodList[key].id);
        const lastId = ids.sort()[ids.length - 1];
        console.log('lastId:', lastId);
        console.log('ids:', ids);
        if (parseInt(lastId) > 1) {
          setFoodId(parseInt(lastId) + foodId);
        } else {
          setFoodId(foodId + 1);
        }
      } else {
        setFoodId(foodId + 1);
      }
      console.log('foodId:', foodId);
    }
  };

  const submitFormData = () => {
    updateFoodId();
    // setFoodId(foodId + 1);
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
      <input
        type="text"
        name="name"
        placeholder="food name"
        defaultValue={foodName}
        onChange={handleChangeFoodName}
      />
      <br />
      <br />
      <label htmlFor="group">Food Group: </label>
      <input
        type="text"
        name="group"
        placeholder="food group"
        defaultValue={foodGroup}
        onChange={handleChangeFoodGroup}
      />
      <br />
      <br />
      <label htmlFor="expiration">Expiration Date: </label>
      <input
        type="date"
        name="expiration"
        placeholder="food expiration date"
        onChange={handleChangeFoodExpiration}
        defaultValue={foodExpiration}
      />
      <br />
      <br />
      <label htmlFor="price">Price: </label>
      <input
        type="number"
        name="price"
        placeholder="price"
        onChange={handleChangeFoodPrice}
        defaultValue={foodPrice.toString()}
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
