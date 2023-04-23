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

// function CheckInput() {
//   return <S.CheckInput type="checkbox" />;
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

//회원가입 인풋(유효성검사)
//1. JoinUserNameInput
function JoinUserNameInput({ register, errors }: any) {
  return (
    <S.JoinInputWrap>
      <S.JoinInput
        id="username"
        type="text"
        {...register("username", {
          required: "* 필수 입력사항입니다.",
          pattern: {
            value: /^[a-zA-Z0-9]{1,19}/,
            message:
              "* 20자 이내의 영문 소문자, 대문자, 숫자만 사용 가능합니다.",
          },
        })}
      />
      <ErrorText>{errors.username?.message}</ErrorText>
    </S.JoinInputWrap>
  );
}

//2. JoinUserPasswordInput
function JoinUserPasswordInput({ register, errors }: any) {
  return (
    <>
      <S.JoinInput
        id="password"
        type="password"
        {...register("password", {
          required: "* 필수 입력사항입니다.",
          pattern: {
            value: /^(?=.*[a-zA-Z])((?=.*\d)(?=.*\W)).{8,}$/,
            message: "* 8자 이상, 영문 대 소문자, 숫자, 특수문자를 사용하세요.",
          },
        })}
      />
      <ErrorText>{errors.password?.message}</ErrorText>
    </>
  );
}

//2-1. JoinUserPasswordConfirmInput
function JoinUserPasswordConfirmInput({ register, errors, getValues }: any) {
  return (
    <>
      <S.JoinInput
        id="password2"
        type="password"
        {...register("password2", {
          required: "* 필수 입력사항입니다.",
          validate: {
            matchPreviousPassword: (value: string) => {
              const { password } = getValues();
              return password === value || "비밀번호가 일치하지 않습니다.";
            },
          },
        })}
      />
      <ErrorText>{errors.password2?.message}</ErrorText>
    </>
  );
}

//3. JoinNameInput
function JoinNameInput({ register, errors }: any) {
  return (
    <>
      <S.JoinInput
        id="name"
        type="text"
        {...register("name", {
          required: "* 필수 입력사항입니다.",
        })}
      />
      <ErrorText>{errors.name?.message}</ErrorText>
    </>
  );
}

//4. JoinPhoneNumberInput
function JoinPhoneNumberInput({ register, errors }: any) {
  return (
    <>
      <S.JoinInput
        id="phone_number"
        type="number"
        {...register("phone_number", {
          required: "* -를 제외한 숫자만 입력해주세요.",
          minLength: {
            value: 8,
            message: "휴대폰 번호는 10자 이상 입력 해주세요.",
          },
          maxLength: {
            value: 11,
            message: "휴대폰 번호는 11자 이하 입력 해주세요.",
          },
        })}
      />
      <ErrorText>{errors.phone_number?.message}</ErrorText>
    </>
  );
}

//5. JoinPhoneNumberInput
function JoinCompanyNumberInput({ register, errors }: any) {
  return (
    <S.JoinInputWrap>
      <S.JoinInput
        id="company_registration_number"
        type="number"
        {...register("company_registration_number", {
          required: "* -를 제외한 숫자만 입력해주세요.",
          minLength: {
            value: 10,
            message: "사업자등록번호는 10자리로 입력 해주세요.",
          },
          maxLength: {
            value: 10,
            message: "사업자등록번호는 10자리로 입력 해주세요.",
          },
        })}
      />
      <ErrorText>{errors.company_registration_number?.message}</ErrorText>
    </S.JoinInputWrap>
  );
}

//6. JoinStoreNameInput
function JoinStoreNameInput({ register, errors }: any) {
  return (
    <>
      <S.JoinInput
        id="store_name"
        type="text"
        {...register("store_name", {
          required: "* 필수 입력사항입니다.",
        })}
      />
      <ErrorText>{errors.store_name?.message}</ErrorText>
    </>
  );
}

//7. JoinEmailInput
function JoinEmailInput({ register, errors }: any) {
  return (
    <>
      <S.JoinInput
        id="email"
        type="email"
        {...register("email", {
          required: "* 필수 입력사항입니다.",
        })}
      />
      <ErrorText>{errors.store_name?.message}</ErrorText>
    </>
  );
}

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

function Textarea({ register }: any) {
  return <S.Textarea minLength={1} maxLength={20} {...register} />;
}

//ShippingNameInput
function ShippingNameInput({ register, errors }: any) {
  return (
    <>
      <S.ShippingInput
        id="receiver"
        type="text"
        {...register("receiver", {
          required: "* 필수 입력사항입니다.",
        })}
      />
      <ErrorText>{errors.receiver?.message}</ErrorText>
    </>
  );
}

function ShippingPhoneNumberInput({ register, errors }: any) {
  return (
    <>
      <S.ShippingInput
        id="receiver_phone_number"
        type="number"
        {...register("receiver_phone_number", {
          required: "* -를 제외한 숫자만 입력해주세요.",
          minLength: {
            value: 8,
            message: "휴대폰 번호는 10자 이상 입력 해주세요.",
          },
          maxLength: {
            value: 11,
            message: "휴대폰 번호는 11자 이하 입력 해주세요.",
          },
        })}
      />
      <ErrorText>{errors.receiver_phone_number?.message}</ErrorText>
    </>
  );
}

function ShippingAddressInput({ register, errors }: any) {
  return (
    <>
      <S.ShippingInput
        id="address"
        type="text"
        {...register("address", {
          required: "* 필수 입력사항입니다.",
        })}
      />
      <ErrorText>{errors.address?.message}</ErrorText>
    </>
  );
}

function ShippingAddressMessageInput({ register, errors }: any) {
  return (
    <>
      <S.ShippingInput
        id="address_message"
        type="text"
        {...register("address_message", {
          required: "* 필수 입력사항입니다.",
        })}
      />
      <ErrorText>{errors.address_message?.message}</ErrorText>
    </>
  );
}

export {
  LoginInput,
  JoinUserNameInput,
  JoinUserPasswordInput,
  JoinUserPasswordConfirmInput,
  JoinNameInput,
  JoinPhoneNumberInput,
  JoinCompanyNumberInput,
  JoinStoreNameInput,
  JoinEmailInput,
  ProductInput,
  Textarea,
  ShippingNameInput,
  ShippingPhoneNumberInput,
  ShippingAddressInput,
  ShippingAddressMessageInput,
};
