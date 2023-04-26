import { Link } from 'react-router-dom';
import { IProducts } from '../../../common/types/api';
import { PriceCommaText } from '../../text';
import * as S from './style';
import 'react-lazy-load-image-component/src/effects/blur.css';

import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function ProductCard({
  image,
  price,
  product_name,
  store_name,
  product_id,
  shipping_fee,
  stock,
}: IProducts) {
  return (
    <S.Wrapper>
      <S.Box>
        <S.ImgBox>
          <Link to={`/products/${product_id}`}>
            <S.Img>
              <LazyLoadImage
                alt="상품이미지"
                src={image}
                effect="blur"
                width="100%"
              />
            </S.Img>
          </Link>
        </S.ImgBox>
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
        <S.NoticeBox>
          {shipping_fee === 0 ? <S.FreeShipping>무료배송</S.FreeShipping> : ''}
          {stock === 0 ? <S.SoldOut>일시품절</S.SoldOut> : ''}
          {stock < 10 && stock > 0 ? <S.LessStock>품절임박</S.LessStock> : ''}
        </S.NoticeBox>
      </S.Box>
    </S.Wrapper>
  );
}
