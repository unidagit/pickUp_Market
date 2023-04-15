import useCartDetailQuery from "../../../hooks/queries/useCartDetailQuery";
import useCartInfoQuery from "../../../hooks/queries/useCartInfoQuery";
import { PriceCommaText } from "../../text";
import * as S from "./style";

function CartListBox({
  product_id,
  cart_item_id,
  handleSingleCheck,
  checkItems,
}: {
  product_id: number;
  cart_item_id: number;
  handleSingleCheck: (checked: boolean, id: number) => void;
  checkItems: number[];
}) {
  const { cartDetail } = useCartDetailQuery(product_id); //상품가격, 이미지
  const { cartInfo } = useCartInfoQuery(cart_item_id); //구매하고 싶은 수량

  return (
    <S.Wrapper>
      <S.CartInfoContainer>
        <div>
          <S.CheckInput
            type="checkbox"
            onChange={(e) => handleSingleCheck(e.target.checked, cart_item_id)}
            // 체크된 아이템 배열에 해당 아이템이 있을 경우 선택 활성화, 아닐 시 해제
            checked={checkItems.includes(cart_item_id) ? true : false}
          />
        </div>
        <S.ProductBox>
          <S.Img src={cartDetail?.image} alt="상품이미지" />
          <S.InfoBox>
            <S.StoreName>{cartDetail?.store_name}</S.StoreName>
            <S.ProductName>{cartDetail?.product_name}</S.ProductName>
            <PriceCommaText
              price={cartDetail?.price}
              fontSize="16px"
              fontWeight="700"
              unitSize="16px"
              unitWeight="700"
            />
            <S.Shipping>
              {cartDetail?.shipping_fee === 0 ? (
                <p>택배배송/무료배송</p>
              ) : (
                <PriceCommaText price={cartDetail?.shipping_fee} />
              )}
            </S.Shipping>
          </S.InfoBox>
        </S.ProductBox>
        <S.Edit>{cartInfo?.quantity}</S.Edit>
        <S.SumPrice>
          <PriceCommaText
            price={
              cartInfo?.quantity * cartDetail?.price + cartDetail?.shipping_fee
            }
            fontSize="18px"
            fontWeight="700"
            fontColor="#EB5757"
            unitSize="18px"
            unitWeight="700"
            unitColor="#EB5757"
          />
        </S.SumPrice>
      </S.CartInfoContainer>
    </S.Wrapper>
  );
}

export default CartListBox;
