import * as S from "./style";
import { PriceCommaText } from "../../text";

function OrderListItem({ checkItem, orderItems }: any) {
  const { image, store_name, product_name, shipping_fee, price } = checkItem;
  return (
    <div>
      <S.ProductBox>
        <S.InfoBox>
          <S.Img src={image} alt="상품이미지" />
          <div>
            <S.StoreName>{store_name}</S.StoreName>
            <S.ProductName>{product_name}</S.ProductName>
            <S.ProductStock>수량 : {orderItems}개</S.ProductStock>
          </div>
        </S.InfoBox>

        <S.Shipping>
          {shipping_fee === 0 ? (
            <p>택배배송/무료배송</p>
          ) : (
            <PriceCommaText price={shipping_fee} />
          )}
        </S.Shipping>

        <S.Price>
          <PriceCommaText
            price={price}
            fontSize="18px"
            fontWeight="700"
            unitSize="18px"
            unitWeight="700"
          />
        </S.Price>
      </S.ProductBox>
    </div>
  );
}

export default OrderListItem;
