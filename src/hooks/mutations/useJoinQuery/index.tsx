import { IFormValue } from "../../../common/types";
import { useMutation } from "@tanstack/react-query";
// import { AxiosError } from "axios";
// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiPostJoin } from "../../../services/api";

export const useJoinQuery = () => {
  const navigate = useNavigate();
  // const [errorJoinMessage, setErrorJoinMessage] = useState("");

  const { mutate: postJoin } = useMutation(
    (joinData: IFormValue) => apiPostJoin(joinData),
    {
      // onError: (error: any | AxiosError) => {
      //   setErrorJoinMessage(error?.response?.data);
      //   console.log(error?.response?.data[0]);
      // },
      onSuccess: (data) => {
        navigate("/login");
      },
    }
  );

  return { postJoin };
};
