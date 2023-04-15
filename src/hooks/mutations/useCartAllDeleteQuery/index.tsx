import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiDeleteBuyerCart } from "../../../services/api";

export default function useCartAllDeleteQuery() {
  const queryClient = useQueryClient();

  const { mutate: deleteCart } = useMutation(() => apiDeleteBuyerCart(), {
    onSuccess: () => {
      alert("삭제하였습니다");
      queryClient.invalidateQueries(["cartList"]);
    },
  });
  return { deleteCart };
}
