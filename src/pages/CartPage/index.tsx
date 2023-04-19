import React, { useState } from "react";
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

function CartPage() {
  const navigate = useNavigate();
  const { cartList, isLoading, cartDetail } = useCartListQuery();
  const [checkItems, setCheckItems] = useState<number[]>([]);
  const { deleteCart } = useCartAllDeleteQuery();
  const { deleteSelectCart } = useCartSelectQuery();
  const [cartItemPayPrice, setCartItemPayPrice] = useState(0);
  const [cartItemFee, setCartItemFee] = useState(0);
  const [cartItemTotalPrice, setCartItemTotalPrice] = useState(0);
  const { cartInfo } = useCartInfoQuery({ cartList }); //구매하고 싶은 수량 리스트에서 호출하고 받은 cart_item_id 보내서 productId 받아옴.

  const cartTotalInfo = (
    totalPrice: number,
    shippingFee: number,
    payPrice: number,
    type: string
  ) => {
    if (type === "all") {
      setCartItemTotalPrice((prev) => prev + totalPrice);
      setCartItemFee((prev) => prev + shippingFee);
      setCartItemPayPrice((prev) => prev + payPrice);
    } else if (type === "plus") {
      setCartItemTotalPrice((prev) => prev + totalPrice);
      setCartItemFee((prev) => prev + shippingFee);
      setCartItemPayPrice((prev) => prev + payPrice);
    } else if (type === "minus") {
      setCartItemTotalPrice((prev) => prev - totalPrice);
      setCartItemFee((prev) => prev - shippingFee);
      setCartItemPayPrice((prev) => prev - payPrice);
    } else if (type === "reset") {
      setCartItemTotalPrice(0);
      setCartItemFee(0);
      setCartItemPayPrice(0);
    }
  };

  // 체크박스 전체 선택
  const handleAllCheck = (checked: boolean) => {
    if (checked) {
      const checkedArr: any = []; //디테일정보
      cartDetail?.map((el: any) => checkedArr.push(el.data));

      const cartInfoArr: any = []; //수량정보 caerInfo
      cartInfo?.map((el: any) => cartInfoArr.push(el.data));

      console.log(checkedArr);
      console.log(cartInfoArr);

      for (let i = 0; i < cartInfoArr?.length; i++) {
        for (let j = 0; j < checkedArr.length; j++) {
          if (cartInfoArr[i].product_id === checkedArr[j].product_id) {
            const totalPrice = checkedArr[j].price * cartInfoArr[i].quantity;
            const shippingFee = checkedArr[j].shipping_fee;
            const payPrice =
              checkedArr[j].price * cartInfoArr[i].quantity +
              checkedArr[j].shipping_fee;
            cartTotalInfo(totalPrice, shippingFee, payPrice, "all");
          }
        }
      }

      setCheckItems(checkedArr);
      // 모든 체크박스 선택 상태로 변경
    } else {
      // 전체 선택 해제 시 checkItems 를 빈 배열로 상태 업데이트
      setCheckItems([]);
      cartTotalInfo(0, 0, 0, "reset");
    }
  };

  // 체크박스 단일 선택
  const handleSingleCheck = (
    event: React.ChangeEvent<HTMLInputElement>,
    data: any
  ) => {
    const cartInfoArr: any[] = []; //수량정보 caerInfo
    cartInfo?.map((el: any) => cartInfoArr.push(el.data));

    const checkData = cartInfoArr?.find(
      (item: { product_id: number }) => item.product_id === data.product_id
    );

    const totalPrice = data.price * checkData.quantity;
    const shippingFee = data.shipping_fee;
    const payPrice = data.price * checkData.quantity + data.shipping_fee;

    if (event.target.checked) {
      cartTotalInfo(totalPrice, shippingFee, payPrice, "plus");
      setCheckItems((prev) => [...prev, data]);
      console.log(checkItems);
    } else {
      cartTotalInfo(totalPrice, shippingFee, payPrice, "minus");
      setCheckItems(
        checkItems.filter((el: any) => el.product_id !== data.product_id)
      );
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

  const handleOrder = () => {
    navigate(`/order`, {
      state: { checkItems, cartItemTotalPrice, cartItemFee },
    });
  };

  return (
    <DefaultLayout>
      <S.Wrapper>
        <S.MainTitle>장바구니</S.MainTitle>
        <S.ProductTableBox>
          {isLoading || !cartList || !cartInfo ? (
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
