import { ButtonStyle } from "./Button.styled";

// eslint-disable-next-line react/prop-types
const Button = ({ children, handleClick, disabled, style, type }) => {
  return (
    <ButtonStyle
      type={type}
      onClick={handleClick}
      disabled={disabled}
      style={{ ...style }}
    >
      {children}
    </ButtonStyle>
  );
};

export default Button;
