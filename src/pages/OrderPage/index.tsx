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
    orderItems,
    orderCheckItems,
    cartItemTotalPrice,
    cartItemFee,
    orderType,
  } = state;
  const [selectedOption, setSelectedOption] = useState("");
  const [cartProductId, setCartProductId] = useState("");
  const [cartQuantity, setCartQuantity] = useState("");

  console.log(orderCheckItems.product_id);

  const { cartOrder } = useCartOrderPostQuery();

  // const {
  //   formState: { isValid, errors },
  // } = useForm({ mode: "onChange" });

  //폼제출
  const handleSubmit = (data: any) => {
    if (orderType === "direct_order") {
      setCartProductId(orderCheckItems.product_id);
      setCartQuantity(orderItems);
    } else {
      setCartProductId(orderCheckItems.map((item: any) => item.product_id));
      setCartQuantity(orderItems.results.map((item: any) => item.quantity));
    }

    const OrderData = {
      ...data,
      product_id: cartProductId,
      quantity: cartQuantity,
      payment_method: selectedOption,
      total_price: cartItemTotalPrice,
      order_kind: orderType,
    };
    cartOrder(OrderData);
    console.log(OrderData);
    //   product_id , quantity,selectedOption,total_price
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
              orderItems={orderItems.results}
              orderCheckItems={orderCheckItems}
              cartItemTotalPrice={cartItemTotalPrice}
              cartItemFee={cartItemFee}
            />
          ) : (
            <>
              <OrderOneListBox
                orderItems={orderItems}
                orderCheckItems={orderCheckItems}
                cartItemTotalPrice={cartItemTotalPrice}
                cartItemFee={cartItemFee}
              />
            </>
          )}
        </S.ProductTableBox>

        <ShippingInfoBox
          cartItemTotalPrice={cartItemTotalPrice}
          cartItemFee={cartItemFee}
          handlePayCheck={handlePayCheck}
          selectedOption={selectedOption}
          onSubmit={handleSubmit}
        />
      </S.Wrapper>
    </DefaultLayout>
  );
}

export default OrderPage;
