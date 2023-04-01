import styled from "styled-components";

export const LoginInput = styled.input`
  width: 100%;
  padding: 20px 0px;
  outline: none;
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.sub.lighter};

  &:focus {
    border-bottom: 1px solid ${(props) => props.theme.main.primary};
    outline: none;
  }
`;
