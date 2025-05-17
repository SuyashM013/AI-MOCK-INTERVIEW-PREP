import { NextResponse } from 'next/server';
import connectDB from '@/utils/mongoose-connection';
import userModel from '@/models/SchemaDB';

export async function GET(req) {

  await connectDB();

  try {
    const result = await userModel.find({ createdBy: 'Test@gmail.com' });
    // console.log(result)
    
    return NextResponse.json(result);
  } catch (error) {
    console.error("MongoDB error:", error);
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}
