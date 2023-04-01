import { IFormValue } from "../../../common/types";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useState } from "react";
import { apiPostLogin } from "../../../services";

export const useLoginMutation = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const { mutate: postLogin } = useMutation(
    (data: IFormValue) => apiPostLogin(data),
    {
      onError: (error: any | AxiosError) => {
        setErrorMessage(error?.response?.data.FAIL_Message);
      },
      onSuccess: (data) => {
        console.log(data);
        localStorage.setItem("token", data.token);
        localStorage.setItem("user_type", data.user_type);
      },
    }
  );

  return { postLogin, errorMessage };
};
