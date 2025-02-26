export interface BlogType {
  _id: string; // Optional for new blog entries (MongoDB will auto-generate it)
  title: string; // Blog title
  author: string; // Author name
  content: string; // Markdown content
  createdAt: Date; // Auto-generated timestamp
  updatedAt: Date; // Auto-generated timestamp
}
