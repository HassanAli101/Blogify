"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { useRouter } from "next/navigation";

export default function NewBlogPage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newBlog = { title, author, content };

    const res = await fetch("/api/blog", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBlog),
    });

    if (res.ok) {
      router.push("/"); // Redirect to home or blog list page
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Create a New Blog Post</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded-md"
          required
        />
        <input
          type="text"
          placeholder="Author Name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full p-2 border rounded-md"
          required
        />
        <textarea
          placeholder="Write your blog in Markdown..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-2 border rounded-md h-40"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Publish Blog
        </button>
      </form>

      <h2 className="text-2xl font-bold mt-6">Preview</h2>
      <div className="p-4 border rounded-md mt-2 bg-gray-100">
        <ReactMarkdown>
          {content || "*Start typing to see preview...*"}
        </ReactMarkdown>
      </div>
    </div>
  );
}
