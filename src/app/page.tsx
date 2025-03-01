import { connectDB } from "@/lib/mongodb";
import { Blog } from "./models/blog";
import BlogCard from "./components/blogCard";
import { BlogType } from "@/lib/types";
import AddBlogButton from "./components/AddBlogButton";

export default async function HomePage() {
  await connectDB();
  const blogs = await Blog.find({});

  return (
    <div className="max-w-4xl mx-auto py-10">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-extrabold text-primary">Latest Blogs</h1>
        <AddBlogButton />
      </div>
      <div className="mt-6 space-y-6">
        {blogs.map((blog: BlogType) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  );
}
