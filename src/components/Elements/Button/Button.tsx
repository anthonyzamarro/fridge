// interface
import { ButtonProps } from './interface';
// styles
import { StyledButton } from './Button.styles';
export const Button = ({ text, handler }: ButtonProps) => {
  return (
    <>
      <StyledButton onClick={handler}>{text}</StyledButton>
    </>
  );
};
