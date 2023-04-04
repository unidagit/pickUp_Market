import styled from "styled-components";

export const CountBox = styled.div`
  display: flex;
  align-items: center;
  margin: 30px 0px;
  width: 150px;
  height: 50px;
  border: 1px solid ${(props) => props.theme.sub.lighter};
`;

export const MinusButton = styled.button`
  width: 48px;
  height: 100%;
  font-size: 25px;
  color: ${(props) => props.theme.sub.lighter};
  border-right: 1px solid ${(props) => props.theme.sub.lighter};
  background: ${(props) => props.theme.white.primary};
`;

export const Num = styled.div`
  width: 54px;
  font-size: 18px;
  text-align: center;
`;

export const AddButton = styled.button`
  width: 48px;
  height: 100%;
  font-size: 25px;
  color: ${(props) => props.theme.sub.lighter};
  border-left: 1px solid ${(props) => props.theme.sub.lighter};
  background: ${(props) => props.theme.white.primary};
`;
