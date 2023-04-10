import { useState } from "react";

import { useMutation } from "@tanstack/react-query";
import { apiPostValidCompanyNum } from "../../../services/api";
import { AxiosError } from "axios";

export default function useValidCompanyNumQuery() {
  const [errorCompanyMessage, setErrorCompanyMessage] = useState("");
  const [successCompanyMessage, setSuccessCompanyMessage] = useState("");
  const [isValidCompanyNum, setIsValidCompanyNum] = useState(false);

  const { mutate: validCompanyNum } = useMutation(
    (companyNum: string) => apiPostValidCompanyNum(companyNum),

    {
      onError: (error: any | AxiosError) => {
        setErrorCompanyMessage(error?.response?.data.FAIL_Message);
        setSuccessCompanyMessage("");
      },
      onSuccess: (data) => {
        setSuccessCompanyMessage(data.Success);
        setErrorCompanyMessage("");
        setIsValidCompanyNum(true);
      },
    }
  );

  return {
    validCompanyNum,
    errorCompanyMessage,
    successCompanyMessage,
    isValidCompanyNum,
  };
}
