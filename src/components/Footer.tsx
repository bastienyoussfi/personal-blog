import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 py-6 mt-6 bg-white text-sm">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-wrap justify-between text-gray-500">
          <div className="w-full md:w-auto mb-3 md:mb-0">
            <ul className="flex flex-wrap gap-3 text-xs">
              <li>
                <Link href="/" className="hover:text-gray-900">
                  Help
                </Link>
              </li>
              <li>
                <Link href="/status" className="hover:text-gray-900">
                  Status
                </Link>
              </li>
              <li>
                <Link href="/writers" className="hover:text-gray-900">
                  Writers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-gray-900">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-gray-900">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-gray-900">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-gray-900">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gray-900">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-3 text-gray-400 text-xs">
          <p>© {currentYear} Medium.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 