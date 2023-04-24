import Spinner from "../../components/spinner";
import { useProductListQuery } from "../../hooks/queries/useProductListQuery";
import { DefaultLayout } from "../_layouts";
import Banner from "../../components/banner";
import ProductCard from "../../components/contents/productCard";
import * as S from "./style";
import Footer from "../../components/footer";
import InfiniteScroll from "react-infinite-scroll-component";
import { IProductResult } from "../../common/types/api";

function HomePage() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useProductListQuery();

  return (
    <>
      <DefaultLayout>
        <S.BannerBox>
          <Banner />
        </S.BannerBox>
        <InfiniteScroll
          dataLength={data?.pages?.length || 0}
          next={fetchNextPage}
          hasMore={!!hasNextPage}
          style={{ overflow: "hidden" }}
          loader={
            isFetchingNextPage && hasNextPage ? (
              <Spinner />
            ) : (
              <S.LastProduct>마지막 상품입니다.</S.LastProduct>
            )
          }
        >
          {!data && <Spinner />}

          <S.ProductListWrapper>
            {data &&
              data.pages &&
              data.pages.map((el) => {
                return el.results.map((item: IProductResult) => (
                  <S.ProductListBox key={item.product_id}>
                    <ProductCard {...item} />
                  </S.ProductListBox>
                ));
              })}
          </S.ProductListWrapper>
        </InfiniteScroll>
      </DefaultLayout>
      <Footer />
    </>
  );
}

export default HomePage;
