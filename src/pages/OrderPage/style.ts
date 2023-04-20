import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

export const MainTitle = styled.h1`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 52px;
  text-align: center;
  color: ${(props) => props.theme.sub.darker};
`;

export const ProductTableBox = styled.div`
  height: 65vh;
  /* border: 1px solid ${(props) => props.theme.sub.lighter}; */
  margin-top: 52px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.white.primary};
`;
