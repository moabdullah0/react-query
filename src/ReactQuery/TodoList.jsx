import useData from "../hooks/useData";

const TodoList = () => {
  const { data, error, isLoading } = useData();
  if (isLoading) return <p>loading ....</p>;
  return (
    <div>
      {error && <p>{error.message}</p>}
      {data?.map((data, i) => (
        <li key={i}>{data.title}</li>
      ))}
    </div>
  );
};

export default TodoList;
