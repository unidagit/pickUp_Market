import styled from "styled-components";
import { SelectTabProps } from "../../common/types";

export const Wrapper = styled.div`
  width: 550px;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  margin: 0 2rem;
`;

export const TabBox = styled.ul`
  display: flex;
  width: 100%;
  position: absolute;
  top: -70px;
  z-index: 10;
`;

export const SelectTab = styled.li<SelectTabProps>`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 15.9px;
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

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${(props) => props.theme.sub.lighter};
  border-radius: 10px 10px 10px 10px;
  border-top: none;
  padding: 35px;
  width: 100%;
  background-color: ${(props) => props.theme.white.primary};
`;

export const FormBox = styled.form`
  z-index: 0;
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 10px;
`;

export const ErrorBox = styled.div`
  margin-bottom: 26px;
`;

export const JoinText = styled.p`
  color: ${(props) => props.theme.sub.primary};
  margin-top: 20px;
`;
