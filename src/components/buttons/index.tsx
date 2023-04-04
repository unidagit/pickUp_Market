import React from "react";
import * as S from "./style";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children: React.ReactNode;
  fontSize: string;
  fontWeight: string;
  height: string;
  fontColor: string;
  backgroundColor: string;
  disabledBackColor?: string;
}

function Button({
  children,
  disabled,
  type,
  height,
  fontSize,
  fontWeight,
  fontColor,
  disabledBackColor,
  backgroundColor,
  ...props
}: ButtonProps) {
  return (
    <S.Button
      type={type}
      height={height}
      disabled={disabled}
      fontSize={fontSize}
      fontWeight={fontWeight}
      fontColor={fontColor}
      backgroundColor={backgroundColor}
      disabledBackColor={disabledBackColor}
      {...props}
    >
      {children}
    </S.Button>
  );
}

export default Button;
