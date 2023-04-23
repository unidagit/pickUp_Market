import Button from "../../atoms/buttons";
import Label from "../../atoms/label";
import {
  JoinCompanyNumberInput,
  JoinNameInput,
  JoinPhoneNumberInput,
  JoinStoreNameInput,
  JoinUserNameInput,
  JoinUserPasswordConfirmInput,
  JoinUserPasswordInput,
} from "../../inputs";
import { ErrorText, SuccessText } from "../../text";
import * as S from "./style";

function SellerJoinForm(props: any) {
  const {
    register,
    isValid,
    handleSubmit,
    getValues,
    errors,
    errorMessage,
    successMessage,
    errorCompanyMessage,
    successCompanyMessage,
    sellerOnSubmit,
    handleUsernameCheck,
    handleCompanyNumCheck,
    errorSellerJoinMessage,
  } = props;

  return (
    <S.JoinWrapper>
      <S.FormBox onSubmit={handleSubmit(sellerOnSubmit)}>
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

        <Label htmlFor="company_registration_number">
          사업자 등록번호
          <S.InputBtnBox>
            <JoinCompanyNumberInput register={register} errors={errors} />
            <Button type="button" height="54px" onClick={handleCompanyNumCheck}>
              인증
            </Button>
          </S.InputBtnBox>
        </Label>
        {errorCompanyMessage && <ErrorText>{errorCompanyMessage}</ErrorText>}
        {successCompanyMessage && (
          <SuccessText>{successCompanyMessage}</SuccessText>
        )}

        <Label htmlFor="store_name">
          스토어 이름
          <S.InputBox>
            <JoinStoreNameInput register={register} errors={errors} />
          </S.InputBox>
        </Label>
        {errorSellerJoinMessage && (
          <ErrorText>{errorSellerJoinMessage}</ErrorText>
        )}

        <Button disabled={!isValid} type="submit">
          가입하기
        </Button>
      </S.FormBox>
    </S.JoinWrapper>
  );
}

export default SellerJoinForm;
