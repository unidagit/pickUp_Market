import { useQuery } from "@tanstack/react-query";
import { apiGetSellerProducts } from "../../../services/api";
import { IProductBox } from "../../../common/types/api";

export default function useSellerProductListQuery() {
  const {
    data: sellerProductList,
    isLoading,
    isError,
    error,
  } = useQuery<IProductBox[]>(["sellerProducts"], () => apiGetSellerProducts());

  return { sellerProductList, isLoading, isError, error };
}
