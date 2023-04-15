import styled from "styled-components";

export const Wrapper = styled.div`
  height: 200px;
  padding: 18px;

  border: 1px solid ${(props) => props.theme.sub.lighter};
  background-color: ${(props) => props.theme.white.primary};
  border-radius: 8px;
`;

export const CartInfoContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 0.1fr 5.9fr 2fr 2fr;
  align-items: center;
`;

export const ProductBox = styled.div`
  display: flex;
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
  /* font-size: 18px; */
  display: flex;
  justify-content: center;
  /* text-align: center; */
`;

export const Edit = styled.p`
  font-size: 18px;
  text-align: center;
`;

// export const CartInfoBox = styled.div`
//   width: 100%;
//   display: flex;
//   align-items: center;
//   flex: 2;
// `;
