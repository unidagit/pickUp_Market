import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  margin-top: 44px;
`;

export const MainTitle = styled.h1`
  font-size: 36px;
  font-weight: 700;
  color: ${(props) => props.theme.sub.primary};
`;

export const UploadBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 42px;
`;

export const Plus = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 7px;
`;

export const ProductTableBox = styled.div`
  height: 65vh;
  border: 1px solid ${(props) => props.theme.sub.lighter};
  border-radius: 5px;
  background-color: ${(props) => props.theme.sub.lighter};
`;

export const ProductTable = styled.ul`
  display: flex;
  align-items: center;
  padding: 18px;
  background-color: ${(props) => props.theme.white.primary};
  border-bottom: 1px solid ${(props) => props.theme.sub.lighter};
  border-radius: 5px 5px 0px 0px;
  text-align: center;
`;

export const Info = styled.p`
  font-size: 18px;
  flex: 2;
`;

export const Price = styled.p`
  font-size: 18px;
  flex: 0.3;
`;

export const Edit = styled.p`
  margin-left: 2rem;
  width: 80px;
  font-size: 18px;
  flex: 0.3;
  margin-left: 2rem;
`;

export const Delete = styled.p`
  width: 80px;
  font-size: 18px;
  flex: 0.3;
  margin-left: 2rem;
`;
