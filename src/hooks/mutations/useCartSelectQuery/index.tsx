import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiDeleteBuyerSelectCart } from "../../../services/api";

export default function useCartSelectQuery() {
  const queryClient = useQueryClient();

  const { mutate: deleteSelectCart } = useMutation(
    (cart_item_id: number) => apiDeleteBuyerSelectCart(cart_item_id),
    {
      onSuccess: () => {
        alert("삭제하였습니다");
        queryClient.invalidateQueries(["cartList"]);
      },
    }
  );

  return { deleteSelectCart };
}
