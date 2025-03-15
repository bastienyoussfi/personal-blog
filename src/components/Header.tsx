'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b border-[var(--medium-border)] py-4 bg-white sticky top-0 z-10">
      <div className="mx-auto px-6">
        <div className="flex justify-center items-center h-10">
          <div className="flex items-center">
            <Link href="/" className="font-serif text-4xl font-medium text-[var(--foreground)] mr-6 flex items-center">
            <Image src="/logo.png" alt="Ink" width={50} height={20} />
              Ink
            </Link>
          </div>

          <button 
            className="md:hidden p-1.5 text-[var(--foreground)]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path 
                  stroke="currentColor" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="1.5" 
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path 
                  stroke="currentColor" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="1.5" 
                  d="M4.75 5.75h14.5M4.75 12h14.5M4.75 18.25h14.5"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[var(--background)] border-b border-[var(--medium-border)] py-4 px-6 z-20">
          <div className="flex flex-col space-y-4">
            <div className="pt-2">
              <div className="flex items-center bg-[var(--secondary-light)] rounded-full px-3 py-1.5 text-sm">
                <svg className="h-4 w-4 text-[var(--medium-gray)] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input 
                  type="text" 
                  placeholder="Search" 
                  className="bg-transparent focus:outline-none text-sm w-full"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 