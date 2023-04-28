import styled from 'styled-components';

export const FooterWrapper = styled.table`
  background-color: ${(props) => props.theme.sub.verylighter};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const FooterInfo = styled.tbody`
  font-size: 13px;
  width: 1280px;
  margin: 2rem 1rem;
  color: ${(props) => props.theme.sub.primary};
`;

export const FooterList = styled.tr`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const CompanyInfo = styled.tr`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const Text = styled.td`
  margin-bottom: 5px;
`;
