import styled from "styled-components";
import { IPrice } from "../../common/types";

export const ErrorText = styled.p`
  margin-top: 6px;
  color: ${(props) => props.theme.text.error};
  font-size: 16px;
  font-weight: 400;
`;

export const SuccessText = styled.p`
  margin-top: 6px;
  color: ${(props) => props.theme.main.primary};
  font-size: 16px;
  font-weight: 400;
`;

export const PriceText = styled.p<IPrice>`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.fontColor};
`;

export const PriceBox = styled.div`
  display: flex;
  gap: 2px;
  align-items: center;
`;

export const Unit = styled.p<IPrice>`
  font-size: ${(props) => props.unitSize};
  font-weight: 400;
  color: ${(props) => props.unitColor};
  height: ${(props) => props.unitHeight};
`;
