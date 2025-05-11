import Razorpay from "razorpay";
import { NextResponse } from "next/server";
import connectDB from '@/utils/mongoose-connection';
import Payment from "@/models/Payment";

export async function POST() {
  await connectDB();

  const razorpay = new Razorpay({
    key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
    key_secret: process.env.NEXT_PUBLIC_RAZORPAY_KEY_SECRET,
  });

  try {
    const options = {
      amount: 120 * 100, // Amount in smallest currency unit
      currency: "INR",
    };
    const order = await razorpay.orders.create(options);

    await Payment.create({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      status: "pending",
    });

    return NextResponse.json(order);
  } catch (error) {
    console.error("Error creating order:", error);
    return NextResponse.json({ message: "Error creating order" }, { status: 500 });
  }
}
