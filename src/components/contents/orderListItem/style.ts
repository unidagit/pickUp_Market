import styled from "styled-components";

export const ProductBox = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${(props) => props.theme.sub.lighter};
  grid-template-columns: 7fr 1.5fr 1.5fr;
  padding-bottom: 17px;
`;

export const Img = styled.img`
  width: 6.5rem;
  height: 6.5rem;
  border-radius: 10px;
  object-fit: cover;
  margin: 0rem 2.5rem;
`;

export const InfoBox = styled.ul`
  display: flex;
`;

export const StoreName = styled.li`
  font-size: 14px;
  margin-bottom: 10px;
  font-weight: 400;
  color: ${(props) => props.theme.sub.primary};
`;

export const ProductName = styled.li`
  font-size: 18px;
  margin-bottom: 10px;
  font-weight: 400;
`;

export const ProductStock = styled.li`
  color: ${(props) => props.theme.sub.primary};
`;

export const Shipping = styled.p`
  font-size: 1.125rem;
  color: ${(props) => props.theme.sub.primary};
  display: flex;
  justify-content: center;
`;

export const Price = styled.div`
  display: flex;
  justify-content: center;
`;
