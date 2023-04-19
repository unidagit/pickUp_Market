import Count from "../../count";
import { PriceCommaText } from "../../text";
import * as S from "./style";

function CartListItem({
  data,
  handleSingleCheck,
  checkItems,
  handleSelectDelete,
  cartInfo,
}: any) {
  console.log(cartInfo);
  return (
    <S.Wrapper>
      <S.CartInfoContainer>
        <div>
          <S.CheckInput
            type="checkbox"
            onChange={(event) => handleSingleCheck(event, data)}
            // 체크된 아이템 배열에 해당 아이템이 있을 경우 선택 활성화, 아닐 시 해제
            checked={checkItems.includes(data) ? true : false}
          />
        </div>
        <S.ProductBox>
          <S.Img src={data?.image} alt="상품이미지" />
          <S.InfoBox>
            <S.StoreName>{data?.store_name}</S.StoreName>
            <S.ProductName>{data?.product_name}</S.ProductName>
            <PriceCommaText
              price={data?.price}
              fontSize="16px"
              fontWeight="700"
              unitSize="16px"
              unitWeight="700"
            />
            <S.Shipping>
              {data?.shipping_fee === 0 ? (
                <p>택배배송/무료배송</p>
              ) : (
                <PriceCommaText price={data?.shipping_fee} />
              )}
            </S.Shipping>
          </S.InfoBox>
        </S.ProductBox>
        <S.Edit>
          <Count
            count={cartInfo?.quantity}
            // setCount={setCount}
            // userType={userType}
            stock={data?.stock}
            // handleMinus={handleMinus}
            // handleAdd={handleAdd}
          />
        </S.Edit>
        <S.SumPrice>
          <PriceCommaText
            price={
              cartInfo
                ? cartInfo.quantity * data?.price + data?.shipping_fee
                : ""
            }
            fontSize="18px"
            fontWeight="700"
            fontColor="#EB5757"
            unitSize="18px"
            unitWeight="700"
            unitColor="#EB5757"
          />
        </S.SumPrice>
        <S.CloseIcon
          onClick={() => handleSelectDelete(cartInfo?.cart_item_id)}
        />
      </S.CartInfoContainer>
    </S.Wrapper>
  );
}

export default CartListItem;
