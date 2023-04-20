import { useLocation } from "react-router-dom";
import OrderListBox from "../../components/contents/orderListBox";
import { DefaultLayout } from "../_layouts";
import * as S from "./style";
import Spinner from "../../components/spinner";

function OrderPage() {
  const { state } = useLocation();
  const { orderItems, orderCheckItems, cartItemTotalPrice, cartItemFee } =
    state;

  return (
    <DefaultLayout>
      <S.Wrapper>
        <S.ProductTableBox>
          <S.MainTitle>주문/결제하기</S.MainTitle>
          {!state ? (
            <Spinner />
          ) : (
            <OrderListBox
              orderItems={orderItems.results}
              orderCheckItems={orderCheckItems}
              cartItemTotalPrice={cartItemTotalPrice}
              cartItemFee={cartItemFee}
            />
          )}
        </S.ProductTableBox>
      </S.Wrapper>
    </DefaultLayout>
  );
}

export default OrderPage;
