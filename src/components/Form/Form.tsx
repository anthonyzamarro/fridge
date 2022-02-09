import { useState } from 'react';
// utils functions
import { dateFormat } from '../../utils/dateFormat';

interface FormProps {
  handleForm: (val: object) => void;
}

const Form = ({ handleForm }: FormProps) => {
  const [foodName, setfoodName] = useState('');
  const [foodGroup, setfoodGroup] = useState('');
  const [foodExpiration, setfoodExpiration] = useState('');

  const handleFoodNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setfoodName(e.target.value);
  };

  const handleFoodGroupChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setfoodGroup(e.target.value);
  };

  const handleExpirationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setfoodExpiration(e.target.value);
  };

  const submitFormData = () => {
    handleForm({
      name: foodName,
      group: foodGroup,
      expiration: dateFormat(foodExpiration),
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
        defaultValue={''}
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
