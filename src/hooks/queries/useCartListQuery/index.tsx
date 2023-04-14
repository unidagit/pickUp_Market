import { useQuery } from "@tanstack/react-query";
import { apiGetCartList } from "../../../services/api";

export default function useCartListQuery() {
  const { data: cartList } = useQuery(["cartList"], () => apiGetCartList());
  return { cartList };
}
