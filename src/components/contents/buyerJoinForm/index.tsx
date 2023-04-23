import Button from "../../buttons";
import Label from "../../label";
import {
  JoinEmailInput,
  JoinNameInput,
  JoinPhoneNumberInput,
  JoinUserNameInput,
  JoinUserPasswordConfirmInput,
  JoinUserPasswordInput,
} from "../../inputs";
import { ErrorText, SuccessText } from "../../text";
import * as S from "./style";

function BuyerJoinForm(props: any) {
  const {
    register,
    isValid,
    handleSubmit,
    getValues,
    errors,
    errorMessage,
    successMessage,
    buyerOnSubmit,
    handleUsernameCheck,
    errorBuyerJoinMessage,
  } = props;

  return (
    <S.JoinWrapper>
      <S.FormBox onSubmit={handleSubmit(buyerOnSubmit)}>
        <Label htmlFor="username">
          아이디
          <S.InputBtnBox>
            <JoinUserNameInput register={register} errors={errors} />
            <Button type="button" height="54px" onClick={handleUsernameCheck}>
              중복확인
            </Button>
          </S.InputBtnBox>
        </Label>
        {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
        {successMessage && <SuccessText>{successMessage}</SuccessText>}

        <Label htmlFor="password">
          비밀번호
          <S.InputBox>
            <JoinUserPasswordInput register={register} errors={errors} />
          </S.InputBox>
        </Label>

        <Label htmlFor="password2">
          비밀번호 재확인
          <S.InputBox>
            <JoinUserPasswordConfirmInput
              register={register}
              errors={errors}
              getValues={getValues}
            />
          </S.InputBox>
        </Label>

        <Label htmlFor="name">
          이름
          <S.InputBox>
            <JoinNameInput register={register} errors={errors} />
          </S.InputBox>
        </Label>

        <Label htmlFor="phone_number">
          휴대폰번호
          <S.InputBox>
            <JoinPhoneNumberInput register={register} errors={errors} />
          </S.InputBox>
        </Label>

        <Label htmlFor="email">
          이메일
          <S.InputBox>
            <JoinEmailInput register={register} errors={errors} />
          </S.InputBox>
        </Label>
        <S.ErrorBox>
          {errorBuyerJoinMessage && (
            <ErrorText>{errorBuyerJoinMessage}</ErrorText>
          )}
        </S.ErrorBox>

        <Button disabled={!isValid} type="submit">
          가입하기
        </Button>
      </S.FormBox>
    </S.JoinWrapper>
  );
}

export default BuyerJoinForm;
