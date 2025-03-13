import Image from "next/image";

// Temporary blog post data - in a real app this would come from a database or CMS
const featuredPost = {
  id: 'making-featured-stories-visible',
  title: 'Making Featured stories even more visible',
  excerpt: 'Introducing new push notifications and Featured story feeds for publication followers',
  date: 'Feb 20, 2025',
  readTime: '2 min read',
  author: {
    name: 'Melissa DePuydt',
    image: '/images/author-1.jpg'
  },
  coverImage: '/images/post-1.jpg'
};

const recentPosts = [
  {
    id: 'mastering-typescript',
    title: 'Mastering TypeScript: Tips and Tricks',
    excerpt: 'Take your TypeScript skills to the next level with these advanced tips and tricks that will make your code more robust.',
    date: 'June 20, 2023',
    readTime: '5 min read',
    author: {
      name: 'Jane Smith',
      image: '/images/author-2.jpg'
    },
    coverImage: '/images/post-2.jpg'
  },
  {
    id: 'tailwind-css-techniques',
    title: 'Advanced Tailwind CSS Techniques',
    excerpt: 'Discover advanced techniques for using Tailwind CSS to create beautiful and responsive user interfaces without writing custom CSS.',
    date: 'July 5, 2023',
    readTime: '4 min read',
    author: {
      name: 'Alex Johnson',
      image: '/images/author-3.jpg'
    },
    coverImage: '/images/post-3.jpg'
  },
  {
    id: 'react-performance-optimization',
    title: 'React Performance Optimization',
    excerpt: 'Learn how to identify and fix performance issues in your React applications to provide a better user experience.',
    date: 'August 12, 2023',
    readTime: '6 min read',
    author: {
      name: 'Michael Brown',
      image: '/images/author-4.jpg'
    },
    coverImage: '/images/post-4.jpg'
  }
];

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-6 bg-white">
      {/* Featured Section */}
      <section className="mb-12">
        <div className="flex items-center mb-6">
          <div className="w-5 h-5 mr-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" />
            </svg>
          </div>
          <h2 className="text-sm font-medium text-gray-900">Featured</h2>
        </div>
        
        <article className="border-b border-gray-200 pb-10 mb-10">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-7/12">
              <div className="flex items-center mb-2">
                <div className="h-6 w-6 rounded-full overflow-hidden relative mr-2">
                  <Image
                    src={featuredPost.author.image}
                    alt={featuredPost.author.name}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <span className="text-gray-700 text-sm">{featuredPost.author.name}</span>
              </div>
              <h2 className="text-xl font-bold mb-1 text-gray-900 leading-tight">{featuredPost.title}</h2>
              <p className="text-gray-600 text-base mb-2 leading-snug">{featuredPost.excerpt}</p>
              <div className="flex items-center text-gray-500 text-xs">
                <span>{featuredPost.date}</span>
                <span className="mx-1">•</span>
                <span>{featuredPost.readTime}</span>
              </div>
            </div>
            
            <div className="md:w-5/12">
              <div className="relative aspect-[4/3] w-full rounded-sm overflow-hidden">
                <Image
                  src={featuredPost.coverImage}
                  alt={featuredPost.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </div>
            </div>
          </div>
        </article>
      </section>

      {/* Recent Posts */}
      <section>
        <div className="space-y-10">
          {recentPosts.map((post) => (
            <article key={post.id} className="border-b border-gray-200 pb-10">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-7/12">
                  <div className="flex items-center mb-2">
                    <div className="h-6 w-6 rounded-full overflow-hidden relative mr-2">
                      <Image
                        src={post.author.image}
                        alt={post.author.name}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <span className="text-gray-700 text-sm">{post.author.name}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-1 text-gray-900 leading-tight">{post.title}</h3>
                  <p className="text-gray-600 text-sm mb-2 line-clamp-2 leading-snug">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500 text-xs">
                      <span>{post.date}</span>
                      <span className="mx-1">•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <button className="hover:text-gray-600">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                        </svg>
                      </button>
                      <button className="ml-3 hover:text-gray-600">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-5/12">
                  <div className="relative aspect-[4/3] w-full rounded-sm overflow-hidden">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
