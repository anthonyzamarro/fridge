import { ButtonProps } from './interface';
export const Button = ({ text, handler }: ButtonProps) => {
  return (
    <>
      <button onClick={handler}>{text}</button>
    </>
  );
};
