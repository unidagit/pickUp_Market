import React from "react";
import * as S from "./style";
import { ErrorText } from "../text";

// interface InputProps {
//   id: string;
//   type?: string;
//   placeholder: string;
//   errors: FieldError;
//   register?: any;
// }

function LoginInput({ id, type, placeholder, register, errors }: any) {
  return (
    <div>
      <S.LoginInput
        id={id}
        type={type}
        placeholder={placeholder}
        {...register}
        {...errors}
      />
      <ErrorText>{errors && errors.message}</ErrorText>
    </div>
  );
}

export default LoginInput;
