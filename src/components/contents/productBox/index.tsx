import * as S from "./style";
import { PriceCommaText } from "../../text";
import { IProductBox } from "../../../common/types/api";
import Button from "../../buttons";

function ProductBox({
  image,
  price,
  product_name,
  product_id,
  stock,
  shipping_fee,
  product_info,
  shipping_method,
  handleDelete,
  handleModify,
}: IProductBox) {
  const productInfo = {
    image,
    price,
    product_name,
    product_id,
    stock,
    shipping_fee,
    product_info,
    shipping_method,
  };
  return (
    <S.Wrapper>
      <S.ProductInfoContainer>
        <S.ProductInfoBox>
          <S.Img src={image} alt="상품이미지" />
          <S.ProductNameBox>
            <S.ProductName>{product_name}</S.ProductName>
            <S.ProductStock>재고 : {stock}개</S.ProductStock>
          </S.ProductNameBox>
        </S.ProductInfoBox>

        <S.ModifyContainer>
          <PriceCommaText
            fontSize="18px"
            fontWeight="700"
            fontColor="black"
            price={price}
            unitColor="
          #000000"
            unitSize="18px"
          />
        </S.ModifyContainer>

        <S.ModifyContainer>
          <Button
            fontSize="16px"
            fontWeight="400"
            height="40px"
            onClick={() => handleModify(productInfo)}
          >
            수정
          </Button>
        </S.ModifyContainer>

        <S.ModifyContainer>
          <Button
            type="submit"
            fontSize="16px"
            fontWeight="400"
            height="40px"
            fontColor="#767676"
            backgroundColor="#FFFFFF"
            border="1px solid #767676"
            onClick={() => handleDelete(product_id)}
          >
            삭제
          </Button>
        </S.ModifyContainer>
      </S.ProductInfoContainer>
    </S.Wrapper>
  );
}

export default ProductBox;
