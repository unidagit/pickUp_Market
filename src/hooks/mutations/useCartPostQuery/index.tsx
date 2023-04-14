import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiPostCart } from "../../../services/api";

export const useCartPostQuery = () => {
  const queryClient = useQueryClient();

  const { mutate: postCartList } = useMutation(
    (data: {
      product_id: number | undefined;
      quantity: number;
      check: boolean;
    }) => apiPostCart(data),
    {
      onSuccess() {
        alert("장바구니에 추가되었습니다.");
        queryClient.invalidateQueries(["cartList"]);
      },
    }
  );

  return { postCartList };
};
