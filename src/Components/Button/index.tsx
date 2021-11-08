import { ButtonStyled } from "./style";

const Button = ({ greenColor, children, ...rest }: any) => {
  return (
    <ButtonStyled color={greenColor} {...rest}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
