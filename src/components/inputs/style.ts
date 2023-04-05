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

export const ProductNameInput = styled.input`
  padding: 16px;
  outline: ${(props) => props.theme.sub.lighter};
  border: 1px solid ${(props) => props.theme.sub.lighter};
`;

export const PriceInput = styled.input`
  padding: 16px;
  outline: ${(props) => props.theme.sub.lighter};
  border: 1px solid ${(props) => props.theme.sub.lighter};
`;

export const UnitBox = styled.div`
  display: flex;
`;

export const Unit = styled.p`
  width: 54px;
  height: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.white.primary};
  font-size: 16px;
  font-weight: 400;
  background-color: ${(props) => props.theme.sub.lighter};
  border-radius: 0px 5px 5px 0px;
`;
