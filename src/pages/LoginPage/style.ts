import styled from "styled-components";

export const Wrapper = styled.div`
  width: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 2rem;
`;

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${(props) => props.theme.sub.lighter};
  border-radius: 0.5rem;
  padding: 35px;
  width: 100%;
`;

export const FormBox = styled.form``;

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
