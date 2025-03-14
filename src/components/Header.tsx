'use client';

import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b border-[var(--medium-border)] py-4 bg-white sticky top-0 z-10">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex justify-between items-center h-10">
          <div className="flex items-center">
            <Link href="/" className="font-serif text-4xl font-medium text-[var(--foreground)] mr-6">
              Ink
            </Link>
            
            <div className="hidden md:flex relative">
              <div className="flex items-center bg-[var(--secondary-light)] rounded-full px-3 py-1 text-sm">
                <svg className="h-4 w-4 text-[var(--medium-gray)] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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

          <div className="hidden md:flex items-center space-x-6">
            <Link href="/about" className="text-[var(--foreground)] hover:text-[var(--accent)] transition-colors">
              About
            </Link>
            <Link 
              href="/write" 
              className="bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-[var(--foreground)] px-4 py-2 rounded-full text-sm font-medium transition-colors"
            >
              Write
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
            <Link 
              href="/about" 
              className="text-[var(--foreground)] hover:text-[var(--accent)]"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/blog" 
              className="text-[var(--foreground)] hover:text-[var(--accent)]"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              href="/write" 
              className="inline-block bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-[var(--foreground)] px-4 py-2 rounded-full text-sm font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Write
            </Link>
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