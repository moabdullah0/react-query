import apiClient from "../Services/Services";
import { useQuery } from "@tanstack/react-query";
const useData = () => {
  const FetchTodos = async () => {
    const res = await apiClient.get("/todos");
    return res.data;
  };
  const { data, error, isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: FetchTodos,
  });

  return {
    data,
    error,
    isLoading,
  };
};

export default useData;
