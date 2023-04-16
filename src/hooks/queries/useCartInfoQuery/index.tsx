import { useQueries } from "@tanstack/react-query";
import { apiGetCartInfo } from "../../../services/api";
import { ICartList } from "../../../common/types";

export default function useCartInfoQuery({ cartList }: any) {
  const cartInfo = useQueries({
    queries:
      cartList === undefined || null
        ? []
        : cartList?.results.map((el: ICartList) => {
            console.log(el.cart_item_id);
            return {
              queryKey: ["cartInfo", el.cart_item_id],
              queryFn: () => apiGetCartInfo(el.cart_item_id),
            };
          }),
  });

  return { cartInfo };
}
