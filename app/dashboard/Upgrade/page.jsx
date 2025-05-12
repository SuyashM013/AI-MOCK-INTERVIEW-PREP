'use client'
import React, { useEffect, useState } from 'react'
import {
  CheckCircle,
} from 'lucide-react';


import Swal from 'sweetalert2'


function Upgrade() {

  const alertdo = () => {
    let timerInterval;
    Swal.fire({
      position: "top",
      title: "Already Enrolled",
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
            {[
              {
                title: 'Free',
                price: '0 ₹',
                description: 'Basic interview practice',
                features: [
                  '3 mock interviews per month',
                  'Basic feedback',
                  'Limited question bank',
                  'Text-based interviews',
                  'Resume templates',
                ],
                buttonText: 'Already Using Free',
                highlighted: false
              },
              {
                title: 'Pro',
                price: '150 ₹',
                period: '/month',
                description: 'For serious job seekers',
                features: [
                  'Unlimited mock interviews',
                  'Detailed feedback',
                  'Interview with Industry Experts',
                  'Priority Email support',
                  'Resume templates'
                ],
                buttonText: 'Get Pro',
                highlighted: true
              },
              {
                title: 'Teams',
                price: '500 ₹',
                period: '/month',
                description: 'For career coaches & teams',
                features: [
                  'Everything in Pro',
                  'Up to 5 team members',
                  'Progress tracking',
                  'Custom question sets',
                  'Resume Guidence',
                ],
                buttonText: 'Contact Sales',
                highlighted: false
              }
            ].map((plan, index) => (


              <div
                key={index}
                className={`rounded-xl font-montserrat shadow-md p-8 md:hover:scale-105 transition-transform duration-300 ${plan.highlighted
                  ? 'bg-gradient-to-b from-indigo-600 to-indigo-700 text-white shadow-lg '
                  : 'bg-gray-50 border border-gray-200'
                  }`}
              >

                <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  {plan.period && <span className={plan.highlighted ? 'text-indigo-100' : 'text-gray-500'}>{plan.period}</span>}
                </div>
                <p className={`mb-6 ${plan.highlighted ? 'text-indigo-100' : 'text-gray-600'}`}>{plan.description}</p>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start">
                      <CheckCircle className={`h-5 w-5 mr-2 mt-1 flex-shrink-0 ${plan.highlighted ? 'text-indigo-200' : 'text-green-500'
                        }`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button onClick={() => { alertdo() }} className={`w-full py-3 rounded-lg font-medium ${plan.highlighted
                  ? 'bg-white text-indigo-600 hover:bg-gray-100'
                  : 'bg-indigo-600 text-white hover:bg-indigo-700'
                  }`}>
                  {plan.buttonText}
                </button>

                <button
                  onClick={initiatePayment}
                  disabled={loading}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  {loading ? "Processing..." : "Pay with Razorpay"}
                </button>

              </div>


            ))}

            <div
              className='rounded-xl font-montserrat shadow-md p-8 md:hover:scale-105 transition-transform duration-300 bg-gray-50 border border-gray-200'
            >

              <h3 className="text-2xl font-bold mb-2">Free</h3>
              <div className="flex items-baseline mb-4">
                <span className="text-3xl font-bold">0 ₹</span>
                {/* {plan.period && <span className={plan.highlighted ? 'text-indigo-100' : 'text-gray-500'}>{plan.period}</span>} */}
              </div>
              <p className='mb-6 text-gray-600'>Basic interview practice</p>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start">
                    <CheckCircle className={`h-5 w-5 mr-2 mt-1 flex-shrink-0 ${plan.highlighted ? 'text-indigo-200' : 'text-green-500'
                      }`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button onClick={() => { alertdo() }} className={`w-full py-3 rounded-lg font-medium ${plan.highlighted
                ? 'bg-white text-indigo-600 hover:bg-gray-100'
                : 'bg-indigo-600 text-white hover:bg-indigo-700'
                }`}>
                {plan.buttonText}
              </button>

              <button
                onClick={initiatePayment}
                disabled={loading}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                {loading ? "Processing..." : "Pay with Razorpay"}
              </button>

            </div>






          </div>
        </div>
      </section>
    </div>
  )
}



// "use client";

// import { useState } from "react";

// export default function Upgrade() {


//   return (
//     <div>
//       <button
//         onClick={initiatePayment}
//         disabled={loading}
//         className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//       >
//         {loading ? "Processing..." : "Pay with Razorpay"}
//       </button>
//     </div>
//   );
// }

export default Upgrade