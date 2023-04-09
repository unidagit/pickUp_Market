import { useMutation } from "@tanstack/react-query";

import { apiPostSellerProducts } from "../../../services/api";
import { useNavigate } from "react-router-dom";
import { FieldValues } from "react-hook-form";

export default function useProductUploadQuery() {
  const navigate = useNavigate();

  const { mutate: postProduct } = useMutation(
    (formData: FieldValues) => apiPostSellerProducts(formData),
    {
      onSuccess: (data) => {
        navigate("/");
      },
    }
  );

  return { postProduct };
}
