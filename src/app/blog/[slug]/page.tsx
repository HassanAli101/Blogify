import { connectDB } from "@/lib/mongodb";
import { Blog } from "@/app/models/blog";
import ReactMarkdown from "react-markdown";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  await connectDB();
  // Fetching only the `_id` field since it's needed for generating static paths
  const blogs = await Blog.find().select("_id");

  return blogs.map((blog) => ({
    slug: blog._id.toString(),
  }));
}

type tParams = Promise<{ slug: string }>;

export default async function BlogPage(props: { params: tParams }) {
  await connectDB();
  const { slug } = await props.params;
  const blog = await Blog.findById(slug);
  if (!blog) return notFound();
  return (
    <article>
      <h1 className="text-3xl font-bold">{blog.title}</h1>
      <p className="text-sm text-gray-500">By {blog.author}</p>
      <ReactMarkdown>{blog.content}</ReactMarkdown>
    </article>
  );
}
