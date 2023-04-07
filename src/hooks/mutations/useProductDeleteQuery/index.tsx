import { useMutation } from "@tanstack/react-query";
import { apiDeleteSellerProduct } from "../../../services/api";

export default function useProductDeleteQuery() {
  const { mutate: deleteProduct } = useMutation(
    (product_id: number) => apiDeleteSellerProduct(product_id),
    {
      onSuccess: () => {
        alert("삭제하였습니다");
      },
    }
  );

  return { deleteProduct };
}
