import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import connectDB from '@/utils/mongoose-connection';
import userModel from '@/models/SchemaDB';


export async function POST(req) {

    try {
        // console.log("Connecting to DB...");
        await connectDB();

        const body = await req.json();
        // console.log("Received body:", body);
        const {
            MockJsonResp,
            jobPosition,
            jobDesc,
            jobExp,
            userEmail,
        } = body;

        const resp_mongo = await userModel.create({
            
            mockId: uuidv4(),
            jsonMockResp: MockJsonResp,
            jobPosition: jobPosition,
            jobDescription: jobDesc,
            jobExperience: jobExp,
            createdBy: userEmail,
            createdAt: moment().format("YYYY-MM-DD"),
        });

        return NextResponse.json(
            { success: true, mockId: resp_mongo.mockId },
            { status: 201 }
        );
    } catch (error) {
        console.error('API error:', error);
        return NextResponse.json(
            { success: false, error: error.message },
            { status: 500 }
        );
    }
}
