import styled from "styled-components";
import { ButtonProps } from ".";

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.fontColor};
  font-size: ${(props) => props.fontSize};
  cursor: pointer;
  border-radius: 5px;
  border: ${(props) => props.border};

  &:disabled {
    background-color: ${(props) => props.disabledBackColor};
    cursor: default;
    opacity: 0.7;
  }

  &:hover {
    opacity: 0.8;
  }
`;
