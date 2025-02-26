import { connectDB } from "@/lib/mongodb";
import { Blog } from "@/app/models/blog";
import ReactMarkdown from "react-markdown";
import { notFound } from "next/navigation";
import { BlogType } from "@/lib/types";

export async function generateStaticParams() {
  await connectDB();
  // Fetching only the `_id` field since it's needed for generating static paths
  const blogs = await Blog.find().select("_id").lean<Pick<BlogType, "_id">[]>();

  return blogs.map((blog) => ({
    slug: blog._id.toString(),
  }));
}

export default async function BlogPage({
  params,
}: {
  params: { slug: string };
}) {
  await connectDB();

  // Fetch full blog details
  const blog = await Blog.findById(params.slug).lean<BlogType | null>();

  if (!blog) return notFound();

  return (
    <article>
      <h1 className="text-3xl font-bold">{blog.title}</h1>
      <p className="text-sm text-gray-500">By {blog.author}</p>
      <ReactMarkdown>{blog.content}</ReactMarkdown>
    </article>
  );
}
