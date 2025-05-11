'use client'
import React from 'react'
import {
  CheckCircle,
  Terminal,
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"


function Upgrade() {
  const alertdo = () => {
    <Alert>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components and dependencies to your app using the cli.
      </AlertDescription>
    </Alert>
    alert('You can add components and dependencies to your app using the cli.')
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
                buttonText: 'Start Free',
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
                buttonText: 'Comming Soon, Contact Sales',
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
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Upgrade