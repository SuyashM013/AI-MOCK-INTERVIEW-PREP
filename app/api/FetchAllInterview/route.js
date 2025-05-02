import { NextResponse } from 'next/server';
import connectDB from '@/utils/mongoose-connection';
import userModel from '@/models/SchemaDB';

export async function GET(req) {

  await connectDB();

  const url = new URL(req.url, `http://${req.headers.get('host')}`);
  const email = url.searchParams.get("email");

  if (!email) {
    return NextResponse.json({ error: "Missing email" }, { status: 400 });
  }

  try {
    const result = await userModel.find({ createdBy: email });
    // console.log(result)
    
    return NextResponse.json(result);
  } catch (error) {
    console.error("MongoDB error:", error);
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}
