import React from "react";
import * as S from "./style";
import { ErrorText } from "../text";
import { IProductInputProps } from "../../common/types";

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

// function ProductNameInput() {
//   return <S.ProductNameInput type="text" minLength={1} maxLength={20} />;
// }

function ProductInput({
  unit,
  type,
  id,
  register,
  width,
  min,
  onChange,
}: IProductInputProps) {
  return (
    <S.UnitBox>
      <S.ProductInput
        type={type}
        id={id}
        width={width ? width : ""}
        min={min ? min : "0"}
        onChange={onChange}
        {...register}
      />
      {unit ? <S.Unit>{unit}</S.Unit> : ""}
    </S.UnitBox>
  );
}

// function FileInput({ onChange, register, ref }: any) {
//   return (
//     <S.FileInput
//       type="file"
//       onChange={onChange}
//       ref={ref}
//       {...register}
//     ></S.FileInput>
//   );
// }

function Textarea({ register }: any) {
  return <S.Textarea minLength={1} maxLength={20} {...register} />;
}

export { LoginInput, ProductInput, Textarea };
