import styled from 'styled-components';

export const Table = styled.ul`
  font-size: 13px;
  font-weight: 500;
  text-align: center;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  padding: 0 1rem;
  border-bottom: 2px solid ${(props) => props.theme.sub.lighter};
  padding: 1rem 0;
`;

export const Text = styled.li``;
