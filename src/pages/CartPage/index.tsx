import React, { useState, useEffect, useCallback } from "react";
import { DefaultLayout } from "../_layouts";
import * as S from "./style";
import useCartListQuery from "../../hooks/queries/useCartListQuery";
import Button from "../../components/atoms/buttons";
import useCartAllDeleteQuery from "../../hooks/mutations/useCartAllDeleteQuery";
import useCartSelectQuery from "../../hooks/mutations/useCartSelectQuery";
import useCartInfoQuery from "../../hooks/queries/useCartInfoQuery";
import { useNavigate } from "react-router-dom";
import CartListBox from "../../components/contents/cartListBox";
import Spinner from "../../components/spinner";
import { IProductResult } from "../../common/types/api";

function CartPage() {
  const navigate = useNavigate();
  const { cartList, isLoading, cartDetail } = useCartListQuery();
  const [checkItems, setCheckItems] = useState<IProductResult[]>([]);
  const { deleteCart } = useCartAllDeleteQuery();
  const { deleteSelectCart } = useCartSelectQuery();
  const [cartItemPayPrice, setCartItemPayPrice] = useState(0);
  const [cartItemFee, setCartItemFee] = useState(0);
  const { cartInfo } = useCartInfoQuery({ cartList });

  const [isCheck, setIsCheck] = useState(false);

  //결제예정 금액
  const cartItemTotalPrice = cartItemPayPrice + cartItemFee;

  const handleCheckItem = useCallback(
    (checked: boolean, data: IProductResult, quantity: number) => {
      if (checked) {
        setCheckItems([...checkItems, data]);
        setCartItemPayPrice((pre) => pre + data.price * quantity);
        setCartItemFee((pre) => pre + data.shipping_fee);
      } else {
        setCheckItems(checkItems.filter((el) => el !== data));
        setCartItemPayPrice((pre) => pre - data.price * quantity);
        setCartItemFee((pre) => pre - data.shipping_fee);
      }
    },
    [checkItems]
  );

  // 체크박스 전체 선택
  const handleAllCheck = useCallback(
    (checked: boolean) => {
      if (checked) {
        //처음에 초기화
        setCheckItems([]);
        //아이템담기
        const items = cartDetail.map((item) => item.data) as IProductResult[];
        setCheckItems(items);
        //전체 체크버튼 활성화
        setIsCheck(true);
        //수량구하기
        const cartInfoId = cartInfo.map((item: any) => item.data.quantity);
        //상품금액 * 수량
        const allPrice = cartDetail.reduce(
          (pre, item: any, index) => pre + item.data.price * cartInfoId[index],
          0
        );
        setCartItemPayPrice(allPrice);
        //배송비
        const fee = cartDetail.reduce(
          (pre, item: any) => pre + item.data.shipping_fee,
          0
        );
        setCartItemFee(fee);
        setCheckItems(items);
      } else {
        setCheckItems([]);
        setIsCheck(false);
        setCartItemPayPrice(0);
        setCartItemFee(0);
      }
    },
    [cartDetail, cartInfo]
  );

  useEffect(() => {
    if (cartList?.count === checkItems.length) {
      setIsCheck(true);
    } else {
      setIsCheck(false);
    }
  }, [checkItems.length, cartList?.count]);

  // 체크박스 단일 선택
  const handleSingleCheck = (
    checked: boolean,
    data: IProductResult,
    quantity: number
  ) => {
    handleCheckItem(checked, data, quantity);
  };

  //전체상품 삭제
  const handleAllDelete = () => {
    deleteCart();
    setCartItemPayPrice(0);
    setCartItemFee(0);
    setIsCheck(false);
  };

  //상품개별 삭제
  const handleSelectDelete = (
    itemId: number,
    price: number,
    shippingFee: number,
    quantity: number
  ) => {
    deleteSelectCart(itemId);
    setCartItemPayPrice(cartItemPayPrice - price * quantity);
    setCartItemFee(cartItemFee - shippingFee);
  };

  const handleOrder = () => {
    navigate(`/order`, {
      state: {
        orderItems: cartList,
        orderCheckItems: checkItems,
        cartItemTotalPrice: cartItemTotalPrice,
        cartItemFee: cartItemFee,
      },
    });
  };

  return (
    <DefaultLayout>
      <S.Wrapper>
        <S.MainTitle>장바구니</S.MainTitle>
        <S.ProductTableBox>
          {isLoading ? (
            <Spinner />
          ) : (
            <CartListBox
              handleAllDelete={handleAllDelete}
              handleSelectDelete={handleSelectDelete}
              handleSingleCheck={handleSingleCheck}
              handleAllCheck={handleAllCheck}
              cartList={cartList}
              cartDetail={cartDetail}
              cartInfo={cartInfo}
              checkItems={checkItems}
              cartItemPayPrice={cartItemPayPrice}
              cartItemFee={cartItemFee}
              cartItemTotalPrice={cartItemTotalPrice}
              isCheck={isCheck}
            />
          )}
          <S.BtnBox>
            <Button width="220px" onClick={handleOrder}>
              주문하기
            </Button>
          </S.BtnBox>
        </S.ProductTableBox>
      </S.Wrapper>
    </DefaultLayout>
  );
}

export default CartPage;
