import { NextResponse } from "next/server";
import connectDB from '@/utils/mongoose-connection';
import Payment from "@/models/Payment";
import Razorpay from "razorpay";
import { cookies } from 'next/headers'

export async function POST(req) {
    await connectDB();
    const { razorpayOrderId, razorpayPaymentId, signature } = await req.json();
    const secret = process.env.NEXT_PUBLIC_RAZORPAY_KEY_SECRET;
    const cookieStore = cookies()

    try {
        const { validatePaymentVerification } = require("razorpay/dist/utils/razorpay-utils");

        const isValid = validatePaymentVerification(
            { order_id: razorpayOrderId, payment_id: razorpayPaymentId },
            signature,
            secret
        );

        if (isValid) {
            const payment = await Payment.findOne({ orderId: razorpayOrderId });
            if (payment) {
                payment.paymentId = razorpayPaymentId;
                payment.signature = signature;
                payment.status = "completed";
                await payment.save();
                const response = NextResponse.json({ status: "success" });
                
                const name = cookieStore.set('Payment_status', response, {
                    httpOnly: true,
                })

                return response;


            }
        }

        return NextResponse.json({ message: "Invalid signature" }, { status: 400 });
    } catch (error) {
        console.error("Error verifying payment:", error);
        return NextResponse.json({ message: "Error verifying payment" }, { status: 500 });
    }
}
