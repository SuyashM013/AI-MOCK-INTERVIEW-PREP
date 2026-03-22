import { NextResponse } from 'next/server';
import connectDB from '@/utils/mongoose-connection';
import userModel from '@/models/SchemaDB';

export async function DELETE(req) {
    await connectDB();


    try {
        const { searchParams } = new URL(req.url);
        const id = searchParams.get('mockId');

        if (!id) {
            return NextResponse.json({ error: "ID parameter is required" }, { status: 400 });
        }
        const deletedInterview = await userModel.findOneAndDelete({ mockId: id });
        if (!deletedInterview) {
            return NextResponse.json({ error: "Interview not found" }, { status: 404 });
        }
        return NextResponse.json({ message: "Interview deleted successfully" });
    } catch (error) {

        console.error("MongoDB error:", error);
        return NextResponse.json({ error: "Database error" }, { status: 500 });

    }
}
