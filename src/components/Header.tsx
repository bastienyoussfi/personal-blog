'use client';

import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b border-gray-200 py-2.5 bg-white sticky top-0 z-10">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex justify-between items-center h-10">
          <div className="flex items-center">
            <Link href="/" className="font-serif text-2xl font-bold text-gray-900 mr-6">
              Medium
            </Link>
            
            <div className="hidden md:flex relative">
              <div className="flex items-center bg-gray-50 rounded-full px-3 py-1 text-sm">
                <svg className="h-4 w-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input 
                  type="text" 
                  placeholder="Search" 
                  className="bg-transparent focus:outline-none text-sm w-28 lg:w-36"
                />
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-3">
            <Link 
              href="/write" 
              className="flex items-center text-sm text-gray-600 hover:text-gray-900"
            >
              <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
              Write
            </Link>
            <Link 
              href="/sign-up" 
              className="px-3 py-1.5 rounded-full bg-green-600 text-white text-sm font-medium hover:bg-green-700 transition-colors"
            >
              Sign up
            </Link>
            <Link 
              href="/sign-in" 
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              Sign in
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              type="button" 
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 bg-white">
            <div className="relative mb-4">
              <div className="flex items-center bg-gray-50 rounded-full px-3 py-1">
                <svg className="h-4 w-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input 
                  type="text" 
                  placeholder="Search" 
                  className="bg-transparent focus:outline-none text-sm w-full"
                />
              </div>
            </div>
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/write" 
                className="flex items-center text-gray-600 hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
                Write
              </Link>
              <Link 
                href="/sign-up" 
                className="px-3 py-1.5 rounded-full bg-green-600 text-white text-sm font-medium hover:bg-green-700 transition-colors inline-block w-fit"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign up
              </Link>
              <Link 
                href="/sign-in" 
                className="text-gray-600 hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign in
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 