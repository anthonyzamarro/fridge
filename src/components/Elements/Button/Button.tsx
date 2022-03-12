// interface
import { ButtonProps } from './interface';
// styles
import { StyledButton } from './Button.styles';

const Button = ({ text, handler }: ButtonProps) => (
  <StyledButton onClick={handler}>{text}</StyledButton>
);

export default Button;
