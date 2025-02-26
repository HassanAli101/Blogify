import { connectDB } from "@/lib/mongodb";
import { Blog } from "./models/blog";
import BlogCard from "./components/blogCard";

export default async function HomePage() {
  await connectDB();
  const blogs = await Blog.find({}).lean();

  return (
    <div className="space-y-4">
      {blogs.map((blog) => (
        <BlogCard key={blog._id} blog={blog} />
      ))}
    </div>
  );
}
