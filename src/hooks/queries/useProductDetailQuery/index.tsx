import { useQuery } from "@tanstack/react-query";
import { IProductBox } from "../../../common/types/api";
import { apiGetProductDetail } from "../../../services/api";
import { useParams } from "react-router-dom";

export const useProductDetailQuery = () => {
  const { id } = useParams();
  const productId = String(id);
  const {
    data: productDetail,
    isLoading,
    isError,
    error,
  } = useQuery<IProductBox>(["productId", productId], () =>
    apiGetProductDetail(productId)
  );

  return { productDetail, isLoading, isError, error };
};
