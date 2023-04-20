import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  height: 200px;
  padding: 18px;

  border-bottom: 1px solid ${(props) => props.theme.sub.lighter};
  background-color: ${(props) => props.theme.white.primary};
  border-radius: 8px;
`;

export const CartInfoContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 7fr 1.5fr 1.5fr;
  align-items: center;
`;

export const ProductBox = styled.div`
  display: flex;
`;

export const Img = styled.img`
  width: 10rem;
  height: 10rem;
  border-radius: 10px;
  object-fit: cover;
  margin: 0rem 2.5rem;
`;

export const InfoBox = styled.ul``;

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

export const Shipping = styled.li`
  font-size: 18px;
  margin-top: 40px;
  color: ${(props) => props.theme.sub.primary};
`;

export const SumPrice = styled.p`
  display: flex;
  justify-content: center;
`;

export const ProductTable = styled.ul`
  display: grid;
  align-items: center;
  grid-template-columns: 7fr 1.5fr 1.5fr;
  padding: 18px 0px;
  background-color: ${(props) => props.theme.sub.verylighter};
  border-radius: 8px;
  text-align: center;
`;

export const OrderText = styled.li`
  font-size: 18px;
`;

export const OrderCountText = styled.p`
  width: 100%;
  font-size: 17px;
  font-weight: 500;
  text-align: center;
  margin-top: 100px;
`;

export const TableText = styled.li`
  font-size: 18px;
`;

export const OrderListContainer = styled.div`
  margin: 16px 0px;
`;

export const TotalPrice = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
`;

export const PriceText = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin-right: 10px;
`;
