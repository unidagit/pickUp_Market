import styled from "styled-components";

export const Wrapper = styled.div`
  margin-bottom: 4.875rem;
`;

export const ShippingForm = styled.form`
  display: grid;
  grid-template-columns: 6.5fr 3.5fr;
`;

export const ShippingMainTitle = styled.h2`
  display: block;
  font-size: 1.5rem;
  font-weight: 500;
  padding-bottom: 18px;
  margin-top: 70px;
  border-bottom: 2px solid ${(props) => props.theme.sub.lighter};
`;

export const ShippingInfo = styled.div`
  margin-right: 1.875rem;
`;

export const ShippingContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 0px 2px 0px;
  border-bottom: 1px solid ${(props) => props.theme.sub.lighter};
`;

export const InputBox = styled.div`
  width: 100%;
`;

export const LabelBox = styled.div`
  min-width: 100px;
`;

export const PaymentMethodBox = styled.div`
  display: flex;
  align-items: center;
  padding: 18px 0px;
  border-bottom: 2px solid ${(props) => props.theme.sub.lighter};
`;

export const FinalBox = styled.div``;

export const FinalTitle = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  padding-bottom: 18px;
  margin-top: 70px;
`;

export const PriceBox = styled.ul`
  border: 2px solid ${(props) => props.theme.main.primary};
  border-radius: 5px;
  padding: 2rem;
`;

export const PriceTitle = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const Text = styled.p`
  font-size: 16px;
`;

export const Line = styled.div`
  border: 1px solid ${(props) => props.theme.sub.lighter};
  margin-bottom: 50px;
`;

export const ButtonBox = styled.div`
  padding-top: 90px;
`;
