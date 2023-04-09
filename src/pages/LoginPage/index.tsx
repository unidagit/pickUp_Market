import * as S from "./style";
import { CenterLayout } from "../_layouts";
import { useForm } from "react-hook-form";
import { IFormValue } from "../../common/types";
import { LoginInput } from "../../components/inputs";
import { ErrorText } from "../../components/text";
import { useLoginMutation } from "../../hooks/mutations/useLoginQuery";
import Button from "../../components/atoms/buttons";
import Label from "../../components/atoms/label";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm();

  const { postLogin, errorMessage } = useLoginMutation();
  //쓰겠음. postLogin, errorMessage받음.

  //폼제출
  const onSubmit = async (data: IFormValue) => {
    postLogin(data); //쓰겠음!!! 호출함!
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
