import { useMutation } from "@tanstack/react-query";
import { apiPostValidUsername } from "../../../services/api";
import { useState } from "react";
import { AxiosError } from "axios";

export default function useValidUsernameQuery() {
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isValidUsername, setIsValidUsername] = useState(false);
  const { mutate: vaildUsername } = useMutation(
    (username: string) => apiPostValidUsername(username),

    {
      onError: (error: any | AxiosError) => {
        setErrorMessage(error?.response?.data.FAIL_Message);
        setSuccessMessage("");
      },
      onSuccess: (data) => {
        setSuccessMessage(data.Success);
        setErrorMessage("");
        setIsValidUsername(true);
      },
    }
  );

  return { vaildUsername, errorMessage, successMessage, isValidUsername };
}
