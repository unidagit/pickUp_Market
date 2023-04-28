import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 0 1rem;
`;

export const Container = styled.div`
  max-width: 1260px;
  margin: 0 auto;
`;

export const MainTitle = styled.h1`
  font-size: 36px;
  font-weight: 700;
  margin: 44px 0px 52px;
  text-align: center;
  color: ${(props) => props.theme.sub.darker};
`;
