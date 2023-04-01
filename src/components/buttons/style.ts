import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  padding: 19px 0px;
  background-color: ${(props) => props.theme.main.primary};
  color: ${(props) => props.theme.white.primary};
  font-size: 18px;
  cursor: pointer;
  border-radius: 0.5rem;

  &:disabled {
    background-color: ${(props) => props.theme.main.primary};
    cursor: default;
    opacity: 0.7;
  }
`;
