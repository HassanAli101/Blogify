import { connectDB } from "@/lib/mongodb";
import { Blog } from "./models/blog";
import BlogCard from "./components/blogCard";
import { BlogType } from "@/lib/types";

export default async function HomePage() {
  await connectDB();
  const blogs = await Blog.find({});

  return (
    <div className="space-y-4">
      {blogs.map((blog: BlogType) => (
        <BlogCard key={blog._id} blog={blog} />
      ))}
    </div>
  );
}
