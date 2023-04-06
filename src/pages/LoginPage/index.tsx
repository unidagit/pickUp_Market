import * as S from "./style";
import Label from "../../components/label";
import { CenterLayout } from "../_layouts";
import { useForm } from "react-hook-form";
import { IFormValue } from "../../common/types";
import { LoginInput } from "../../components/inputs";
import { ErrorText } from "../../components/text";
import { useLoginMutation } from "../../hooks/mutations/useLoginQuery";
import Button from "../../components/buttons";

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
            {" "}
            <ErrorText>{errorMessage}</ErrorText>{" "}
          </S.ErrorBox>
          <Button
            disabled={!isValid}
            height="60px"
            type="submit"
            fontSize="1.125rem"
            fontWeight="700"
            fontColor="#FFFFFF"
            backgroundColor="#21BF48"
          >
            로그인
          </Button>
        </S.FormBox>
      </S.LoginWrapper>
    </CenterLayout>
  );
}

export default LoginPage;
