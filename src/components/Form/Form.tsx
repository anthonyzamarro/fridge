import { useState } from 'react';
// import { FoodItemProps } from '../FoodItem/FoodItem';

interface FormProps {
  handleForm: (val: object) => void;
}

const Form = ({ handleForm }: FormProps) => {
  const [data, setData] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData(e.target.value);
  };

  const submitFormData = () => {
    handleForm({ inputData: data });
  };
  return (
    <form>
      <input
        type="text"
        name="name"
        placeholder="food name"
        defaultValue={data}
        onChange={handleChange}
      />
      {/* <input
        type="text"
        name="group"
        placeholder="food group"
        defaultValue={''}
      />
      <input
        type="date"
        name="expiration"
        placeholder="food expiration date"
        defaultValue={''}
      /> */}
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
