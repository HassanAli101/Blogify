import { connectDB } from "@/lib/mongodb";
import { Blog } from "@/app/models/blog";
import ReactMarkdown from "react-markdown";
import { notFound } from "next/navigation";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

export async function generateStaticParams() {
  await connectDB();
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
    <article className="max-w-3xl mx-auto py-10 text-white">
      <h1 className="text-4xl font-extrabold text-primary">{blog.title}</h1>
      <p className="text-sm text-secondary">By {blog.author}</p>
      <div className="prose mt-6 text-gray-700 dark:text-gray-300">
        <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
          {blog.content}
        </ReactMarkdown>
      </div>
    </article>
  );
}
