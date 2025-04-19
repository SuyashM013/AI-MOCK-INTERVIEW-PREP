import { NextResponse } from "next/server";
import userModel from "@/models/SchemaDB";
import connectDB from "@/utils/mongoose-connection";

export async function POST(req){
    try {
        await connectDB(); // ✅ Connect to DB
    
        const { mockId } = await req.json();
    
        if (!mockId) {
          return NextResponse.json({ success: false, error: "mockId is required" }, { status: 400 });
        }
    
        const data = await userModel.findOne({ mockId });
    
        if (!data) {
          return NextResponse.json({ success: false, error: "No interview found" }, { status: 404 });
        }
    
        return NextResponse.json({ success: true, data });
        
      } catch (err) {
        console.error("API Error:", err);
        return NextResponse.json({ success: false, error: err.message }, { status: 500 });
      }
    }