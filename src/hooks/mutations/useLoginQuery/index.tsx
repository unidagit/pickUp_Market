import { IFormValue } from "../../../common/types";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useState } from "react";
import { apiPostLogin } from "../../../services";
import { useNavigate } from "react-router-dom";
import { FieldValues } from "react-hook-form";

export const useLoginMutation = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const { mutate: postLogin } = useMutation(
    (loginData: { data: FieldValues; loginType: string }) =>
      apiPostLogin(loginData),
    {
      onError: (error: any | AxiosError) => {
        setErrorMessage(error?.response?.data.FAIL_Message);
      },
      onSuccess: (data) => {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user_type", data.user_type);
        navigate("/");
      },
    }
  );

  return { postLogin, errorMessage };
};
