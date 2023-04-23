import styled from "styled-components";
import { SelectTabProps } from "../../common/types";

export const Wrapper = styled.div`
  width: 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 3.125rem;
  position: relative;
`;

export const TabBox = styled.ul`
  width: 100%;
  display: flex;
  position: absolute;
  top: -60px;
  z-index: 10;
`;

export const SelectTab = styled.li<SelectTabProps>`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 1.125rem;
  border: 1px solid ${(props) => props.theme.sub.lighter};
  border-radius: 10px 10px 0px 0px;
  background-color: ${(props) =>
    props.loginType === "BUYER" ? "#fff" : "#f2f2f2"};
  z-index: ${(props) => (props.loginType === "BUYER" ? "10" : "30")};

  &:nth-child(2) {
    background-color: ${(props) =>
      props.loginType === "SELLER" ? "#fff" : "#f2f2f2"};
    z-index: ${(props) => (props.loginType === "SELLER" ? "10" : "30")};
  }
`;

export const JoinWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${(props) => props.theme.sub.lighter};
  border-radius: 0.5rem;
  padding: 35px;
  width: 100%;
`;

export const FormBox = styled.form``;

export const InputBtnBox = styled.div`
  display: grid;
  grid-template-columns: 7fr 3fr;
  column-gap: 0.625rem;
  width: 100%;
  margin: 8px 0px 12px;
`;

export const InputBox = styled.div`
  width: 100%;
  margin: 8px 0px 12px;
`;
