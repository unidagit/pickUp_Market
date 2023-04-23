import { IFormValue } from "../../../common/types";
import { useMutation } from "@tanstack/react-query";
// import { AxiosError } from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiBuyerPostJoin } from "../../../services/api";
import { AxiosError } from "axios";

export const useJoinBuyerQuery = () => {
  const navigate = useNavigate();
  const [errorBuyerJoinMessage, setBuyerErrorJoinMessage] = useState("");

  const { mutate: postBuyerJoin, error } = useMutation(
    (joinData: IFormValue) => apiBuyerPostJoin(joinData),
    {
      onError: (error: any | AxiosError) => {
        setBuyerErrorJoinMessage(error?.response?.data.store_name[0]);
      },
      onSuccess: () => {
        navigate("/login");
      },
    }
  );

  return { postBuyerJoin, errorBuyerJoinMessage };
};
