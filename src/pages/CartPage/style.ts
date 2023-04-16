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
  width: 1.1rem;
  height: 1.1rem;
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
    width: 0.7rem;
    height: 0.7rem;
    border-radius: 50%;
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

export const Info = styled.li`
  font-size: 18px;
`;

export const Price = styled.li`
  font-size: 18px;
`;

export const Edit = styled.li`
  font-size: 18px;
`;

export const CartListContainer = styled.div`
  margin: 15px 0;
`;

export const CartFinalPriceContainer = styled.ul`
  height: 150px;
  margin-top: 80px;
  background: ${(props) => props.theme.sub.verylighter};
  border-radius: 10px;
`;

export const AllPriceBox = styled.li``;

export const ShippingBox = styled.li``;

export const PaymentBox = styled.li``;
