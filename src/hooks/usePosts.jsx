import apiClient from "../Services/Services";
import { useQuery } from "@tanstack/react-query";

const usePosts = ({ page, pageSize }) => {

  const fetchPosts = async () => {
    const res = await apiClient.get("/posts", {
      params: {
        _start: (page - 1) * pageSize, 
        _limit: pageSize,
      },
    });
    return res.data;
  };

 
  const { data, error, isLoading } = useQuery({
    queryKey: ["posts", page, pageSize], 
    queryFn: fetchPosts, 
  });

  return {
    data,
    error,
    isLoading,
  };
};

export default usePosts;
