import React from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { BlogType } from "@/lib/types";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

type BlogCardProps = {
  blog: BlogType;
};

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <div className="border border-secondary rounded-xl p-6 shadow-lg bg-white dark:bg-slate-800">
      <h2 className="text-2xl font-semibold text-primary text-white">{blog.title}</h2>
      <p className="text-sm text-secondary">By {blog.author}</p>

      {/* Markdown preview - show only first 20 words */}
      <div className="prose mt-3 text-white dark:text-gray-300">
        <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
          {blog.content.split(" ").slice(0, 20).join(" ") + "..."}
        </ReactMarkdown>
      </div>

      <Link
        href={`/blog/${blog._id}`}
        className="inline-block mt-4 text-primary font-medium hover:underline"
      >
        Read More →
      </Link>
    </div>
  );
}
