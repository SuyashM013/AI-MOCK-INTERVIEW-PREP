import { NextResponse } from 'next/server';
import connectDB from '@/utils/mongoose-connection';
import userAnswerModel from '@/models/UserAnswerSchema';

export async function POST(req) {
    try {
        // console.log("Connecting to DB...");
        await connectDB();
        const body = await req.json();
        // console.log("Received body:", body);

        const {
            mockId,
            question,
            corrAns,
            userAnswer,
            rating,
            feedback,
            userEmail,
            createdAt,
        } = body;

        const newAnswer = await userAnswerModel.create({
            mockId,
            question,
            corrAns,
            userAnswer,
            rating,
            feedback,
            userEmail,
            createdAt,
        });

        return NextResponse.json({ success: true, data: newAnswer }, { status: 200 });

    }


    catch (err) {
        // console.log('API Error Saving user answer into DB', err);
        return new Response(JSON.stringify({ message: 'Server Error' }), {
            status: 500,
        })
    }
}