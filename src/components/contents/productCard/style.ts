import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4.875rem;
`;

export const Box = styled.div`
  width: 100%;
  height: 380px;
`;

export const ImgBox = styled.div`
  width: 100%;
  height: 380px;
  overflow: hidden;
  border-radius: 10px;
`;

export const Img = styled.div`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  transition: 0.3s;
  background-color: #f8f8f8;
  &:hover {
    transform: scale(1.12);
  }
`;

export const StoreName = styled.p`
  font-weight: 400;
  color: ${(props) => props.theme.sub.primary};
  font-size: 16px;
  margin-top: 16px;
`;

export const ProductName = styled.p`
  font-size: 18px;
  font-weight: 400;
  margin: 10px 0px;
`;

export const PriceBox = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;

export const NoticeBox = styled.div`
  display: flex;
  margin-top: 6px;
`;

export const FreeShipping = styled.p`
  width: 70px;
  text-align: center;
  font-size: 0.68rem;
  font-weight: 400;
  margin-right: 6px;
  padding: 0.4rem;
  border: 1.5px solid ${(props) => props.theme.sub.primary};
  border-radius: 0.3rem;
`;

export const SoldOut = styled.p`
  width: 70px;
  text-align: center;
  font-size: 0.68rem;
  font-weight: 400;
  color: ${(props) => props.theme.white.primary};
  background-color: ${(props) => props.theme.sub.darker};
  border-radius: 0.3rem;
  padding: 0.4rem;
`;

export const LessStock = styled.p`
  width: 70px;
  text-align: center;
  font-size: 0.68rem;
  font-weight: 400;
  color: ${(props) => props.theme.white.primary};
  background-color: ${(props) => props.theme.text.lighter};
  border-radius: 0.3rem;
  padding: 0.4rem;
`;
