import * as S from "./style";
import { useProductDetailQuery } from "../../../hooks/queries/useProductDetailQuery";
import Spinner from "../../../components/spinner";
import { DefaultLayout } from "../../_layouts";
import Count from "../../../components/count";
import { useState } from "react";
import { PriceCommaText } from "../../../components/text";
import Button from "../../../components/atoms/buttons";

function ProductDetailPage() {
  const [count, setCount] = useState(1);
  const { productDetail, isLoading } = useProductDetailQuery();
  const userType = localStorage.getItem("user_type");

  // if (isLoading) return <Spinner />;

  const handleBuy = () => {
    if (userType === "SELLER") {
      alert("판매자는 구매할 수 없습니다.");
      return;
    }
  };

  const handleCart = () => {
    if (userType === "SELLER") {
      alert("판매자는 구매할 수 없습니다.");
      return;
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
              <S.Line></S.Line>
              <Count count={count} setCount={setCount} userType={userType} />
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
                  price={productDetail.price}
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
