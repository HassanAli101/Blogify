import Link from "next/link";

export default function AddBlogButton() {
  return (
    <Link
      href="/blog/new"
      className="px-4 py-2 bg-[--button-color] text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition"
    >
      + Add Blog
    </Link>
  );
}
