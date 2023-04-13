import { useInfiniteQuery } from "@tanstack/react-query";
import { apiGetProducts } from "../../../services/api";

export const useProductListQuery = () => {
  const {
    data, //쿼리에서 가져온 현재 데이터를 보유합니다.
    fetchNextPage, //function 다음페이지를 가져오는 함수, 페이지 맨 아래로 스크롤할 때마다 이 함수를 호출해야합니다.
    hasNextPage, //가져올 데이터가 더 있는지 여부를 나타내는 boolean
    isFetchingNextPage, //현재 다음 페이지의 데이터를 가져오는 중인지 여부를 나타내는 boolean
    isFetching, //현재 데이터를 가져오고 있는지 여부를 나타내는 boolean
  } = useInfiniteQuery(
    ["products"],
    ({ pageParam = 1 }) => apiGetProducts(pageParam),

    {
      getNextPageParam: (lastPage, allPages) => {
        //스크롤감지 후 다음페이지 불러오는 아이.
        const nextPage = allPages.length + 1;
        return nextPage; //여기서 리턴을 하면 바로 apiGetProducts인자로 간다.
      },
    }
  );

  return {
    data,
    isFetching,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  };
};
