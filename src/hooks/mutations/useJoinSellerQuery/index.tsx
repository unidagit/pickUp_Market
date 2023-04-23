import { IFormValue } from "../../../common/types";
import { useMutation } from "@tanstack/react-query";
// import { AxiosError } from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiSellerPostJoin } from "../../../services/api";
import { AxiosError } from "axios";

export const useJoinSellerQuery = () => {
  const navigate = useNavigate();
  const [errorSellerJoinMessage, setSellerErrorJoinMessage] = useState("");

  const { mutate: postSellerJoin, error } = useMutation(
    (joinData: IFormValue) => apiSellerPostJoin(joinData),
    {
      onError: (error: any | AxiosError) => {
        setSellerErrorJoinMessage(error?.response?.data.store_name[0]);
      },
      onSuccess: () => {
        navigate("/login");
      },
    }
  );

  return { postSellerJoin, errorSellerJoinMessage };
};
