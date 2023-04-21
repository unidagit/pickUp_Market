import { PriceCommaText } from "../../text";
import OrderListItem from "../orderListItem";
import * as S from "./style";

function OrderOneListBox({
  orderItems,
  orderCheckItems,
  cartItemTotalPrice,
  cartItemFee,
}: any) {
  console.log(orderCheckItems);
  return (
    <>
      <S.ProductTable>
        <S.TableText>상품정보</S.TableText>
        <S.TableText>배송비</S.TableText>
        <S.TableText>주문금액</S.TableText>
      </S.ProductTable>

      <S.OrderListContainer>
        <OrderListItem
          orderItems={orderItems} //수량있음
          cartItemFee={cartItemFee}
          checkItem={orderCheckItems} //장바구니에 담은 디테일정보
        />
      </S.OrderListContainer>

      <S.TotalPrice>
        <S.PriceText>총 주문금액</S.PriceText>
        <PriceCommaText
          price={cartItemTotalPrice}
          fontSize="1.5rem"
          fontWeight="700"
          fontColor="
          #EB5757"
          unitColor="
          #EB5757"
          unitSize="1.5rem"
          unitWeight="700"
        />
      </S.TotalPrice>
    </>
  );
}

export default OrderOneListBox;
