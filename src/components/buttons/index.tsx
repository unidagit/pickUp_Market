import React from "react";
import * as S from "./style";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children: React.ReactNode;
  fontSize: string;
  fontWeight: string;
  width?: string;
  height: string;
  fontColor: string;
  backgroundColor: string;
  disabledBackColor?: string;
  border?: string;
}

function Button({
  children,
  disabled,
  type,
  width,
  height,
  fontSize,
  fontWeight,
  fontColor,
  disabledBackColor,
  backgroundColor,
  border,
  ...props
}: ButtonProps) {
  return (
    <S.Button
      type={type}
      width={width}
      height={height}
      disabled={disabled}
      fontSize={fontSize}
      fontWeight={fontWeight}
      fontColor={fontColor}
      backgroundColor={backgroundColor}
      disabledBackColor={disabledBackColor}
      border={border}
      {...props}
    >
      {children}
    </S.Button>
  );
}

export default Button;
