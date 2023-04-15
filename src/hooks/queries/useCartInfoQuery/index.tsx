import { useQuery } from "@tanstack/react-query";
import { apiGetCartInfo } from "../../../services/api";

export default function useCartInfoQuery(cart_item_id: number) {
  const { data: cartInfo, isLoading } = useQuery(
    ["cartList", cart_item_id],
    () => apiGetCartInfo(cart_item_id)
  );
  return { cartInfo, isLoading };
}
