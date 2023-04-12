import Spinner from "../../components/spinner";
import { useProductListQuery } from "../../hooks/queries/useProductListQuery";
import { DefaultLayout } from "../_layouts";
import Banner from "../../components/banner";
import ProductCard from "../../components/contents/productCard";
import * as S from "./style";
import Footer from "../../components/footer";
import InfiniteScroll from "react-infinite-scroll-component";

function HomePage() {
  //1.리스트 불러오기
  //2.리스트 카드 컴포넌트 만들어서 map으로 돌리기
  //3. 리스트 카드 누르면 디테일 페이지로 이동

  const { data, isLoading, fetchNextPage, hasNextPage } = useProductListQuery();

  if (isLoading) {
    return <div className="loading">Loading</div>;
  }

  return (
    <>
      <DefaultLayout>
        <Banner />
        <S.ProductListWrapper>
          <InfiniteScroll
            dataLength={data?.pages?.length || 0}
            next={fetchNextPage}
            hasMore={!!hasNextPage}
            loader={<Spinner />}
          >
            {data &&
              data.pages.map((el) =>
                el.results.map((item: any) => (
                  <S.ProductListBox key={item.product_id}>
                    <ProductCard key={item.product_id} {...item} />
                  </S.ProductListBox>
                ))
              )}
          </InfiniteScroll>
        </S.ProductListWrapper>
      </DefaultLayout>
      <Footer />
    </>
  );
}

export default HomePage;
