import Image from "next/image";

export const metadata = {
  title: 'About | Personal Blog',
  description: 'Learn more about the author and the purpose of this blog.',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">About Me</h1>
        
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
          <div className="w-48 h-48 relative rounded-full overflow-hidden flex-shrink-0">
            <Image
              src="/images/author-1.jpg"
              alt="Author"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">John Doe</h2>
            <p className="text-gray-600 mb-4">
              Hi there! I&apos;m a passionate web developer and writer with a love for creating elegant solutions to complex problems.
              This blog is my space to share thoughts, ideas, and experiences related to web development, programming, and technology.
            </p>
            <p className="text-gray-600">
              When I&apos;m not coding or writing, you can find me hiking in the mountains, reading a good book, or experimenting with new recipes in the kitchen.
            </p>
          </div>
        </div>
        
        <div className="prose prose-lg max-w-none text-gray-800">
          <h2>About This Blog</h2>
          <p>
            This personal blog was created as a platform to share knowledge, insights, and experiences with the wider developer community.
            The content focuses primarily on web development, programming best practices, and emerging technologies.
          </p>
          
          <p>
            The blog is built with Next.js and features a clean, minimalist design inspired by Medium. It leverages the latest features of Next.js,
            including the App Router, Server Components, and optimized image loading.
          </p>
          
          <h2>My Expertise</h2>
          <p>
            With over 5 years of experience in web development, I specialize in:
          </p>
          
          <ul>
            <li>Frontend development with React and Next.js</li>
            <li>TypeScript and JavaScript</li>
            <li>UI/UX design principles</li>
            <li>Performance optimization</li>
            <li>Responsive and accessible web design</li>
          </ul>
          
          <h2>Connect With Me</h2>
          <p>
            I love connecting with fellow developers and tech enthusiasts. Feel free to reach out to me on social media or via email.
          </p>
          
          <div className="flex space-x-4 mt-6">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 