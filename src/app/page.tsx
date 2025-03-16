import Image from "next/image";
import Link from "next/link";

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
  coverImage: '/images/1.jpeg'
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
    coverImage: '/images/2.jpeg'
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
    coverImage: '/images/3.jpeg'
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
    coverImage: '/images/4.jpeg'
  }
];

const posts = [
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
  coverImage: '/images/2.jpeg'
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
  coverImage: '/images/3.jpeg'
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
  coverImage: '/images/4.jpeg'
}
]

// Creator information
const creatorInfo = {
  name: 'Bastien Yousfi',
  title: 'Full Stack Engineer & Tech Writer',
  bio: 'I create modern web experiences using React, TypeScript, and Next.js. Sharing my journey, insights, and lessons learned in software engineering.',
  image: '/images/profile.jpeg',
  portfolioUrl: '/portfolio',
  socialLinks: [
    { name: 'GitHub', url: 'https://github.com/yourusername' },
    { name: 'Twitter', url: 'https://twitter.com/yourusername' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/yourusername' },
  ]
};

export default function Home() {
  return (
    <div className="bg-white pb-10">
      <div className="max-w-5xl mx-auto px-6">
        {/* Latest Stories Heading */}
        <div className="pt-8 pb-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Latest articles</h2>
        </div>

        {/* Featured Post - Medium Style */}
        <section className="py-8 border-b border-gray-200">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <div className="relative aspect-[16/9] w-full rounded-sm overflow-hidden mb-4">
                <Link href={`/blog/${featuredPost.id}`}>
                <Image
                  src={featuredPost.coverImage}
                  alt={featuredPost.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
                </Link>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <Link href={`/blog/${featuredPost.id}`} className="group">
                <h2 className="text-2xl font-bold mb-2 text-gray-900 leading-tight group-hover:text-gray-700 cursor-pointer">{featuredPost.title}</h2>
              </Link>
              <p className="text-gray-600 text-base mb-4">{featuredPost.excerpt}</p>
              
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full overflow-hidden relative mr-3">
                  <Image
                    src={featuredPost.author.image}
                    alt={featuredPost.author.name}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div>
                  <div className="text-gray-800 text-sm font-medium">{featuredPost.author.name}</div>
                  <div className="flex items-center text-gray-500 text-xs">
                    <span>{featuredPost.date}</span>
                    <span className="mx-1">•</span>
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Three Story Cards Layout - Similar to Medium */}
        <section className="py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <article key={post.id} className="flex flex-col">
                <Link href={`/blog/${post.id}`} className="block mb-4">
                  <div className="relative aspect-[4/3] w-full rounded-sm overflow-hidden">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </Link>
                
                <Link href={`/blog/${post.id}`} className="group">
                  <h3 className="text-lg font-bold mb-1 text-gray-900 leading-tight group-hover:text-gray-700 cursor-pointer">{post.title}</h3>
                </Link>
                
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{post.excerpt}</p>
                
                <div className="mt-auto">
                  <div className="flex items-center">
                    <div className="h-6 w-6 rounded-full overflow-hidden relative mr-2">
                      <Image
                        src={post.author.image}
                        alt={post.author.name}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div>
                      <div className="text-gray-700 text-sm">{post.author.name}</div>
                      <div className="flex items-center text-gray-500 text-xs">
                        <span>{post.date}</span>
                        <span className="mx-1">•</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Creator/Portfolio Promotion Card */}
        <section className="py-10 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-6 border-b border-gray-200 pb-4">Meet the Author</h2>
          
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg shadow-sm overflow-hidden border border-gray-200">
            <div className="flex flex-col md:flex-row">
              {/* Creator Image Side */}
              <div className="md:w-2/5 relative">
                <div className="relative h-64 md:h-full w-full overflow-hidden">
                  <Image
                    src={creatorInfo.image}
                    alt={creatorInfo.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
              </div>
              
              {/* Creator Info Side */}
              <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{creatorInfo.name}</h3>
                  <p className="text-gray-600 font-medium mb-4">{creatorInfo.title}</p>
                  <p className="text-gray-600 mb-6">{creatorInfo.bio}</p>
                </div>
                
                <div>
                  <div className="flex space-x-4 mb-4">
                    {creatorInfo.socialLinks.map((link, index) => (
                      <a 
                        key={index} 
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                  
                  <Link 
                    href={creatorInfo.portfolioUrl}
                    className="inline-block bg-gray-900 hover:bg-gray-800 text-white font-medium py-2 px-6 rounded-md transition-colors duration-200"
                  >
                    View My Portfolio
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rest of the articles */}
        <section className="py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="flex flex-col">
                <Link href={`/blog/${post.id}`} className="block mb-4">
                  <div className="relative aspect-[4/3] w-full rounded-sm overflow-hidden">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </Link>
                
                <Link href={`/blog/${post.id}`} className="group">
                  <h3 className="text-lg font-bold mb-1 text-gray-900 leading-tight group-hover:text-gray-700 cursor-pointer">{post.title}</h3>
                </Link>
                
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{post.excerpt}</p>
                
                <div className="mt-auto">
                  <div className="flex items-center">
                    <div className="h-6 w-6 rounded-full overflow-hidden relative mr-2">
                      <Image
                        src={post.author.image}
                        alt={post.author.name}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div>
                      <div className="text-gray-700 text-sm">{post.author.name}</div>
                      <div className="flex items-center text-gray-500 text-xs">
                        <span>{post.date}</span>
                        <span className="mx-1">•</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
