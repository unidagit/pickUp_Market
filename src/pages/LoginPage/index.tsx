import * as S from "./style";
import { CenterLayout } from "../_layouts";
import { FieldValues, useForm } from "react-hook-form";

import { LoginInput } from "../../components/inputs";
import { ErrorText } from "../../components/text";
import { useLoginMutation } from "../../hooks/mutations/useLoginQuery";
import Button from "../../components/buttons";
import Label from "../../components/label";
import { Link } from "react-router-dom";
import { useSelectTab } from "../../hooks/useSelectTab";

function LoginPage() {
  const { loginType, handleSellerButton, handleBuyerButton } = useSelectTab();
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm();

  const { postLogin, errorMessage } = useLoginMutation();
  //쓰겠음. postLogin, errorMessage받음.

  //폼제출
  const onSubmit = async (data: FieldValues) => {
    postLogin({ data, loginType }); //쓰겠음!!! 호출함!
  };

  return (
    <CenterLayout>
      <S.Wrapper>
        <S.TabBox>
          <S.SelectTab onClick={handleBuyerButton} loginType={loginType}>
            구매회원 로그인
          </S.SelectTab>

          <S.SelectTab onClick={handleSellerButton} loginType={loginType}>
            판매회원 로그인
          </S.SelectTab>
        </S.TabBox>
        <S.LoginWrapper>
          <S.FormBox onSubmit={handleSubmit(onSubmit)}>
            <S.InputBox>
              <Label htmlFor="username">
                <LoginInput
                  id="username"
                  type="username"
                  placeholder="아이디"
                  register={register("username", {
                    required: "* 필수 입력사항입니다.",
                  })}
                  errors={errors.username}
                />
              </Label>

              <Label htmlFor="password">
                <LoginInput
                  id="password"
                  type="password"
                  placeholder="비밀번호"
                  register={register("password", {
                    required: "* 필수 입력사항입니다.",
                  })}
                  errors={errors.password}
                />
              </Label>
            </S.InputBox>
            <S.ErrorBox>
              <ErrorText>{errorMessage}</ErrorText>
            </S.ErrorBox>
            <Button disabled={!isValid} type="submit">
              로그인
            </Button>
          </S.FormBox>
        </S.LoginWrapper>
        <S.JoinText>
          <Link to="/join">회원가입</Link>
        </S.JoinText>
      </S.Wrapper>
    </CenterLayout>
  );
}

export default LoginPage;
