import Image from "next/image";
import Link from "next/link";
import { getFeaturedArticle, getRecentArticles, getAllArticles } from '@/lib/firebase';

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

export default async function Home() {
  // Fetch data from Firebase
  const featuredPost = await getFeaturedArticle();
  const recentPosts = await getRecentArticles(3);
  const posts = await getAllArticles();
  
  // Fallback to empty data if Firebase fetch fails
  const featured = featuredPost || {
    id: 'default-post',
    title: 'No Featured Post Available',
    excerpt: 'Please add articles to your Firebase database.',
    date: 'Current Date',
    readTime: '0 min read',
    author: {
      name: 'Author',
      image: '/images/author-1.jpg'
    },
    coverImage: '/images/1.jpeg'
  };

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
                <Link href={`/blog/${featured.id}`}>
                <Image
                  src={featured.coverImage}
                  alt={featured.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
                </Link>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <Link href={`/blog/${featured.id}`} className="group">
                <h2 className="text-2xl font-bold mb-2 text-gray-900 leading-tight group-hover:text-gray-700 cursor-pointer">{featured.title}</h2>
              </Link>
              <p className="text-gray-600 text-base mb-4">{featured.excerpt}</p>
              
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full overflow-hidden relative mr-3">
                  <Image 
                    src={featured.author.image}
                    alt={featured.author.name}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div>
                  <p className="text-sm font-medium">{featured.author.name}</p>
                  <div className="text-xs text-gray-500">
                    <span>{featured.date}</span>
                    <span className="mx-1">•</span>
                    <span>{featured.readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Three Story Cards Layout - Similar to Medium */}
        <section className="py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentPosts.map(post => (
              <div key={post.id} className="flex flex-col">
                <div className="relative aspect-[16/9] w-full rounded-sm overflow-hidden mb-4">
                  <Link href={`/blog/${post.id}`}>
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </Link>
                </div>
                
                <Link href={`/blog/${post.id}`} className="group">
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 leading-tight group-hover:text-gray-700">{post.title}</h3>
                </Link>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                
                <div className="flex items-center mt-auto">
                  <div className="relative w-6 h-6 rounded-full overflow-hidden mr-2">
                    <Image 
                      src={post.author.image}
                      alt={post.author.name}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="text-xs">
                    <p className="font-medium">{post.author.name}</p>
                    <div className="text-gray-500">
                      <span>{post.date}</span>
                      <span className="mx-1">•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* More Articles */}
        <section className="py-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">More from the blog</h2>
          
          <div className="space-y-8">
            {posts.slice(0, 5).map(post => (
              <div key={post.id} className="flex flex-col md:flex-row gap-6 pb-8 border-b border-gray-100">
                <div className="md:w-1/4">
                  <Link href={`/blog/${post.id}`}>
                    <div className="relative aspect-[4/3] w-full rounded-sm overflow-hidden">
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                  </Link>
                </div>
                
                <div className="md:w-3/4 flex flex-col justify-center">
                  <Link href={`/blog/${post.id}`} className="group">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 leading-tight group-hover:text-gray-700">{post.title}</h3>
                  </Link>
                  
                  <p className="text-gray-600 text-base mb-4">{post.excerpt}</p>
                  
                  <div className="flex items-center">
                    <div className="relative w-6 h-6 rounded-full overflow-hidden mr-2">
                      <Image 
                        src={post.author.image}
                        alt={post.author.name}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="text-xs">
                      <p className="font-medium">{post.author.name}</p>
                      <div className="text-gray-500">
                        <span>{post.date}</span>
                        <span className="mx-1">•</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* About the Creator */}
        <section className="py-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">About the author</h2>
          
          <div className="bg-gray-50 rounded-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/5 relative">
                <div className="relative aspect-[3/4] h-full">
                  <Image 
                    src={creatorInfo.image}
                    alt={creatorInfo.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                  />
                </div>
              </div>
              
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
      </div>
    </div>
  );
}
