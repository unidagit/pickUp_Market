import styled from "styled-components";
import { LabelProps } from ".";

export const Label = styled.label<LabelProps>`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color};
  margin-bottom: ${(props) => props.marginBottom};
`;
