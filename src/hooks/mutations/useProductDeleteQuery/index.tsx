import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiDeleteSellerProduct } from "../../../services/api";

export default function useProductDeleteQuery() {
  const queryClient = useQueryClient();

  const { mutate: deleteProduct } = useMutation(
    (product_id: number) => apiDeleteSellerProduct(product_id),
    {
      onSuccess: () => {
        alert("삭제하였습니다");
        queryClient.invalidateQueries(["sellerProducts"]);
      },
    }
  );

  return { deleteProduct };
}
