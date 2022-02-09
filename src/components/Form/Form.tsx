// import { useState } from 'react';
import { FoodItemProps } from '../FoodItem/FoodItem';

const Form = ({ name, expiration, group, id }: FoodItemProps) => {
  console.log(id);
  return (
    <form>
      <input type="text" name="name" value={name} />
      <input type="text" name="group" value={group} />
      <input type="date" name="expiration" value={expiration} />
    </form>
  );
};
export default Form;
