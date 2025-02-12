import React from "react";
import usePosts from "../hooks/usePosts";
import FormPost from "./FormPost";

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
      <FormPost />

      <div className="mt-5">
        {isLoading && <p>Loading posts...</p>}
        {error && <p>Error fetching posts!</p>}

        {data?.pages.map((page, pageIndex) => (
          <React.Fragment key={pageIndex}>
            {page.map((post) => (
              <li
                className="inline-flex w-full  items-center gap-x-2 py-3 px-4 text-sm font-semibold bg-white border border-gray-300 hover:text-indigo-600 transition-all duration-300 text-gray-900 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg "
                key={post.id}
              >
                {post.title}
              </li>
            ))}
          </React.Fragment>
        ))}
      </div>

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
