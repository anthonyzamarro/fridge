// styles
import { useState } from 'react';
import { StyledInput } from '../input.styles';
// interface
import { InputProps } from './interface';

export const Input = ({
  type,
  name,
  placeholder,
  defaultValue,
  handleChange,
}: InputProps) => {
  const [value, setValue] = useState('');
  console.log(type, name, placeholder, defaultValue);
  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    handleChange(e);
  };

  return (
    <>
      <StyledInput
        type={type}
        name={name}
        placeholder={placeholder}
        defaultValue={value}
        onChange={handleChangeValue}
      />
    </>
  );
};
