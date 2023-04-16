import { useQueries, useQuery } from "@tanstack/react-query";
import { apiGetCartList, apiGetProductDetail } from "../../../services/api";
import { ICartList } from "../../../common/types";

export default function useCartListQuery() {
  //장바구니 목록가져오기.
  const { data: cartList, isLoading } = useQuery(["cartList"], () =>
    apiGetCartList()
  );

  //장바구니 목록에서 product_id 빼서 상세정보 가져오기.
  const cartDetail = useQueries({
    queries:
      cartList === undefined || null
        ? []
        : cartList.results.map((el: ICartList) => {
            return {
              queryKey: ["cartDetail", el.product_id],
              queryFn: () => apiGetProductDetail(el.product_id),
            };
          }),
  });

  return { cartList, isLoading, cartDetail };
}
