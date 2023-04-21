import { useForm } from "react-hook-form";
import Label from "../../atoms/label";
import {
  ShippingAddressInput,
  ShippingAddressMessageInput,
  ShippingNameInput,
  ShippingPhoneNumberInput,
} from "../../inputs";
import * as S from "./style";
import Checkbox from "../../checkBox";
import { PriceCommaText } from "../../text";
import Button from "../../atoms/buttons";

function ShippingInfoBox({
  cartItemTotalPrice,
  cartItemFee,
  handlePayCheck,
  selectedOption,
  // isValid,
  // errors,
  onSubmit,
}: {
  cartItemTotalPrice: number;
  cartItemFee: number;
  handlePayCheck: any;
  selectedOption: any;
  // isValid: any;
  // errors: any;
  onSubmit: any;
}) {
  // const { register, handleSubmit } = useForm();

  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm({ mode: "onChange" });

  return (
    <S.Wrapper>
      <S.ShippingForm onSubmit={handleSubmit(onSubmit)}>
        <S.ShippingInfo>
          <S.ShippingMainTitle>배송지 정보</S.ShippingMainTitle>
          <S.ShippingContainer>
            <S.LabelBox>
              <Label marginBottom="0px" color="#000000" htmlFor="receiver">
                수령인
              </Label>
            </S.LabelBox>
            <S.InputBox>
              <ShippingNameInput register={register} errors={errors} />
            </S.InputBox>
          </S.ShippingContainer>

          <S.ShippingContainer>
            <S.LabelBox>
              <Label
                marginBottom="0px"
                color="#000000"
                htmlFor="receiver_phone_number"
              >
                휴대폰
              </Label>
            </S.LabelBox>
            <S.InputBox>
              <ShippingPhoneNumberInput register={register} errors={errors} />
            </S.InputBox>
          </S.ShippingContainer>

          <S.ShippingContainer>
            <S.LabelBox>
              <Label marginBottom="0px" color="#000000" htmlFor="address">
                배송주소
              </Label>
            </S.LabelBox>
            <S.InputBox>
              <ShippingAddressInput register={register} errors={errors} />
            </S.InputBox>
          </S.ShippingContainer>

          <S.ShippingContainer>
            <S.LabelBox>
              <Label
                marginBottom="0px"
                color="#000000"
                htmlFor="address_message"
              >
                배송 메시지
              </Label>
            </S.LabelBox>
            <S.InputBox>
              <ShippingAddressMessageInput
                register={register}
                errors={errors}
              />
            </S.InputBox>
          </S.ShippingContainer>

          <S.ShippingMainTitle>결제수단</S.ShippingMainTitle>
          <S.PaymentMethodBox>
            <Checkbox
              text="신용/체크카드"
              value="CARD"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handlePayCheck(e)
              }
              checked={selectedOption === "CARD"}
            />
            <Checkbox
              text="무통장입금"
              value="DEPOSIT"
              checked={selectedOption === "DEPOSIT"}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handlePayCheck(e)
              }
            />
          </S.PaymentMethodBox>
        </S.ShippingInfo>

        <S.FinalBox>
          <S.FinalTitle>최종결제 정보</S.FinalTitle>
          <S.PriceBox>
            <S.PriceTitle>
              <S.Text>- 상품금액</S.Text>
              <PriceCommaText
                price={cartItemTotalPrice}
                fontSize="18px"
                fontWeight="700"
                unitColor="#767676"
                unitSize="14px"
              />
            </S.PriceTitle>

            <S.PriceTitle>
              <S.Text>- 배송비</S.Text>
              <PriceCommaText
                price={cartItemFee}
                fontSize="18px"
                fontWeight="700"
                unitColor="#767676"
                unitSize="14px"
              />
            </S.PriceTitle>

            <S.Line />

            <S.PriceTitle>
              <S.Text>- 결제금액</S.Text>
              <PriceCommaText
                price={cartItemTotalPrice}
                fontSize="24px"
                fontWeight="700"
                fontColor="#EB5757"
                unitColor="#EB5757"
                unitSize="24px"
              />
            </S.PriceTitle>
            <S.ButtonBox>
              <Button type="submit" disabled={!isValid || !selectedOption}>
                결제하기
              </Button>
            </S.ButtonBox>
          </S.PriceBox>
        </S.FinalBox>
      </S.ShippingForm>
    </S.Wrapper>
  );
}

export default ShippingInfoBox;
