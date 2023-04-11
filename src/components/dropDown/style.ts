import styled from "styled-components";

export const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 10px;
  background-color: ${(props) => props.theme.white.primary};
  border-radius: 10px;
  -webkit-box-shadow: 5px 5px 15px -2px #8f8f8f;
  box-shadow: 5px 5px 15px -2px #8f8f8f;
`;

export const Triangle = styled.div`
  position: absolute;
  top: -10px;
  right: 50px;
  width: 0;
  height: 0;
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
  border-bottom: 12px solid ${(props) => props.theme.white.primary};
`;

export const MyText = styled.li`
  display: block;
  padding: 10px 17px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 5px;
  color: ${(props) => props.theme.sub.primary};
  border: 1px solid ${(props) => props.theme.white.primary};

  &:hover {
    border: 1px solid ${(props) => props.theme.sub.darker};
    color: ${(props) => props.theme.sub.darker};
  }

  & + & {
    margin-top: 8px;
  }
`;
