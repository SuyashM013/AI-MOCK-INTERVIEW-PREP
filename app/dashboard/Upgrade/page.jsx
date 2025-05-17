'use client'
import React, { useEffect, useState } from 'react'
import {
  CheckCircle,
} from 'lucide-react';

import Swal from 'sweetalert2'

function Upgrade() {

  const alertdo = () => {
  
    Swal.fire({
      position: "top",
      title: "Already Enrolled",
      timer: 1000,
      timerProgressBar: true,
    })

  }
  const alertdo2 = () => {
  
    Swal.fire({
      position: "top",
      title: "Comming Soon",
      timer: 1000,
      timerProgressBar: true,
    })

  }



  const [loading, setLoading] = useState(false);

  async function initiatePayment() {
    setLoading(true);

    try {
      const response = await fetch("/api/create-order", {
        method: "POST",
      });
      const order = await response.json();

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        order_id: order.id,
        name: "AI Mock Interview ",
        description: "Payment for Mock Interview Session",
        handler: async (response) => {
          const verifyRes = await fetch("/api/payment-verify", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              razorpayOrderId: response.razorpay_order_id,
              razorpayPaymentId: response.razorpay_payment_id,
              signature: response.razorpay_signature,
            }),
          });

          const verifyData = await verifyRes.json();
          if (verifyData.status === "success") {
            alert("Payment verified successfully");
          } else {
            alert("Payment verification failed");
          }
        },
        prefill: {
          name: "John Doe",
          email: "john.doe@example.com",
          contact: "123456789",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
      setLoading(false);
    } catch (error) {
      console.error("Error initiating payment:", error);
      setLoading(false);
    }
  }

  return (
    <div className=''>
      <section className="py-10 bg-white" id="pricing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bebas text-gray-900 mb-4">Choose Your Plan</h2>
            <p className="text-xl font-montserrat text-gray-600 max-w-3xl mx-auto">Select the plan that best fits your interview preparation needs.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div
              className='rounded-xl font-montserrat shadow-md p-8 md:hover:scale-105 transition-transform duration-300 bg-gray-50 border border-gray-200'
            >

              <h3 className="text-2xl font-bold mb-2">Free</h3>
              <div className="flex items-baseline mb-4">
                <span className="text-3xl font-bold">0 ₹</span>
              </div>
              <p className='mb-6 text-gray-600'>Basic interview practice</p>

              <ul className="space-y-4 mb-8">
               
                <li className="flex items-start">
                  <CheckCircle className='h-5 w-5 mr-2 mt-1 flex-shrink-0 text-green-500' />
                  <span>3 mock interviews per month</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className='h-5 w-5 mr-2 mt-1 flex-shrink-0 text-green-500' />
                  <span>Basic feedback</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className='h-5 w-5 mr-2 mt-1 flex-shrink-0 text-green-500' />
                  <span>Limited question bank</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className='h-5 w-5 mr-2 mt-1 flex-shrink-0 text-green-500' />
                  <span>Resume templates</span>
                </li>

              </ul>

              <button onClick={() => { alertdo() }} className='w-full py-3 rounded-lg font-medium bg-indigo-600 text-white hover:bg-indigo-700 '>
                Pay Now
              </button>


            </div>

            <div
              className='rounded-xl font-montserrat shadow-md p-8 md:hover:scale-105 transition-transform duration-300 bg-gradient-to-b from-indigo-600 to-indigo-700 text-white hover:shadow-lg'
            >

              <h3 className="text-2xl font-bold mb-2">Pro</h3>
              <div className="flex items-baseline mb-4">
                <span className="text-3xl font-bold"> ₹ 120</span>
                 <span className='text-indigo-100'>/month</span>
              </div>
              <p className='mb-6 text-indigo-100'>For serious job seekers</p>

              <ul className="space-y-4 mb-8">
                
                <li className="flex items-start">
                  <CheckCircle className='h-5 w-5 mr-2 mt-1 flex-shrink-0 text-indigo-200' />
                  <span>Unlimited mock interviews</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className='h-5 w-5 mr-2 mt-1 flex-shrink-0 text-indigo-200' />
                  <span>Interview with Industry Experts</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className='h-5 w-5 mr-2 mt-1 flex-shrink-0 text-indigo-200' />
                  <span>Priority Email support</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className='h-5 w-5 mr-2 mt-1 flex-shrink-0 text-indigo-200' />
                  <span>Resume templates</span>
                </li>

              </ul>


              <button
                onClick={initiatePayment}
                disabled={loading}
                className="w-full py-3 rounded-lg font-medium bg-white text-indigo-600 hover:bg-gray-100 "
              >
                {loading ? "Processing..." : "Pay Now"}
              </button>

            </div>

            <div
              className='rounded-xl font-montserrat shadow-md p-8 md:hover:scale-105 transition-transform duration-300 bg-gray-50 border border-gray-200'
            >

              <h3 className="text-2xl font-bold mb-2">Teams</h3>
              <div className="flex items-baseline mb-4">
                <span className="text-3xl font-bold">₹ 500 </span>
                <span className='text-indigo-100'>/month</span>
              </div>
              <p className='mb-6 text-gray-600'>For career coaches & teams</p>

              <ul className="space-y-4 mb-8">
                
                <li className="flex items-start">
                  <CheckCircle className='h-5 w-5 mr-2 mt-1 flex-shrink-0 text-green-500' />
                  <span>Everything in Pro</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className='h-5 w-5 mr-2 mt-1 flex-shrink-0 text-green-500' />
                  <span>Up to 5 team members</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className='h-5 w-5 mr-2 mt-1 flex-shrink-0 text-green-500' />
                  <span>Progress tracking</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className='h-5 w-5 mr-2 mt-1 flex-shrink-0 text-green-500' />
                  <span>Resume Guidence</span>
                </li>

              </ul>

              <button onClick={() => {   alertdo2() }} className='w-full py-3 rounded-lg font-medium bg-indigo-600 text-white hover:bg-indigo-700 '>
               Pay Now
              </button>


            </div>






          </div>
        </div>
      </section>
    </div>
  )
}


export default Upgrade