import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-100 py-8 mt-6 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          <div className="w-full mb-3 md:mb-0">
            <ul className="flex flex-wrap gap-4 text-xs">
              <li>
                <Link href="/" className="text-gray-500 hover:text-gray-700">
                  Help
                </Link>
              </li>
              <li>
                <Link href="/status" className="text-gray-500 hover:text-gray-700">
                  Status
                </Link>
              </li>
              <li>
                <Link href="/writers" className="text-gray-500 hover:text-gray-700">
                  Writers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-500 hover:text-gray-700">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-500 hover:text-gray-700">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-500 hover:text-gray-700">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-500 hover:text-gray-700">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-500 hover:text-gray-700">
                  About
                </Link>
              </li>
              <li>
                <Link href="/text-to-speech" className="text-gray-500 hover:text-gray-700">
                  Text to speech
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-6 text-gray-400 text-xs">
          <p>© {currentYear} Medium</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 