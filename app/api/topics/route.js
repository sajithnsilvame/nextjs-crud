import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topics";
import { NextResponse } from "next/server";

const setHeaders = (response) => {
  response.headers.set(
    "Access-Control-Allow-Origin",
    "https://nextjs-crud-bysajith.vercel.app"
  );
  response.headers.set(
    "Access-Control-Allow-Methods",
    "GET,HEAD,POST,PUT,DELETE"
  );
  response.headers.set("Access-Control-Allow-Headers", "Content-Type");
  return response;
};

export async function POST(request) {
  const { title, description } = await request.json();
  await connectMongoDB();
  await Topic.create({ title, description });
  const response = NextResponse.json({ message: "Success" }, { status: 201 });
  return setHeaders(response);
}

export async function GET() {
  await connectMongoDB();
  const topics = await Topic.find();
  const response = NextResponse.json({ topics });
  return setHeaders(response);
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Topic.findByIdAndDelete(id);
  const response = NextResponse.json(
    { message: "Topic Deleted" },
    { status: 200 }
  );
  return setHeaders(response);
}
