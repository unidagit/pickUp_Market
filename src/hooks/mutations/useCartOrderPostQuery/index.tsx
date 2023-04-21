import { useMutation } from "@tanstack/react-query";
import { apiCartOrderPost } from "../../../services/api";
import { useNavigate } from "react-router-dom";

export default function useCartOrderPostQuery() {
  const navigate = useNavigate();
  const { mutate: cartOrder } = useMutation(
    (OrderData: any) => apiCartOrderPost(OrderData),
    {
      onSuccess() {
        alert("주문이 완료되었습니다 :)");
        navigate("/");
      },
      onError(error: Error) {
        alert(error.message);
      },
    }
  );

  return { cartOrder };
}
