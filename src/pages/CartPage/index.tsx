import React, { useState } from "react";
import { DefaultLayout } from "../_layouts";
import * as S from "./style";
import CartListBox from "../../components/contents/cartListBox";
import useCartListQuery from "../../hooks/queries/useCartListQuery";
import Spinner from "../../components/spinner";
import { ICartList } from "../../common/types";
import Button from "../../components/atoms/buttons";
import useCartAllDeleteQuery from "../../hooks/mutations/useCartAllDeleteQuery";
import useCartSelectQuery from "../../hooks/mutations/useCartSelectQuery";

function CartPage() {
  const { cartList, isLoading } = useCartListQuery();
  const [checkItems, setCheckItems] = useState<number[]>([]);
  const { deleteCart } = useCartAllDeleteQuery();
  const { deleteSelectCart } = useCartSelectQuery();

  // 체크박스 전체 선택
  const handleAllCheck = (checked: boolean) => {
    if (checked) {
      // 전체 선택 클릭 시 데이터의 모든 아이템(id)를 담은 배열로 checkItems 상태 업데이트
      const idArray: number[] = [];
      cartList?.results.forEach((el: ICartList) =>
        idArray.push(el.cart_item_id)
      );
      setCheckItems(idArray);
    } else {
      // 전체 선택 해제 시 checkItems 를 빈 배열로 상태 업데이트
      setCheckItems([]);
    }
  };

  // 체크박스 단일 선택
  const handleSingleCheck = (checked: boolean, id: number) => {
    if (checked) {
      // 단일 선택 시 체크된 아이템을 배열에 추가
      setCheckItems((prev) => [...prev, id]);
    } else {
      // 단일 선택 해제 시 체크된 아이템을 제외한 배열 (필터)
      setCheckItems(checkItems.filter((el) => el !== id));
    }
  };

  //전체상품 삭제
  const handleAllDelete = () => {
    deleteCart();
  };

  //상품개별 삭제
  const handleSelectDelete = (itemId: number) => {
    deleteSelectCart(itemId);
    console.log(itemId);
  };

  return (
    <DefaultLayout>
      <S.Wrapper>
        <S.MainTitle>장바구니</S.MainTitle>

        <S.ProductTableBox>
          <S.ProductTable>
            <S.CheckInput
              type="checkbox"
              onChange={(e) => handleAllCheck(e.target.checked)}
              checked={
                checkItems.length === cartList?.results.length ? true : false
              }
            />
            <S.Info>상품정보</S.Info>
            <S.Edit>수량</S.Edit>
            <S.Price>상품금액</S.Price>
          </S.ProductTable>

          {cartList?.count === 0 ? (
            <S.CartCountText>장바구니에 담긴 상품이 없습니다.</S.CartCountText>
          ) : (
            cartList?.results.map((item: ICartList) => (
              <S.CartListContainer key={item.product_id}>
                <CartListBox
                  product_id={item.product_id}
                  cart_item_id={item.cart_item_id}
                  handleSingleCheck={handleSingleCheck}
                  checkItems={checkItems}
                  handleSelectDelete={handleSelectDelete}
                />
              </S.CartListContainer>
            ))
          )}

          {isLoading || (!cartList && <Spinner />)}

          {cartList?.count === 0 ? null : (
            <Button
              width="200px"
              fontColor="#000000"
              backgroundColor="#ffff"
              border="1px solid #767676"
              onClick={handleAllDelete}
            >
              전체상품 삭제
            </Button>
          )}
        </S.ProductTableBox>
      </S.Wrapper>
    </DefaultLayout>
  );
}

export default CartPage;
