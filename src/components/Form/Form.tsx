import { useState } from 'react';
// utils functions
import { dateFormat } from '../../utils/dateFormat';

interface FormProps {
  handleForm: (val: object) => void;
}

const Form = ({ handleForm }: FormProps) => {
  const [foodName, setFoodName] = useState('');
  const [foodGroup, setFoodGroup] = useState('');
  const [foodExpiration, setFoodExpiration] = useState('');
  const [foodPrice, setFoodPrice] = useState(0);

  const handleFoodNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFoodName(e.target.value);
  };

  const handleFoodGroupChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFoodGroup(e.target.value);
  };

  const handleExpirationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFoodExpiration(e.target.value);
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFoodPrice(parseInt(e.target.value));
  };

  const submitFormData = () => {
    handleForm({
      name: foodName,
      group: foodGroup,
      expiration: dateFormat(foodExpiration),
      price: foodPrice,
      id: 0,
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
        onChange={handleFoodNameChange}
      />
      <br />
      <br />
      <label htmlFor="group">Food Group: </label>
      <input
        type="text"
        name="group"
        placeholder="food group"
        defaultValue={foodGroup}
        onChange={handleFoodGroupChange}
      />
      <br />
      <br />
      <label htmlFor="expiration">Expiration Date: </label>
      <input
        type="date"
        name="expiration"
        placeholder="food expiration date"
        onChange={handleExpirationChange}
        defaultValue={foodExpiration}
      />
      <br />
      <br />
      <label htmlFor="price">Price: </label>
      <input
        type="number"
        name="price"
        placeholder="price"
        onChange={handlePriceChange}
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
