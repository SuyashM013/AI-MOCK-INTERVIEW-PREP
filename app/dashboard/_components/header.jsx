'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { UserButton } from '@clerk/nextjs';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();

  // useEffect(() => {
  //   console.log(path)
  // }, [])

  return (
    <nav className="bg-primary/20 mx-5 my-5 rounded-3xl sm:rounded-full lg:max-w-screen-xl shadow-lg md:mx-auto md:max-w-4xl ">
      <div className="max-w-6xl mx-auto px-5">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={30}
              height={40}
              className="cursor-pointer"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link
              href="/dashboard"
              className={` hover:text-primary
              ${path == '/dashboard' && 'text-primary font-bold'}`}
            >Dashboard</Link>

            <Link href="/dashboard/questions" className={` hover:text-primary
              ${path == '/dashboard/questions' && 'text-primary font-bold'}`}>Questions</Link>

            <Link href="/dashboard/upgrade" className={` hover:text-primary
              ${path == '/dashboard/upgrade' && 'text-primary font-bold'}`}>Upgrade</Link>

            <Link href="/dashboard/how" className={` hover:text-primary
              ${path == '/dashboard/how' && 'text-primary font-bold'}`}>Resume</Link>

          </div>

          <div className='flex gap-5 items-center justify-center'>
            {/* Hamburger Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-gray-900 focus:outline-none transition-all"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
            <UserButton />
          </div>

        </div>



        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/dashboard"
                className={`block px-3 py-2   hover:text-primary  rounded-md
                  ${path == '/dashboard' && 'text-primary font-bold'}`}
              >
                Dashboard
              </Link>
              <Link
                href="/dashboard/questions"
                className={`block px-3 py-2   hover:text-primary  rounded-md
                  ${path == '/dashboard/questions' && 'text-primary font-bold'}`}
              >
                Questions
              </Link>
              <Link
                href="/dashboard/upgrade"
                className={`block px-3 py-2   hover:text-primary  rounded-md
                  ${path == '/dashboard/upgrade' && 'text-primary font-bold'}`}
              >
                Upgrade
              </Link>
              <Link
                href="/dashboard/how"
                className={`block px-3 py-2   hover:text-primary  rounded-md
                  ${path == '/dashboard/how' && 'text-primary font-bold'}`}
              >
                Resume
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Header;
