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

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const topic = await Topic.findOne({ _id: id });
  const response = NextResponse.json(topic, { status: 200 });
  return setHeaders(response);
}

export async function PUT(request, { params }) {
  const { id } = params;
  const { newTitle: title, newDescription: description } = await request.json();
  await connectMongoDB();
  await Topic.findByIdAndUpdate(id, { title, description });
  const response = NextResponse.json(
    { message: "Topic Updated" },
    { status: 200 }
  );
  return setHeaders(response);
}
