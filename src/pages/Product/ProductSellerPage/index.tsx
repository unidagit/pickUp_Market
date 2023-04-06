import { useNavigate } from "react-router-dom";
import { NavBar } from "../../../components/navBar";
import useSellerProductListQuery from "../../../hooks/queries/useSellerProductListQuery";
import ProductBox from "../../../components/contents/productBox";
import Button from "../../../components/buttons";
import Plus from "../../../assets/plus.png";
import * as S from "./style";
import Spinner from "../../../components/spinner";

function ProductSellerPage() {
  const navigate = useNavigate();
  const { sellerProductList, isLoading } = useSellerProductListQuery();
  console.log(sellerProductList);

  const handleUpload = () => {
    navigate(`/products/seller/upload`);
  };
  return (
    <>
      <NavBar />
      <S.Wrapper>
        <S.UploadBox>
          <S.MainTitle>대시보드</S.MainTitle>
          <Button
            fontSize="18px"
            fontWeight="400"
            width="168px"
            height="54px"
            fontColor="#FFFFFF"
            backgroundColor="#21BF48"
            onClick={handleUpload}
          >
            <S.Plus src={Plus} alt="상품추가"></S.Plus>
            상품 업로드
          </Button>
        </S.UploadBox>

        <S.ProductTableBox>
          <S.ProductTable>
            <S.Info>상품정보</S.Info>
            <S.Price>판매가격</S.Price>
            <S.Edit>수정</S.Edit>
            <S.Delete>삭제</S.Delete>
          </S.ProductTable>
          {isLoading || !sellerProductList ? (
            <Spinner />
          ) : (
            sellerProductList.map((item) => (
              <>
                <ProductBox key={item.product_id} {...item} />
              </>
            ))
          )}
        </S.ProductTableBox>
      </S.Wrapper>
    </>
  );
}

export default ProductSellerPage;
