import styled from "styled-components";

export const Wrapper = styled.div`
  width: 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 2rem;
`;

export const JoinWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${(props) => props.theme.sub.lighter};
  border-radius: 0.5rem;
  padding: 35px;
  width: 100%;
  margin-bottom: 50px;
`;

export const FormBox = styled.form``;

export const InputBox = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-bottom: 12px;
`;
