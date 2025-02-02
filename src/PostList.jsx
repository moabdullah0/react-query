import React from "react";
import usePosts from "./hooks/usePosts";

const PostList = () => {
  const pageSize = 10;

  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = usePosts({ pageSize });

  return (
    <div>
      <div>
        {isLoading && <p>Loading posts...</p>}
        {error && <p>Error fetching posts!</p>}

        {/* Render posts if data exists */}
        {data?.pages.map((page, pageIndex) => (
          <React.Fragment key={pageIndex}>
            {page.map((post) => (
              <li key={post.id}>{post.title}</li>
            ))}
          </React.Fragment>
        ))}
      </div>

      {/* "Load More" button */}
      <div className="flex mt-4">
        {hasNextPage && (
          <button
            className="bg-blue-500 py-2 px-5 text-white mx-2 rounded-xl"
            disabled={isFetchingNextPage}
            onClick={() => fetchNextPage()}
          >
            {isFetchingNextPage ? "Loading..." : "Load More"}
          </button>
        )}
      </div>
    </div>
  );
};

export default PostList;