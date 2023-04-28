import styled from 'styled-components';

export const Table = styled.ul`
  font-size: 13px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  text-align: center;
  padding: 0 1rem;
  border-bottom: 1px solid ${(props) => props.theme.sub.lighter};
  padding: 1rem 0;
`;

export const Text = styled.li``;
