import apiClient from "../Services/Services";
import { useInfiniteQuery } from "@tanstack/react-query";

const usePosts = ({ pageSize }) => {
  const fetchPosts = async ({ pageParam = 1 }) => {
    const res = await apiClient.get("/posts", {
      params: {
        _start: (pageParam - 1) * pageSize,
        _limit: pageSize,
      },
    });

    return res.data;
  };

  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    getNextPageParam: (lastPage, allpages) => {
      //1 =>2
      return lastPage.length > 0 ? allpages.length + 1 : undefined;
    },
  });

  return {
    data,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  };
};

export default usePosts;
