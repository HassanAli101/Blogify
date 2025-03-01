import { useState } from "react";
import { useRouter } from "next/navigation";

export function useAddBlog() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const blogData = { title, author, content };
    const res = await fetch("/api/blog", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blogData),
    });

    if (res.ok) {
      router.push("/");
    }
  };

  return {
    title,
    setTitle,
    author,
    setAuthor,
    content,
    setContent,
    handleSubmit,
  };
}
