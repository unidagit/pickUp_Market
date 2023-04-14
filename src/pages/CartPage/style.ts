import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

export const MainTitle = styled.h1`
  font-size: 36px;
  font-weight: 700;
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

export const ProductTable = styled.ul`
  display: flex;
  align-items: center;
  padding: 18px;
  background-color: ${(props) => props.theme.sub.lighter};
  border-bottom: 1px solid ${(props) => props.theme.sub.lighter};
  border-radius: 8px;
  text-align: center;
`;

export const CartCountText = styled.p`
  width: 100%;
  font-size: 17px;
  font-weight: 500;
  text-align: center;
  margin-top: 100px;
`;

export const Info = styled.li`
  font-size: 18px;
  flex: 5;
`;

export const Price = styled.li`
  font-size: 18px;
  flex: 2.2;
`;

export const Edit = styled.li`
  font-size: 18px;
  flex: 2.2;
`;
