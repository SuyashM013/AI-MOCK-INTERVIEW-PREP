import React from 'react'

import Image from "next/image";

import {
  Linkedin,
  Github,
  Facebook,
  Instagram,
  Twitter,

} from 'lucide-react';

import Link from 'next/link';

function Footer() {

   
    return (
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
                            <li><Link href="/" className="hover:text-white">About Us</Link></li>
                            <li><Link href="/" className="hover:text-white">Contact</Link></li>
                            
                            <li><Link href="/./PrivacyPolicy" className="hover:text-white">Privacy Policy</Link></li>
                            <li><Link href="/./TermsofService" className="hover:text-white">Terms of Service</Link></li>
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
    )
}

export default Footer