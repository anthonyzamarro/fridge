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
}: InputProps) => {
  const [value, setValue] = useState('');
  console.log(type, name, placeholder, defaultValue);
  return (
    <>
      <StyledInput
        type={type}
        name={name}
        placeholder={placeholder}
        defaultValue={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
      />
    </>
  );
};
