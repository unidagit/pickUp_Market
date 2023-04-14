import React from "react";
import { DefaultLayout } from "../_layouts";
import * as S from "./style";
import { CheckInput } from "../../components/inputs";
import CartListBox from "../../components/contents/cartListBox";
import useCartListQuery from "../../hooks/queries/useCartListQuery";
import Spinner from "../../components/spinner";
import { ICartList } from "../../common/types";

function CartPage() {
  const { cartList, isLoading } = useCartListQuery();

  console.log(cartList);

  return (
    <DefaultLayout>
      <S.Wrapper>
        <S.MainTitle>장바구니</S.MainTitle>

        <S.ProductTableBox>
          <S.ProductTable>
            <CheckInput />
            <S.Info>상품정보</S.Info>
            <S.Edit>수량</S.Edit>
            <S.Price>상품금액</S.Price>
          </S.ProductTable>

          {cartList.count === 0 ? (
            <S.CartCountText>장바구니에 담긴 상품이 없습니다.</S.CartCountText>
          ) : (
            cartList.results.map((item: ICartList) => (
              <>
                <CartListBox
                  key={item.product_id}
                  product_id={item.product_id}
                />
              </>
            ))
          )}

          {isLoading || (!cartList && <Spinner />)}
        </S.ProductTableBox>
      </S.Wrapper>
    </DefaultLayout>
  );
}

export default CartPage;
