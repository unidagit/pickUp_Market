import styled from "styled-components";
import { ButtonProps } from ".";

export const Button = styled.button<ButtonProps>`
  width: 100%;
  height: ${(props) => props.height};
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.fontColor};
  font-size: ${(props) => props.fontSize};
  cursor: pointer;
  border-radius: 5px;

  &:disabled {
    background-color: ${(props) => props.disabledBackColor};
    cursor: default;
    opacity: 0.7;
  }
`;
