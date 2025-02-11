import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRef } from "react";
import apiClient from "./Services/Services";

const FormPost = () => {
  const queryClient = useQueryClient();
  const refField = useRef(null);

  const addPost = useMutation({
    mutationFn: (post) => {
      return apiClient.post("/posts", post).then((res) => res.data);
    },
    onMutate: (newPost) => {
      const previousPosts = queryClient.getQueryData(["posts"]);
      queryClient.setQueryData(["posts"], (oldData = []) => {
        return {
          ...oldData,
          newPost,
        };
      });
      return { previousPosts };
    },
    onSuccess: () => {
      if (refField.current) return (refField.current.value = "");
    },
    onError: (err, newPost, context) => {
      queryClient.setQueryData(["posts"], context.previousPosts);
    },
  });

  return (
    <div>
      {addPost.error && (
        <p className="text-white px-2 text-center bg-red-600 rounded-lg w-full pt-5">
          {addPost.error.message}
        </p>
      )}

      <form
        onSubmit={(e) => {
          e.preventDefault();
          addPost.mutate({
            id: 0,
            title: refField.current.value,
            body: "Test",
            userId: 1,
          });
        }}
      >
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter post title"
              required
              ref={refField}
            />
          </div>
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          disabled={addPost.isPending}
        >
          {addPost.isPending ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default FormPost;
