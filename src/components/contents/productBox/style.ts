import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* padding: 16px 30px; */
  border-bottom: 1px solid ${(props) => props.theme.sub.lighter};
  background-color: ${(props) => props.theme.white.primary};
`;

export const Img = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50px;
  object-fit: cover;
  margin-right: 1.875rem;
`;

export const ProductName = styled.h2`
  font-size: 18px;
  font-weight: 400;
`;

export const ProductStock = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${(props) => props.theme.sub.primary};
`;

export const ProductInfoContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 18px;
  align-items: center;
  justify-content: center;
`;

export const ProductInfoBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex: 2;
`;

export const ProductNameBox = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

export const ModifyContainer = styled.div`
  flex: 0.3;
  margin-left: 2rem;
`;
