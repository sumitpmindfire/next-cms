"use client";

import { useRouter } from "next/navigation";
import Blog from "../types";

const BlogsList = ({ blogs }: { blogs: Blog[] }) => {
  const router = useRouter();

  const handleBlogClick = (blogId: string) => {
    router.push(`/blogs/${blogId}`);
  };

  return (
    <ul>
      {blogs?.map((blogDetails) => (
        <li
          key={blogDetails.id}
          className="my-2 cursor-pointer border p-4 hover:bg-gray-50"
          onClick={() => handleBlogClick(blogDetails.id)}
        >
          <div className="flex justify-between grow">
            <h2>{blogDetails?.title}</h2>
            <span>{blogDetails.createdAt}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default BlogsList;
