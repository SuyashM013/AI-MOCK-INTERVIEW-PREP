'use client'
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { UserButton } from '@clerk/nextjs';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();

  return (

    <nav className="bg-primary/20 mx-5 my-5 rounded-3xl  md:rounded-full md:mx-20 lg:mx-36 shadow-md">
      <div className="max-w-6xl mx-auto px-5">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="flex flex-shrink-0 gap-3 items-center">
            <span>
              <Image
                src="/logo.svg"
                alt="Logo"
                width={30}
                height={40}
                className="cursor-pointer"
              />

            </span>
            <span className='font-bold text-md'>  AI Interviewer </span>

          </div>

          {/* Desktop Menu */}
          <div className="hidden font-chau text-lg md:flex space-x-8">
            <Link
              href="/dashboard"
              className={` hover:text-primary
              ${path == '/dashboard' && 'text-primary'}`}
            >Dashboard</Link>

            <Link href="/dashboard/Upgrade" className={` hover:text-primary
              ${path == '/dashboard/Upgrade' && 'text-primary '}`}>Upgrade</Link>

            <Link href="/dashboard/Resume" className={` hover:text-primary
              ${path == '/Resume' && 'text-primary '}`}>Resume</Link>

            <Link href="/dashboard/Contact" className={` hover:text-primary
              ${path == '/Contact' && 'text-primary '}`}>Contact</Link>

          </div>

          <div className='flex gap-5 items-center  font-chau text-xl  justify-center'>
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
          <div className="md:hidden font-chau text-lg ">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/dashboard"
                className={`block px-3 py-2   hover:text-primary  rounded-md
                  ${path == '/dashboard' && 'text-primary '}`}
              >
                Dashboard
              </Link>

              <Link
                href="/dashboard/Upgrade"
                className={`block px-3 py-2   hover:text-primary  rounded-md
                  ${path == '/dashboard/Upgrade' && 'text-primary '}`}
              >
                Upgrade
              </Link>
              <Link
                href="/dashboard/Resume"
                className={`block px-3 py-2   hover:text-primary  rounded-md
                  ${path == '/Resume' && 'text-primary '}`}
              >
                Resume
              </Link>

              <Link href="/dashboard/Contact" className={`block px-3 py-2   hover:text-primary  rounded-md
              ${path == '/Contact' && 'text-primary '}`}>Contact</Link>

            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Header;
