import Spinner from "../../components/spinner";
import { useProductListQuery } from "../../hooks/queries/useProductListQuery";
import { DefaultLayout } from "../_layouts";
import Banner from "../../components/banner";
import ProductCard from "../../components/productCard";
import * as S from "./style";
import Footer from "../../components/footer";

function HomePage() {
  //1.리스트 불러오기
  //2.리스트 카드 컴포넌트 만들어서 map으로 돌리기
  //3. 리스트 카드 누르면 디테일 페이지로 이동

  const { productsList, isLoading } = useProductListQuery();
  console.log(productsList);

  if (isLoading) return <Spinner />;
  // if (isError) return { error };

  return (
    <>
      <DefaultLayout>
        <Banner />
        <S.ProductListWrapper>
          {productsList &&
            productsList.map((item) => (
              <S.ProductListBox key={item.product_id}>
                <ProductCard {...item} />
              </S.ProductListBox>
            ))}
        </S.ProductListWrapper>
      </DefaultLayout>
      <Footer />
    </>
  );
}

export default HomePage;
