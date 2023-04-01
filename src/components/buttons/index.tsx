import React from "react";
import * as S from "./style";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children: React.ReactNode;
}

function Button({ children, disabled, type, ...props }: ButtonProps) {
  return (
    <S.Button type={type} disabled={disabled} {...props}>
      {children}
    </S.Button>
  );
}

export default Button;
