import { Link } from "react-router-dom";
import { IProducts } from "../../common/types/api";
import { PriceCommaText } from "../text";
import * as S from "./style";

export default function ProductCard({
  image,
  price,
  product_name,
  store_name,
  product_id,
}: IProducts) {
  return (
    <S.Wrapper>
      <S.Box>
        <Link to={`/products/${product_id}`}>
          <S.Img alt="상품이미지" src={image} />
        </Link>
        <S.StoreName>{store_name}</S.StoreName>
        <S.ProductName>{product_name}</S.ProductName>
        <S.PriceBox>
          <PriceCommaText
            fontSize="24px"
            fontWeight="700"
            fontColor="black"
            price={price}
            unitColor="
          #000000"
            unitSize="16px"
          />
        </S.PriceBox>
      </S.Box>
    </S.Wrapper>
  );
}
