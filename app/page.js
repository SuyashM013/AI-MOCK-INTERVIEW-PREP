"use client"

// CLAUDE
// pages/index.js
// pages/index.js
import React, { useState } from 'react';
import Link from 'next/link';
import {
  Clock,
  MessageSquare,
  Video,
  CheckCircle,
  ArrowRight,
  ArrowDown,
  BookOpen,
  Users,
  PieChart,
  X,
  Send,
  Linkedin,
  Github,
  Facebook,
  Instagram,
  Twitter,


} from 'lucide-react';
import Image from 'next/image';
import res1 from '@/public/Minor/res-1.png';
import res2 from '@/public/Minor/res-2.png';
import res3 from '@/public/Minor/res-3.png';
import res4 from '@/public/Minor/res-4.png';
import mainp from '@/public/Other/Int-1.png';
import { useRouter } from 'next/navigation';



export default function HomePage() {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:Mishrasuyash013@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 scroll-smooth">

      {/* Navigation Bar */}
      <nav className="bg-white/60 backdrop-blur-sm shadow-sm fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex justify-between h-16">

            <div className="flex items-center ">
              <div className="flex-shrink-0 flex items-start gap-3">
                <Image
                  src="/logo.svg"
                  alt="Logo"
                  width={30}
                  height={40}
                  className="cursor-pointer"
                />
                <span className='font-bold text-md'>  AI Interviewer </span>

              </div>
            </div>
            <div className="flex font-chau text-lg items-center justify-between gap-5">

              <div className=' hidden md:flex flex-row items-center space-x-4'>

                <button onClick={() => { scrollToSection("home") }} className="text-gray-600 hover:text-indigo-600">Home</button>
                <button onClick={() => { scrollToSection("features") }} className="text-gray-600 hover:text-indigo-600">Features</button>

                <button onClick={() => { scrollToSection("pricing") }} className="text-gray-600 hover:text-indigo-600">Pricing</button>

                <button onClick={() => { scrollToSection("faq") }} className="text-gray-600 hover:text-indigo-600">About</button>

                <button onClick={() => { scrollToSection("contact") }} className="text-gray-600 hover:text-indigo-600">Contact</button>

              </div>
              <div className='flex flex-row items-center'>
                <Link href="/dashboard" className="px-4 rounded text-gray-600 hover:text-indigo-600">Login</Link>

                <Link href="/dashboard" className="px-4 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700">Sign Up</Link>

              </div>
            </div>
          </div>
        </div>

      </nav>


      {/* Hero Section with Modal Video */}
      <section id='home' className=" bg-gradient-to-r from-indigo-700 to-purple-600 text-white py-24 sm:pt-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="grid md:grid-cols-2 gap-12 items-center" >
            <div>
              <h1 className="text-6xl font-bebas mb-6">Ace Your Next Interview with AI-Powered Mock Interview</h1>
              <p className="text-xl font-montserrat mb-8">Get personalized interview preparation with real-time feedback, industry-specific questions, and expert tips.</p>
              <p className="text-xl font-montserrat mb-8">Make your desired Interview relavent to your Job Position, Job Skills and Experience </p>
              <div className="flex space-x-4">
                <Link href="/dashboard" className="px-6 py-3 bg-white text-indigo-700 rounded-lg font-medium hover:bg-gray-100 flex items-center">
                  Start Practicing <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <button
                  onClick={() => setShowVideoModal(true)}
                  className="px-6 py-3 border border-white text-white rounded-lg font-medium hover:bg-indigo-600 flex items-center"
                >
                  Watch Demo <Video className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
            <div className="hidden md:block">
              <Image src={mainp} alt="Interview preparation" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-indigo-600 rounded-lg shadow-lg max-w-4xl w-full">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-lg font-medium text-white">Product Demo</h3>
              <button
                onClick={() => setShowVideoModal(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <X className="h-6 w-6 text-white" />
              </button>
            </div>
            <div className="p-4">
              <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded">
                <div className="flex items-center justify-center h-full">
                  {/* Replace with actual video embed */}
                  <div className="text-center">
                    <Video className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500">Demo video player would appear here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Resume Templates Feature Showcase */}
      <section className="py-20 bg-white" id="resume-feature">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bebas text-gray-900 mb-4">ATS-Friendly Resume Templates</h2>
            <p className="text-xl font-montserrat text-gray-600 max-w-3xl mx-auto">Download professional resume templates designed to pass through Applicant Tracking Systems.</p>
            <p className="text-xl font-montserrat text-gray-600 max-w-3xl mx-auto">Customize the resume according to your needs and skills</p>
          </div>

          <div className="grid  md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                <div className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-md transition-shadow duration-300">
                  <div className="aspect-w-8 bg-white rounded shadow-sm mb-3">
                    <Image src={res1} alt="Modern resume template" className="object-fit  rounded" />
                  </div>
                  <h4 className="font-medium">Modern Template</h4>

                </div>

                <div className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-md transition-shadow duration-300">
                  <div className="aspect-w-8 aspect-h-11 bg-white rounded shadow-sm mb-3">
                    <Image src={res4} alt="Professional resume template" className="object-cover rounded" />
                  </div>
                  <h4 className="font-medium">Professional</h4>

                </div>

                <div className="bg-gray-100 hidden sm:block p-4 rounded-lg shadow hover:shadow-md transition-shadow duration-300">
                  <div className="aspect-w-8 aspect-h-11 bg-white rounded shadow-sm mb-3">
                    <Image src={res2} alt="Creative resume template" className="object-cover rounded" />
                  </div>
                  <h4 className="font-medium">Creative</h4>

                </div>

                <div className="bg-gray-100 p-4 hidden sm:block rounded-lg shadow hover:shadow-md transition-shadow duration-300">
                  <div className="aspect-w-8 aspect-h-11 bg-white rounded shadow-sm mb-3">
                    <Image src={res3} alt="Executive resume template" className="object-cover rounded" />
                  </div>
                  <h4 className="font-medium">Executive</h4>

                </div>

              </div>
            </div>

            <div className="order-1 font-montserrat md:order-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Stand Out With ATS-Optimized Templates</h3>
              <p className="text-gray-600 mb-6">Our professionally designed resume templates are built to help you get past applicant tracking systems and land more interviews.</p>

              <ul className="space-y-4">
                {[
                  'Optimized for ATS scanning technology',
                  'Professional layouts for various industries',
                  'Easy to customize and edit',
                  'Compatible with Word, Google Docs, and PDF formats',
                  'Proven formats preferred by recruiters'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <a href="/dashboard/Resume" className="w-fit mt-8 px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 flex items-center">
                View All Templates <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Bento Grid - Updated for equal sizes */}
      <section className="py-20 bg-gray-50" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bebas text-gray-900 mb-4">Features That Set Us Apart</h2>
            <p className="text-xl font-montserrat text-gray-600 max-w-3xl mx-auto">Practice interviews like never before with our comprehensive AI-powered platform.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <MessageSquare className="h-8 w-8 text-indigo-600" />,
                title: 'Real-time Feedback',
                description: 'Get instant feedback on your responses, including suggestions for improvement.'
              },
              {
                icon: <Video className="h-8 w-8 text-indigo-600" />,
                title: 'Video Interviews',
                description: 'Practice with realistic video interviews that simulate real-world scenarios.'
              },
              {
                icon: <BookOpen className="h-8 w-8 text-indigo-600" />,
                title: 'Industry-specific Questions',
                description: 'Access thousands of questions tailored to your industry and role.'
              },
              {
                icon: <Clock className="h-8 w-8 text-indigo-600" />,
                title: 'Time Management',
                description: 'Learn to structure your answers within appropriate time frames.'
              },
              {
                icon: <Users className="h-8 w-8 text-indigo-600" />,
                title: 'Peer Comparisons',
                description: 'See how your responses compare to successful candidates.'
              },
              {
                icon: <PieChart className="h-8 w-8 text-indigo-600" />,
                title: 'Performance Analytics',
                description: 'Track your progress and identify areas for improvement over time.'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white font-montserrat p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
                <div className="bg-indigo-100 p-3 rounded-full w-fit mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 flex-grow">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upgrade Plans Options */}
      <section className="py-20 bg-white" id="pricing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bebas text-gray-900 mb-4">Choose Your Plan</h2>
            <p className="text-xl font-montserrat text-gray-600 max-w-3xl mx-auto">Select the plan that best fits your interview preparation needs.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Free',
                price: '$0',
                description: 'Basic interview practice',
                features: [
                  '3 mock interviews per month',
                  'Basic feedback',
                  'Limited question bank',
                  'Text-based interviews',
                  'Resume templates'
                ],
                buttonText: 'Start Free',
                highlighted: false
              },
              {
                title: 'Pro',
                price: '$19',
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
                price: '$49',
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

                <button onClick={() => router.replace('/dashboard/Upgrade')} className={`w-full py-3 rounded-lg font-medium ${plan.highlighted
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

      {/* FAQ Questions */}
      <section className="py-20 bg-gray-50" id="faq">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bebas text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl font-montserrat text-gray-600">Got questions? We've got answers.</p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: 'How does the AI mock interview work?',
                answer: 'Our AI creates a simulated interview environment where you can practice answering industry-specific questions. The system analyzes your responses and provides feedback on your content, delivery, and body language (in video mode).'
              },
              {
                question: 'Can I practice for specific job roles?',
                answer: 'Yes! You can select from hundreds of job roles across various industries. Our AI will generate targeted questions relevant to your chosen position.'
              },
              {
                question: 'Are the resume templates really ATS-friendly?',
                answer: 'Yes, all our templates are designed specifically to be easily read by Applicant Tracking Systems. They use standard fonts, proper formatting, and appropriate section headers that ATS software can recognize.'
              },
              {
                question: 'Can I record my practice interviews?',
                answer: 'Yes, all video interviews can be recorded and saved to your account for later review. This feature is available on the Pro and Teams plans.'
              },
              {
                question: 'How do I cancel my subscription?',
                answer: 'You can cancel your subscription anytime from your account settings. Your access will continue until the end of your current billing period.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white font-montserrat p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600">Still have questions?</p>
            <Link href="/contact" className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-700 mt-2">
              Ask From Below<ArrowDown className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white" id="contact">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bebas text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl font-montserrat text-gray-600 max-w-3xl mx-auto">Have questions or feedback? Send us a message.</p>
          </div>

          <div className="bg-gray-50 font-montserrat rounded-xl p-8 shadow-sm">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-md font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-md font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-md font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="How can we help you?"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-md font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Your message here..."
                  required
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full md:w-auto px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 flex items-center justify-center"
                >
                  Send Message <Send className="ml-2 h-5 w-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid  md:grid-cols-4 gap-8  ">
            <div >

              <div className="flex-shrink-0 flex items-center  gap-3 mb-4">
                <Image
                  src="/logo.svg"
                  alt="Logo"
                  width={30}
                  height={40}
                  className="cursor-pointer"
                />
                <span className='font-bold text-xl'>  AI Interviewer </span>

              </div>
              <p className="mb-4 font-montserrat">Helping you prepare for your dream job with AI-powered interview practice.</p>

              <div className="flex space-x-4 pt-3 text-center">

                <a href="#" className="hover:text-white hover:bg-blue-400 p-1 rounded-full">
                  <span className="sr-only">Linkedin</span>
                  <Linkedin />
                </a>
                <a href="#" className="hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <Twitter />
                </a>
                <a href="#" className="hover:text-white">
                  <span className="sr-only">Github</span>
                  <Github />
                </a>
                <a href="#" className="hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <Facebook />
                </a>
                <a href="#" className="hover:text-white">
                  <span className="sr-only">Instagram</span>
                  <Instagram />
                </a>

              </div>
            </div>


            <div className='md:text-center' >
              <h4 className="text-white text-2xl font-bebas mb-4">Features</h4>
              <ul className="space-y-2 font-montserrat">
                <li><Link href="#" className="hover:text-white">Resume Templates</Link></li>
                <li><Link href="#" className="hover:text-white">Mock Interviews</Link></li>
                <li><Link href="#" className="hover:text-white">Real-time Feedback</Link></li>
                <li><Link href="#" className="hover:text-white">Performance Analytics</Link></li>
              </ul>
            </div>

            <div className='md:text-center'>
              <h4 className="text-white text-2xl font-bebas mb-4">Resources</h4>
              <ul className="space-y-2 font-montserrat">
                <li><Link href="#" className="hover:text-white">Blog</Link></li>
                <li><Link href="#" className="hover:text-white">Tutorials</Link></li>
                <li><Link href="#" className="hover:text-white">Interview Guides</Link></li>
                <li><Link href="#" className="hover:text-white">Success Stories</Link></li>
              </ul>
            </div>


            <div className='md:text-center'>
              <h4 className="text-white text-2xl font-bebas mb-4">Company</h4>
              <ul className="space-y-2 font-montserrat">
                <li><button onClick={() => { scrollToSection("faq") }} className="hover:text-white">About Us</button></li>
                <li><button onClick={() => { scrollToSection("contact") }} className="hover:text-white">Contact</button></li>
                {/* <li><Link href="#" className="hover:text-white">Careers</Link></li> */}
                <li><Link href="/PrivacyPolicy" className="hover:text-white">Privacy Policy</Link></li>
                <li><Link href="/TermsofService" className="hover:text-white">Terms of Service</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t font-montserrat border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="mt-4 md:mt-0">
              <h3>Made with ❤️ by Syntax Error</h3>
            </div>
            <div className='mt-4 md:mt-0'>
              <p>&copy; {new Date().getFullYear()} InterviewAI. All rights reserved.</p>
            </div>
            <div className="mt-4 md:mt-0">
              <h3>Powered by Gemini</h3>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

