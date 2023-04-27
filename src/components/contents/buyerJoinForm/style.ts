import styled from 'styled-components';

export const JoinWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${(props) => props.theme.sub.lighter};
  border-radius: 0px 0px 0.5rem 0.5rem;
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

export const ErrorBox = styled.div`
  width: 100%;
  margin-bottom: 12px;
`;
