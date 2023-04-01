import * as S from "./style";
import axios, { AxiosError } from "axios";
import Label from "../../components/label";
import { CenterLayout } from "../../pages/_layouts";
import { useForm } from "react-hook-form";
import { IFormValue } from "../../common/types";
import { BASE_URL } from "../../constants";
import { useState } from "react";
import Button from "../../components/buttons";
import LoginInput from "../../components/inputs";
import ErrorText from "../../components/text";

function LoginPage() {
  const [errorMessage, setErrorMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm();

  const postLoginUser = async (data: any) => {
    const { username, password } = data;
    const config = {
      username,
      password,
      login_type: "SELLER",
    };

    try {
      const response = await axios.post(`${BASE_URL}/accounts/login/`, config);
      console.log(response.data);
    } catch (error: any | AxiosError) {
      if (axios.isAxiosError(error)) {
        setErrorMessage(error?.response?.data.FAIL_Message);
      }
    }
  };

  //폼제출
  const onSubmit = async (data: IFormValue) => {
    await postLoginUser(data);
  };

  return (
    <CenterLayout>
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
    </CenterLayout>
  );
}

export default LoginPage;
