import { IProductResult } from "../../../common/types/api";
import { PriceCommaText } from "../../text";
import OrderListItem from "../orderListItem";
import * as S from "./style";

function OrderListBox({
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

      {orderCheckItems?.length === 0 ? (
        <S.OrderText>주문이 없습니다.</S.OrderText>
      ) : (
        orderCheckItems?.map((item: IProductResult, index: number) => (
          <S.OrderListContainer key={item.product_id}>
            <OrderListItem
              orderItems={orderItems[index].quantity} //수량있음
              cartItemFee={cartItemFee}
              checkItem={item} //장바구니에 담은 디테일정보
            />
          </S.OrderListContainer>
        ))
      )}
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

export default OrderListBox;
