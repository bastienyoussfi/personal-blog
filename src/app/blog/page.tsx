import Image from "next/image";
import Link from "next/link";

// Temporary blog post data - in a real app this would come from a database or CMS
const blogPosts = [
  {
    id: 'getting-started-with-nextjs',
    title: 'Getting Started with Next.js and the App Router',
    excerpt: 'Learn how to build modern web applications with Next.js and its new App Router architecture. This guide covers the basics and best practices.',
    date: 'May 15, 2023',
    author: {
      name: 'John Doe',
      image: '/images/author-1.jpg'
    },
    coverImage: '/images/post-1.jpg',
    categories: ['Next.js', 'React', 'Web Development']
  },
  {
    id: 'mastering-typescript',
    title: 'Mastering TypeScript: Tips and Tricks',
    excerpt: 'Take your TypeScript skills to the next level with these advanced tips and tricks that will make your code more robust.',
    date: 'June 20, 2023',
    author: {
      name: 'Jane Smith',
      image: '/images/author-2.jpg'
    },
    coverImage: '/images/post-2.jpg',
    categories: ['TypeScript', 'JavaScript', 'Programming']
  },
  {
    id: 'tailwind-css-techniques',
    title: 'Advanced Tailwind CSS Techniques',
    excerpt: 'Discover advanced techniques for using Tailwind CSS to create beautiful and responsive user interfaces without writing custom CSS.',
    date: 'July 5, 2023',
    author: {
      name: 'Alex Johnson',
      image: '/images/author-3.jpg'
    },
    coverImage: '/images/post-3.jpg',
    categories: ['CSS', 'Tailwind', 'UI Design']
  },
  {
    id: 'react-performance-optimization',
    title: 'React Performance Optimization',
    excerpt: 'Learn how to identify and fix performance issues in your React applications to provide a better user experience.',
    date: 'August 12, 2023',
    author: {
      name: 'Michael Brown',
      image: '/images/author-4.jpg'
    },
    coverImage: '/images/post-4.jpg',
    categories: ['React', 'Performance', 'JavaScript']
  },
  {
    id: 'building-accessible-websites',
    title: 'Building Accessible Websites: A Comprehensive Guide',
    excerpt: 'Learn how to create websites that are accessible to everyone, including people with disabilities. This guide covers WCAG guidelines and practical implementation.',
    date: 'September 3, 2023',
    author: {
      name: 'John Doe',
      image: '/images/author-1.jpg'
    },
    coverImage: '/images/post-1.jpg',
    categories: ['Accessibility', 'HTML', 'Web Development']
  },
  {
    id: 'introduction-to-docker',
    title: 'Introduction to Docker for Developers',
    excerpt: 'Learn the basics of Docker and how to use it to simplify your development workflow. This guide covers containers, images, and Docker Compose.',
    date: 'October 15, 2023',
    author: {
      name: 'Jane Smith',
      image: '/images/author-2.jpg'
    },
    coverImage: '/images/post-2.jpg',
    categories: ['Docker', 'DevOps', 'Development']
  }
];

export const metadata = {
  title: 'Blog | Personal Blog',
  description: 'Read the latest articles on web development, programming, and technology.',
};

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">Blog</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Thoughts, ideas, and experiences on technology, programming, and life.
        </p>
      </header>

      <div className="flex mb-8">
        <div className="flex-grow border-t border-gray-200"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <article key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col h-full">
            <div className="relative h-48 w-full">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <div className="flex flex-wrap gap-2 mb-3">
                {post.categories.map((category, index) => (
                  <span 
                    key={index} 
                    className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full"
                  >
                    {category}
                  </span>
                ))}
              </div>
              <h2 className="text-xl font-bold mb-2 hover:text-gray-600 text-gray-900">
                <Link href={`/blog/${post.id}`}>
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600 text-sm mb-4 flex-grow">{post.excerpt}</p>
              <div className="flex items-center mt-4">
                <div className="h-8 w-8 rounded-full overflow-hidden relative mr-3">
                  <Image
                    src={post.author.image}
                    alt={post.author.name}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{post.author.name}</p>
                  <p className="text-xs text-gray-500">{post.date}</p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
} 