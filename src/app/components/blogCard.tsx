import React from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { BlogType } from "@/lib/types";

type BlogCardProps = {
  blog: BlogType
};

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <div className="border rounded-lg p-4 shadow-md bg-white">
      <h2 className="text-xl font-bold">{blog.title}</h2>
      <p className="text-sm text-gray-500">By {blog.author}</p>

      {/* Markdown preview - show only first 20 words */}
      <div className="mt-2 text-gray-700">
        <ReactMarkdown>
          {blog.content.split(" ").slice(0, 20).join(" ") + "..."}
        </ReactMarkdown>
      </div>

      <Link
        href={`/blog/${blog._id}`}
        className="text-blue-500 hover:underline mt-2 block"
      >
        Read More →
      </Link>
    </div>
  );
}
