import Checkbox from "../../checkBox";
import Count from "../../count";
import { PriceCommaText } from "../../text";
import * as S from "./style";

function CartListItem({
  cartDetailData,
  handleSingleCheck,
  checkItems,
  handleSelectDelete,
  cartInfo,
}: any) {
  return (
    <S.Wrapper>
      <S.CartInfoContainer>
        <div>
          <Checkbox
            text=""
            onChange={(e: any) =>
              handleSingleCheck(
                e.target.checked,
                cartDetailData,
                cartInfo?.quantity
              )
            }
            // 체크된 아이템 배열에 해당 아이템이 있을 경우 선택 활성화, 아닐 시 해제
            checked={checkItems.includes(cartDetailData) ? true : false}
          />
        </div>
        <S.ProductBox>
          <S.Img src={cartDetailData?.image} alt="상품이미지" />
          <S.InfoBox>
            <S.StoreName>{cartDetailData?.store_name}</S.StoreName>
            <S.ProductName>{cartDetailData?.product_name}</S.ProductName>
            <PriceCommaText
              price={cartDetailData?.price}
              fontSize="16px"
              fontWeight="700"
              unitSize="16px"
              unitWeight="700"
            />
            <S.Shipping>
              {cartDetailData?.shipping_fee === 0 ? (
                <p>택배배송/무료배송</p>
              ) : (
                <PriceCommaText price={cartDetailData?.shipping_fee} />
              )}
            </S.Shipping>
          </S.InfoBox>
        </S.ProductBox>
        <S.Edit>
          <Count
            count={cartInfo?.quantity}
            // setCount={setCount}
            // userType={userType}
            stock={cartDetailData?.stock}
            // handleMinus={handleMinus}
            // handleAdd={handleAdd}
          />
        </S.Edit>
        <S.SumPrice>
          {cartInfo && cartDetailData && (
            <PriceCommaText
              price={cartInfo.quantity * cartDetailData.price}
              fontSize="18px"
              fontWeight="700"
              fontColor="#EB5757"
              unitSize="18px"
              unitWeight="700"
              unitColor="#EB5757"
            />
          )}
        </S.SumPrice>
        <S.CloseIcon
          onClick={() =>
            handleSelectDelete(
              cartInfo?.cart_item_id,
              cartInfo?.quantity,
              cartDetailData?.shipping_fee,
              cartDetailData?.price
            )
          }
        />
      </S.CartInfoContainer>
    </S.Wrapper>
  );
}

export default CartListItem;
