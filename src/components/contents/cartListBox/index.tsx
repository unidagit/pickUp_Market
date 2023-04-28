import Button from '../../buttons';
import Checkbox from '../../checkBox';
import { PriceCommaText } from '../../text';
import CartListItem from '../cartListItem';
import * as S from './style';
import { IoAddCircleOutline } from 'react-icons/io5';
import { TiEquals } from 'react-icons/ti';

function CartListBox({
  handleAllDelete,
  handleSelectDelete,
  handleSingleCheck,
  handleAllCheck,
  cartList,
  cartDetail,
  cartInfo,
  checkItems,
  cartItemPayPrice,
  cartItemFee,
  isCheck,
}: any) {
  return (
    <>
      <S.ProductTable>
        <Checkbox
          text=""
          onChange={(e: any) => handleAllCheck(e.target.checked)}
          checked={isCheck}
        />
        <S.TableText>상품정보</S.TableText>
        <S.TableText>수량</S.TableText>
        <S.TableText>상품금액</S.TableText>
      </S.ProductTable>

      {cartDetail?.length === 0 ? (
        <S.CartCountText>장바구니에 담긴 상품이 없습니다.</S.CartCountText>
      ) : (
        cartDetail?.map((item: any, index: number) => (
          <S.CartListContainer key={index}>
            <CartListItem
              cartDetailData={item.data}
              cartInfo={cartInfo?.[index].data}
              handleSingleCheck={handleSingleCheck}
              checkItems={checkItems}
              handleSelectDelete={handleSelectDelete}
            />
          </S.CartListContainer>
        ))
      )}

      {cartList?.count === 0 ? null : (
        <Button
          width="200px"
          fontColor="#000000"
          backgroundColor="#ffff"
          border="1px solid #767676"
          onClick={handleAllDelete}
        >
          전체상품 삭제
        </Button>
      )}

      <S.CartFinalPriceContainer>
        <S.PriceBox>
          <S.PriceTitle>총 상품금액</S.PriceTitle>
          <PriceCommaText
            price={cartItemPayPrice}
            fontSize="1.5rem"
            fontWeight="700"
            unitSize="1rem"
          />
        </S.PriceBox>

        <S.PriceBox>
          <IoAddCircleOutline />
        </S.PriceBox>

        <S.PriceBox>
          <S.PriceTitle>배송비</S.PriceTitle>
          <PriceCommaText
            price={cartItemFee}
            fontSize="1.5rem"
            fontWeight="700"
            unitSize="1rem"
          />
        </S.PriceBox>

        <S.PriceBox>
          <TiEquals />
        </S.PriceBox>

        <S.PriceBox>
          <S.PriceTitle>결제 예정 금액</S.PriceTitle>
          <PriceCommaText
            price={cartItemPayPrice + cartItemFee}
            fontSize="1.5rem"
            fontWeight="700"
            unitSize="1rem"
            unitColor="#EB5757"
            fontColor="#EB5757"
          />
        </S.PriceBox>
      </S.CartFinalPriceContainer>
    </>
  );
}

export default CartListBox;
