import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true, // stale 상태일 경우 윈도우 포커싱 될 때 마다 refetch
      refetchOnMount: false, //  stale 상태일 경우 마운트 시 마다 refetch
    },
  },
});
