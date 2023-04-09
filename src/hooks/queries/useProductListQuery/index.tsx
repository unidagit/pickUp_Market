import { useQuery } from "@tanstack/react-query";
import { apiGetProducts } from "../../../services/api";
import { IProductBox } from "../../../common/types/api";

export const useProductListQuery = () => {
  const {
    data: productsList,
    isLoading,
    isError,
    error,
  } = useQuery<IProductBox[]>(["products"], () => apiGetProducts());

  return { productsList, isLoading, isError, error };
};
