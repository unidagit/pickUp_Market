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

export const JoinInput = styled.input`
  width: 100%;
  font-size: 16px;
  padding: 16px;
  outline: none;
  border: 1px solid ${(props) => props.theme.sub.lighter};
  border-radius: 5px;

  &:focus {
    border: 1px solid ${(props) => props.theme.main.primary};
  }
`;

export const ProductInput = styled.input`
  width: ${(props) => props.width};
  padding: 16px;
  outline: ${(props) => props.theme.sub.lighter};
  border: 1px solid ${(props) => props.theme.sub.lighter};
  border-radius: 5px;
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

export const Textarea = styled.textarea`
  width: 100%;
  height: 60vh;
  padding: 10px;
  outline: ${(props) => props.theme.sub.lighter};
`;
