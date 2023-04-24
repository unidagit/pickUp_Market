import styled from "styled-components";

export const ProductListWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-auto-flow: dense;
  gap: 70px;
  max-width: 1280px;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  margin: 0 auto;
  padding: 80px 0px 180px;
`;

export const BannerBox = styled.div`
  position: relative;
  z-index: -50;
`;

export const ProductListBox = styled.div`
  margin-bottom: 78px;
`;

export const LoadingBox = styled.div`
  width: 100%;
  height: 100vh;
`;

export const LastProduct = styled.p`
  text-align: center;
  font-size: 1.2rem;
  font-weight: 700;
  color: ${(props) => props.theme.main.primary};
  margin-bottom: 100px;
`;
