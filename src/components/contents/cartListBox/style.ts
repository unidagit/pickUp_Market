import styled from "styled-components";

export const ProductTableBox = styled.div`
  height: 65vh;
  /* border: 1px solid ${(props) => props.theme.sub.lighter}; */
  margin-top: 52px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.white.primary};
`;

export const ProductTable = styled.ul`
  display: grid;
  align-items: center;
  grid-template-columns:
    0.1fr 5.9fr 2.9fr
    2.4fr;
  padding: 18px;
  background-color: ${(props) => props.theme.sub.verylighter};

  border-radius: 8px;
  text-align: center;
`;

export const CheckInput = styled.input`
  width: 17.6px;
  height: 17.6px;
  border-radius: 50%;
  border: 2px solid ${(props) => props.theme.main.primary};
  position: relative;
  appearance: none;
  cursor: pointer;
  transition: background 0.2s;

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 11.2px;
    height: 11.2px;
    border-radius: 50%;
    background: transparent;
  }

  &:checked {
    &:before {
      background: ${(props) => props.theme.main.primary};
    }
  }
`;

export const CartCountText = styled.p`
  width: 100%;
  font-size: 17px;
  font-weight: 500;
  text-align: center;
  margin-top: 100px;
`;

export const TableText = styled.li`
  font-size: 18px;
`;

export const CartListContainer = styled.div`
  margin: 15px 0;
`;

export const CartFinalPriceContainer = styled.ul`
  height: 150px;
  margin: 80px 0px 40px;
  background: ${(props) => props.theme.sub.verylighter};
  border-radius: 10px;
  display: grid;
  grid-template-columns:
    1fr
    0.3fr 1fr 1fr 0.3fr;
  gap: 20px;
  padding: 46px;
  align-items: center;
  text-align: center;
`;

export const PriceBox = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PriceTitle = styled.p`
  font-size: 1rem;
  margin-bottom: 12px;
`;

export const ShippingBox = styled.li``;

export const PaymentBox = styled.li``;
