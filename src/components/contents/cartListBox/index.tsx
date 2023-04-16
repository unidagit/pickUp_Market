import Count from "../../count";
import { PriceCommaText } from "../../text";
import * as S from "./style";

function CartListBox({
  image,
  store_name,
  product_name,
  price,
  shipping_fee,
  stock,
  cart_item_id,
  handleSingleCheck,
  checkItems,
  handleSelectDelete,
  cartInfo,
}: any) {
  console.log(cart_item_id);
  return (
    <S.Wrapper>
      <S.CartInfoContainer>
        <div>
          <S.CheckInput
            type="checkbox"
            onChange={(e) =>
              handleSingleCheck(e.target.checked, cartInfo?.cart_item_id)
            }
            // 체크된 아이템 배열에 해당 아이템이 있을 경우 선택 활성화, 아닐 시 해제
            checked={checkItems.includes(cartInfo?.cart_item_id) ? true : false}
          />
        </div>
        <S.ProductBox>
          <S.Img src={image} alt="상품이미지" />
          <S.InfoBox>
            <S.StoreName>{store_name}</S.StoreName>
            <S.ProductName>{product_name}</S.ProductName>
            <PriceCommaText
              price={price}
              fontSize="16px"
              fontWeight="700"
              unitSize="16px"
              unitWeight="700"
            />
            <S.Shipping>
              {shipping_fee === 0 ? (
                <p>택배배송/무료배송</p>
              ) : (
                <PriceCommaText price={shipping_fee} />
              )}
            </S.Shipping>
          </S.InfoBox>
        </S.ProductBox>
        <S.Edit>
          <Count
            count={cartInfo?.quantity}
            // setCount={setCount}
            // userType={userType}
            stock={stock}
            // handleMinus={handleMinus}
            // handleAdd={handleAdd}
          />
        </S.Edit>
        <S.SumPrice>
          <PriceCommaText
            price={cartInfo?.quantity * price + shipping_fee}
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

export default CartListBox;
