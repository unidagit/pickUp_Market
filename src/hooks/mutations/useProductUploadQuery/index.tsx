import { useMutation } from "@tanstack/react-query";

import { IProducts } from "../../../common/types/api";
import { apiPostSellerProducts } from "../../../services/api";
import { useNavigate } from "react-router-dom";

export default function useProductUploadQuery() {
  const navigate = useNavigate();

  const { mutate: postProduct } = useMutation(
    (newProduct: IProducts) => apiPostSellerProducts(newProduct),
    {
      onSuccess: (data) => {
        navigate("/");
      },
    }
  );

  return { postProduct };
}
