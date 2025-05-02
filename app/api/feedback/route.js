// app/api/feedback/route.js
import { NextResponse } from 'next/server';
import connectDB from "@/utils/mongoose-connection";// Your DB connection
import userAnswerModel from '@/models/UserAnswerSchema';

export async function GET(req) {
  await connectDB();

  const url = new URL(req.url, `http://${req.headers.get('host')}`);
  const interviewid = url.searchParams.get("interviewid");

  // console.log("Received interviewid:", interviewid);

  if (!interviewid) {
    return NextResponse.json({ error: "Missing interviewid" }, { status: 400 });
  }

  try {
    const result = await userAnswerModel.find({ mockId: interviewid });
    return NextResponse.json(result);
  } catch (error) {
    console.error("MongoDB fetch error:", error);
    return NextResponse.json({ error: "Database query failed" }, { status: 500 });
  }
}
