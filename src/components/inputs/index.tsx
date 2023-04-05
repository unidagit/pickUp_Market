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
    <>
      <S.LoginInput
        id={id}
        type={type}
        placeholder={placeholder}
        {...register}
        {...errors}
      />
      <ErrorText>{errors && errors.message}</ErrorText>
    </>
  );
}

function ProductNameInput() {
  return <S.ProductNameInput type="text" minLength={1} maxLength={20} />;
}

function PriceInput({ unit }: { unit: string }) {
  return (
    <S.UnitBox>
      <S.PriceInput type="number" />
      <S.Unit>{unit}</S.Unit>
    </S.UnitBox>
  );
}

export { LoginInput, ProductNameInput, PriceInput };
