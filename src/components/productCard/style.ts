import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4.875rem;
`;

export const Box = styled.div`
  width: 380px;
  height: 380px;
`;

export const Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 10px;
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
