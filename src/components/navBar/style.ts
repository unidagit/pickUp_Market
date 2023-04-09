import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  height: 90px;
  display: flex;
  align-items: center;
`;

export const StickyWrapper = styled.nav`
  max-width: 1280px;
  margin: 0 auto;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SellerTitle = styled.h2`
  margin-left: 20px;
  font-size: 30px;
  font-weight: 500;
  color: ${(props) => props.theme.sub.lighter};
`;

export const Line = styled.div`
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 44px;
`;

export const IconBox = styled.div`
  display: flex;
  align-items: center;
  margin-right: 0;
`;

export const ShopBagIcon = styled.img`
  width: 30px;
  height: 30px;
  color: ${(props) => props.theme.white.primary};
  margin-right: 8px;
`;

export const MyIconBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 30px;
`;

export const MyIcon = styled.img`
  width: 32px;
  height: 32px;
  margin-bottom: 4px;
`;

export const MyIconText = styled.p`
  font-size: 12px;
  color: ${(props) => props.theme.sub.primary};
`;

export const Title = styled.h2`
  font-size: 30px;
  font-weight: 500;
`;