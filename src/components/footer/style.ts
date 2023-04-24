import styled from "styled-components";

export const FooterWrapper = styled.table`
  background-color: ${(props) => props.theme.sub.verylighter};
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const FooterInfo = styled.tbody`
  display: flex;
  flex-direction: column;
  font-size: 13px;
  max-width: 1280px;
  margin: 0 auto;
  color: ${(props) => props.theme.sub.primary};
  width: 1280px;
`;

export const FooterList = styled.tr`
  display: flex;
  column-gap: 2.4rem;
`;

export const CompanyInfo = styled.tr`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const Text = styled.td`
  margin-bottom: 5px;
`;
