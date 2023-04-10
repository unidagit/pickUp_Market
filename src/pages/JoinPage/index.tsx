import React from "react";
import { CenterLayout } from "../_layouts";
import {
  JoinCompanyNumberInput,
  JoinNameInput,
  JoinPhoneNumberInput,
  JoinStoreNameInput,
  JoinUserNameInput,
  JoinUserPasswordConfirmInput,
  JoinUserPasswordInput,
} from "../../components/inputs";
import Label from "../../components/atoms/label";
import * as S from "./style";
import Button from "../../components/atoms/buttons";
import { useForm } from "react-hook-form";
import { IFormValue } from "../../common/types";
import useValidUsernameQuery from "../../hooks/mutations/useValidUsernameQuery";
import { ErrorText, SuccessText } from "../../components/text";
import useValidCompanyNumQuery from "../../hooks/mutations/useVaildCompanyNumQuery";
import { useJoinQuery } from "../../hooks/mutations/useJoinQuery";

function JoinPage() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { isValid, errors },
  } = useForm<IFormValue>({ mode: "onChange" });

  //유저네임 중복 체크
  const { vaildUsername, errorMessage, successMessage, isValidUsername } =
    useValidUsernameQuery();

  //사업자번호 중복 체크
  const {
    validCompanyNum,
    errorCompanyMessage,
    successCompanyMessage,
    isValidCompanyNum,
  } = useValidCompanyNumQuery();

  //폼제출 mutation
  const { postJoin } = useJoinQuery();

  //폼제출
  const onSubmit = async (joinData: IFormValue) => {
    if (!isValidUsername) {
      alert("아이디 중복체크 해주세요.");
    } else if (!isValidCompanyNum) {
      alert("사업자등록번호 인증 해주세요.");
      return;
    }
    postJoin(joinData);
  };

  //아이디 중복검사
  const handleUsernameCheck = () => {
    const username = getValues("username");
    if (username) {
      vaildUsername(username);
    }
  };

  //사업자등록번호 인증 검사
  const handleCompanyNumCheck = () => {
    const companyNum = getValues("company_registration_number");
    if (companyNum) {
      validCompanyNum(companyNum);
    }
  };

  return (
    <CenterLayout>
      <S.Wrapper>
        <S.JoinWrapper>
          <S.FormBox onSubmit={handleSubmit(onSubmit)}>
            <S.InputBox>
              <Label htmlFor="username">아이디</Label>
              <JoinUserNameInput register={register} errors={errors} />

              {errorMessage && <ErrorText>{errorMessage}</ErrorText>}

              {successMessage && <SuccessText>{successMessage}</SuccessText>}

              <Button type="button" height="54px" onClick={handleUsernameCheck}>
                중복확인
              </Button>
            </S.InputBox>

            <S.InputBox>
              <Label htmlFor="password">비밀번호</Label>
              <JoinUserPasswordInput register={register} errors={errors} />
            </S.InputBox>

            <S.InputBox>
              <Label htmlFor="password2">비밀번호 재확인</Label>
              <JoinUserPasswordConfirmInput
                register={register}
                errors={errors}
                getValues={getValues}
              />
            </S.InputBox>

            <S.InputBox>
              <Label htmlFor="name">이름</Label>
              <JoinNameInput register={register} errors={errors} />
            </S.InputBox>

            <S.InputBox>
              <Label htmlFor="phone_number">휴대폰번호</Label>
              <JoinPhoneNumberInput register={register} errors={errors} />
            </S.InputBox>

            <S.InputBox>
              <Label htmlFor="company_registration_number">
                사업자 등록번호
              </Label>
              <JoinCompanyNumberInput register={register} errors={errors} />

              {errorCompanyMessage && (
                <ErrorText>{errorCompanyMessage}</ErrorText>
              )}

              {successCompanyMessage && (
                <SuccessText>{successCompanyMessage}</SuccessText>
              )}
              <Button
                type="button"
                height="54px"
                onClick={handleCompanyNumCheck}
              >
                인증
              </Button>
            </S.InputBox>

            <S.InputBox>
              <Label htmlFor="store_name">스토어 이름</Label>
              <JoinStoreNameInput register={register} errors={errors} />
            </S.InputBox>
            <Button disabled={!isValid} type="submit">
              가입하기
            </Button>
          </S.FormBox>
        </S.JoinWrapper>
      </S.Wrapper>
    </CenterLayout>
  );
}

export default JoinPage;
