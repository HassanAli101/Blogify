"use client";

import { BlogForm } from "@/app/components/BlogForm";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useAddBlog } from "@/hooks/useAddNewBlog";

export default function NewBlogPage() {
  const {
    title,
    setTitle,
    author,
    setAuthor,
    content,
    setContent,
    handleSubmit,
  } = useAddBlog();

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 text-center text-primary">
        Create a New Blog Post
      </h1>

      <BlogForm
        title={title}
        setTitle={setTitle}
        author={author}
        setAuthor={setAuthor}
        content={content}
        setContent={setContent}
        handleSubmit={handleSubmit}
      />

      <h2 className="text-2xl font-bold mt-6 text-gray-700">Preview</h2>
      <div className="p-4 border rounded-md mt-2 bg-gray-700 max-w-3xl text-white prose prose-gray">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {content || "*Start typing to see preview...*"}
        </ReactMarkdown>
      </div>
    </div>
  );
}
