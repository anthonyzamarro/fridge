import { useState } from 'react';
// styles
import { StyledInput } from './Input.styles';
// interface
import { InputProps } from './interface';

export const Input = ({
  type,
  name,
  placeholder,
  handleChange,
}: InputProps) => {
  const [value, setValue] = useState('');
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
