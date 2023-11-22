import { BLOGS_LIST_API } from "@/constants/apiUrls";
import Blog from "./types";
import BlogsList from "./components/BlogsList";

const fetchBlogs = async () => {
  const response = await fetch(BLOGS_LIST_API);
  if (!response.ok) throw new Error("Error");
  const data = (await response.json()) as Promise<Blog[]>;
  return data;
};

const Page = async () => {
  const data = await fetchBlogs();

  return (
    <>
      <h1 className="font-bold">Blogs</h1>
      <BlogsList blogs={data} />
    </>
  );
};

export default Page;
