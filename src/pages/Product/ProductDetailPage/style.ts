import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  margin: 80px auto;
  max-width: 1280px;
  justify-content: center;
`;

export const Img = styled.img`
  object-fit: cover;
  width: 37.5rem;
`;

export const ProductBox = styled.div`
  width: 39.375rem;
`;

export const NumberBox = styled.div`
  margin-top: 138px;
`;

export const ParcelText = styled.p`
  font-weight: 400;
  color: ${(props) => props.theme.sub.primary};
  font-size: 1rem;
  margin-bottom: 20px;
`;

export const Line = styled.div`
  border: 2px solid ${(props) => props.theme.sub.lighter};
`;

export const StoreName = styled.p`
  font-weight: 400;
  color: ${(props) => props.theme.sub.primary};
  font-size: 1rem;
`;

export const ProductName = styled.p`
  font-size: 1.125rem;
  font-weight: 400;
  margin: 16px 0px 20px 0px;
`;

export const PriceBox = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;

export const TotalPriceBox = styled.div`
  display: flex;
  align-items: center;

  justify-content: space-between;
  margin: 61px 0px 22px 0px;
`;

export const Total = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
`;

export const TotalText = styled.p`
  font-weight: 400;
  font-size: 1.125rem;
`;

export const TotalCount = styled.p`
  width: 86px;
  font-weight: 400;
  font-size: 1.125rem;
  color: ${(props) => props.theme.sub.primary};
  margin-right: 28px;
`;

export const ButtonBox = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 0.875rem;
`;
