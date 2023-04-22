import { useLocation } from "react-router-dom";
import OrderListBox from "../../components/contents/orderListBox";
import { DefaultLayout } from "../_layouts";
import * as S from "./style";
import Spinner from "../../components/spinner";
import ShippingInfoBox from "../../components/contents/shippingInfoBox";
import { useState } from "react";
import useCartOrderPostQuery from "../../hooks/mutations/useCartOrderPostQuery";
import OrderOneListBox from "../../components/contents/orderOneListBox";

function OrderPage() {
  const { state } = useLocation();
  const {
    orderCheckItems,
    cartItemPrice,
    cartItemFee,
    orderType,
    cartQuantity,
  } = state;
  const [selectedOption, setSelectedOption] = useState("");

  const { cartOrder } = useCartOrderPostQuery();

  //폼제출
  const handleSubmit = (data: any) => {
    let cartProductId, quantity, totalPrice;
    if (orderType === "direct_order" && orderCheckItems && cartQuantity) {
      cartProductId = orderCheckItems.product_id;
      quantity = cartQuantity;
      totalPrice = cartItemPrice * cartQuantity + cartItemFee;
    } else if (orderType === "cart_order" && orderCheckItems && cartQuantity) {
      cartProductId = orderCheckItems.map((item: any) => item.product_id);
      quantity = cartQuantity.map((item: any) => item.quantity);
      totalPrice = cartItemPrice + cartItemFee;
    } else if (orderType === "cart_one_order") {
      cartProductId = orderCheckItems[0].product_id;
      quantity = cartQuantity[0];
      totalPrice = cartItemPrice + cartItemFee;
      console.log(totalPrice);
    } else {
      console.error("Invalid order information");
      return;
    }

    const OrderData = {
      ...data,
      product_id: cartProductId,
      quantity: quantity,
      payment_method: selectedOption,
      total_price: totalPrice,
      order_kind: orderType,
    };
    cartOrder(OrderData);
  };

  const handlePayCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value);
  };

  return (
    <DefaultLayout>
      <S.Wrapper>
        <S.ProductTableBox>
          <S.MainTitle>주문/결제하기</S.MainTitle>
          {!state && <Spinner />}

          {orderType !== "direct_order" ? (
            <OrderListBox
              cartQuantity={cartQuantity}
              orderCheckItems={orderCheckItems}
              cartItemPrice={cartItemPrice}
              cartItemFee={cartItemFee}
            />
          ) : (
            <>
              <OrderOneListBox
                cartQuantity={cartQuantity}
                orderCheckItems={orderCheckItems}
                cartItemPrice={cartItemPrice}
                cartItemFee={cartItemFee}
              />
            </>
          )}
        </S.ProductTableBox>

        <ShippingInfoBox
          cartQuantity={cartQuantity}
          cartItemPrice={cartItemPrice}
          cartItemFee={cartItemFee}
          handlePayCheck={handlePayCheck}
          selectedOption={selectedOption}
          onSubmit={handleSubmit}
          orderType={orderType}
        />
      </S.Wrapper>
    </DefaultLayout>
  );
}

export default OrderPage;
