import * as S from "./style";
import { useProductDetailQuery } from "../../../hooks/queries/useProductDetailQuery";
import Spinner from "../../../components/spinner";
import { DefaultLayout } from "../../_layouts";
import Count from "../../../components/count";
import { useState } from "react";
import { PriceCommaText } from "../../../components/text";
import Button from "../../../components/atoms/buttons";
import { useNavigate } from "react-router-dom";
import { useCartPostQuery } from "../../../hooks/mutations/useCartPostQuery";
import useCartListQuery from "../../../hooks/queries/useCartListQuery";

function ProductDetailPage() {
  const navigate = useNavigate();
  const [count, setCount] = useState(1);
  const { productDetail, isLoading } = useProductDetailQuery();
  const userType = localStorage.getItem("user_type");
  const { postCartList } = useCartPostQuery();

  //cartList
  const { cartList } = useCartListQuery();

  // if (isLoading) return <Spinner />;

  //구매자인지 체크
  const userCheck = () => {
    if (userType === "SELLER") {
      alert("판매자는 구매할 수 없습니다.");
      return true;
    } else if (!userType) {
      navigate("/login");
      return true;
    }
    return false;
  };

  //cart에 해당상품이 담겨있는지 없는지 확인
  const cartCheck = () => {
    //productDetail.product_id
    for (let i = 0; i <= postCartList.length; i++) {
      if (cartList[i]?.product_id === productDetail?.product_id) {
        return false;
      }
    }
    return true;
  };
  // console.log(productDetail);

  //바로구매 버튼
  const handleBuy = () => {
    const userTypeCheck = userCheck();
    if (userTypeCheck === true) return;
    if (productDetail?.stock === 0) {
      alert("현재 품절상태입니다.");
      return;
    }
    if (productDetail) {
      navigate(`/order`, {
        state: {
          cartQuantity: count,
          orderCheckItems: productDetail,
          cartItemTotalPrice: productDetail?.price,
          cartItemFee: productDetail?.shipping_fee,
          orderType: "direct_order",
        },
      });
    }
  };

  //장바구니 버튼
  const handleCart = () => {
    const userTypeCheck = userCheck();

    if (userTypeCheck) {
      return;
    } else {
      const cartListCheck = cartCheck();

      //장바구니 중복 체크
      if (cartListCheck === false) {
        alert("장바구니에 있는 상품입니다.");
      } else if (cartListCheck === true) {
        //장바구니 api 호출
        postCartList({
          product_id: productDetail?.product_id,
          quantity: count,
          check: cartListCheck,
        });
      }
    }
  };

  //count
  const handleMinus = () => {
    if (userType === "SELLER") {
      alert("판매자는 구매할 수 없습니다.");
      return;
    }

    if (count > 1) {
      setCount(count - 1);
      return;
    }
  };

  const handleAdd = (stock: number) => {
    //seller 금지
    if (userType === "SELLER") {
      alert("판매자는 구매할 수 없습니다.");
      return;
    }

    if (stock > count && stock > 0) {
      setCount(count + 1);
      return;
    } else if (stock === 0) {
      alert("현재 품절입니다");
    }
  };

  return (
    <DefaultLayout>
      {isLoading || !productDetail ? (
        <Spinner />
      ) : (
        <S.Wrapper>
          <S.Img alt="상품이미지" src={productDetail.image} />
          <S.ProductBox>
            <S.StoreName>{productDetail.store_name}</S.StoreName>
            <S.ProductName>{productDetail.product_name}</S.ProductName>
            <S.PriceBox>
              <PriceCommaText
                fontSize="2.25rem"
                fontWeight="700"
                fontColor="black"
                price={productDetail.price}
                unitColor="
                #000000"
                unitSize="18px"
                unitHeight="10px"
              />
            </S.PriceBox>

            <S.NumberBox>
              <S.ParcelText>택배배송/ 무료배송</S.ParcelText>
              <S.ParcelText>재고 : {productDetail.stock}개</S.ParcelText>
              <S.Line></S.Line>

              <Count
                count={count}
                // setCount={setCount}
                // userType={userType}
                stock={productDetail.stock}
                handleMinus={handleMinus}
                handleAdd={handleAdd}
              />
              <S.Line></S.Line>
            </S.NumberBox>

            <S.TotalPriceBox>
              <S.Total>
                <S.TotalText>총 상품 금액</S.TotalText>
              </S.Total>
              <S.Box>
                <S.TotalCount>총 수량 {count}개</S.TotalCount>
                <PriceCommaText
                  fontSize="2.25rem"
                  fontWeight="700"
                  fontColor="#21BF48"
                  price={productDetail.price * count}
                  unitColor="
                  #21BF48"
                  unitSize="18px"
                  unitHeight="10px"
                />
              </S.Box>
            </S.TotalPriceBox>

            <S.ButtonBox>
              <Button type="submit" onClick={handleBuy}>
                바로구매
              </Button>

              <Button
                type="submit"
                backgroundColor="#767676"
                onClick={handleCart}
              >
                장바구니
              </Button>
            </S.ButtonBox>
          </S.ProductBox>
        </S.Wrapper>
      )}
    </DefaultLayout>
  );
}

export default ProductDetailPage;
