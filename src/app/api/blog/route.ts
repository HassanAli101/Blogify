import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Blog } from "@/app/models/blog";

// GET all blogs
export async function GET() {
  try {
    await connectDB();
    const blogs = await Blog.find({});
    return NextResponse.json(blogs, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch blogs", error: (error as Error).message },
      { status: 500 }
    );
  }
}

// POST a new blog
export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();

    // Validation check
    if (!body.title || !body.author || !body.content) {
      return NextResponse.json(
        { message: "Title, Author, and Content are required." },
        { status: 400 }
      );
    }

    const newBlog = new Blog({
      title: body.title,
      author: body.author,
      content: body.content,
      createdAt: new Date(),
    });

    await newBlog.save();

    return NextResponse.json(
      { message: "Blog created successfully", blog: newBlog },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to create blog", error: (error as Error).message },
      { status: 500 }
    );
  }
}
