import { useMutation } from "@tanstack/react-query";
import { apiEditSellerProduct } from "../../../services/api";
import { FieldValues } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function useProductEditQuery() {
  const navigate = useNavigate();
  const { mutate: editProduct } = useMutation(
    (data: { formData: FieldValues; product_id: number }) =>
      apiEditSellerProduct(data),
    {
      onSuccess: () => {
        navigate("/");
      },
    }
  );

  return { editProduct };
}
