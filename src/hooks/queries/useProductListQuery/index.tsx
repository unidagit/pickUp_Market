import { useInfiniteQuery } from "@tanstack/react-query";
import { apiGetProducts } from "../../../services/api";
import { IProducts } from "../../../common/types/api";

export const useProductListQuery = () => {
  const {
    data,
    isLoading,
    fetchNextPage, //function 다음페이지를 가져오는 함수, 페이지 맨 아래로 스크롤할 때마다 이 함수를 호출해야합니다.
    hasNextPage,
    isFetchingNextPage, //boolean 다음페이지를 가져올때 확인합니다.
    status,
    error,
  } = useInfiniteQuery(
    ["products"],
    ({ pageParam = 1 }) => apiGetProducts(pageParam),

    {
      getNextPageParam: (lastPage, allPages) => {
        //스크롤감지 후 다음페이지 불러오는 아이.
        console.log(allPages.length);
        const nextPage = allPages.length + 1;
        return nextPage; //여기서 리턴을 하면 바로 apiGetProducts인자로 간다.
        // return lastPage.next || undefined;
      },
    }
  );
  console.log(data);

  return {
    data,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
    error,
  };
};
