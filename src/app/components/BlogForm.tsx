export function BlogForm({
  title,
  setTitle,
  author,
  setAuthor,
  content,
  setContent,
  handleSubmit,
}: {
  title: string;
  setTitle: (value: string) => void;
  author: string;
  setAuthor: (value: string) => void;
  content: string;
  setContent: (value: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
}) {
  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 text-black bg-white p-6 shadow-lg rounded-lg"
    >
      <div>
        <label className="block text-gray-700 font-medium mb-1">
          Blog Title
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
          placeholder="Enter blog title..."
          required
        />
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-1">
          Author Name
        </label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
          placeholder="Enter author name..."
          required
        />
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-1">
          Content (Markdown)
        </label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md h-40 focus:ring-2 focus:ring-primary focus:outline-none"
          placeholder="Write your blog in Markdown..."
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-green-600 text-white px-4 py-3 rounded-md hover:bg-green-700 transition"
      >
        Publish Blog
      </button>
    </form>
  );
}
