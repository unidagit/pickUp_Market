import { useQuery } from "@tanstack/react-query";
import { apiGetProductDetail } from "../../../services/api";

export default function useCartDetailQuery(product_id: number) {
  const { data: cartDetail, isLoading } = useQuery(
    ["cartDetail", product_id],
    () => apiGetProductDetail(product_id)
  );
  return { cartDetail, isLoading };
}
