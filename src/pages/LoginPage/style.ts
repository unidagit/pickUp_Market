import styled from "styled-components";

export const LoginWrapper = styled.div`
  border: 1px solid ${(props) => props.theme.sub.lighter};
  border-radius: 0.5rem;
  padding: 35px;
  width: 480px;
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
