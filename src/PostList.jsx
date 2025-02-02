import { useState } from "react";
import usePosts from "./hooks/usePosts";

const PostList = () => {
  const pageSize = 10;
  const [page, setPage] = useState(1); 

  const { data, error, isLoading } = usePosts({ page, pageSize });

  const hasNextPage = data && data.length === pageSize; 

  return (
    <div>
      <div>
        {isLoading && <p>Loading posts...</p>}
        {error && <p>Error fetching posts!</p>}
        {data?.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </div>

      <div className="flex mt-4">
        <button
          className="bg-blue-500 py-2 px-5 text-white rounded-xl"
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          Previous
        </button>
        
        <button
          className="bg-blue-500 py-2 px-5 text-white mx-2 rounded-xl"
          onClick={() => setPage(page + 1)}
          disabled={!hasNextPage } // Disable if no next page or fetching
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PostList;
