import styled from 'styled-components';
import { SlClose } from 'react-icons/sl';

export const Wrapper = styled.div`
  position: relative;
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
  grid-template-columns: 0.1fr 5.8fr 2.9fr 2.3fr;
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

export const SumPrice = styled.div`
  /* font-size: 18px; */
  display: flex;
  justify-content: center;

  /* text-align: center; */
`;

export const Edit = styled.div`
  font-size: 18px;
  text-align: center;
`;

export const Quantity = styled.p`
  font-size: 18px;
  text-align: center;
`;

export const CloseIcon = styled(SlClose)`
  position: absolute;
  right: 20px;
  font-size: 25px;
  color: ${(props) => props.theme.sub.primary};
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.sub.darker};
  }
`;

// export const CartInfoBox = styled.div`
//   width: 100%;
//   display: flex;
//   align-items: center;
//   flex: 2;
// `;
