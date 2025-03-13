import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// Define the blog post type with all required properties
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: {
    name: string;
    image: string;
  };
  coverImage: string;
  categories: string[];
  content: string;
  readTime?: string;
}

// Temporary blog post data - in a real app this would come from a database or CMS
const blogPosts: BlogPost[] = [
  {
    id: 'making-featured-stories-visible',
    title: 'Making Featured stories even more visible',
    excerpt: 'Introducing new push notifications and Featured story feeds for publication followers',
    date: 'Feb 20, 2025',
    author: {
      name: 'Melissa DePuydt',
      image: '/images/author-1.jpg'
    },
    coverImage: '/images/post-1.jpg',
    categories: ['Medium', 'Publishing', 'Content'],
    content: `
      <p>A few months ago, we launched Featured stories for publications as a way for publication editors to directly influence story recommendations for their followers. Since then, our team has released multiple improvements, making Featured stories visible in stats and post page labels.</p>
      
      <h2>New Distribution Channels</h2>
      <p>Now, we're excited to give Featured stories even wider distribution and more prominent placement on each user's logged-in Homepage — great news for both writers and readers. Over the next few weeks, we'll be rolling out new Featured story push notifications and new "Featured" story Homepage feeds for publication followers.</p>
      
      <p>For writers, this means even more people seeing your Featured stories. For readers, it will be easier than ever to see Featured stories from all of the publications you follow.</p>
      
      <h2>Push Notifications</h2>
      <p>Publication followers will start receiving push notifications when new stories are featured. These notifications will help improve the visibility of featured content and drive more readers to these stories.</p>
      
      <h2>Homepage Feed Integration</h2>
      <p>Featured stories will now appear more prominently in users' homepage feeds, with special designation to help them stand out among other content. This change will help publication editors ensure their best content reaches their audience.</p>
      
      <h2>Analytics and Insights</h2>
      <p>We're also improving the analytics available to publication editors, making it easier to track the performance of featured stories and understand their impact.</p>
      
      <h2>What's Next</h2>
      <p>We're continuing to work on new ways to improve the distribution and visibility of quality content on Medium. Stay tuned for more updates in the coming months as we roll out additional features for both publications and individual writers.</p>
    `
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
    categories: ['TypeScript', 'JavaScript', 'Web Development'],
    content: `
      <p>TypeScript has become an essential tool for modern web development, providing strong typing and advanced features that help developers write more robust and maintainable code.</p>
      
      <h2>Advanced Type Techniques</h2>
      <p>TypeScript's type system is powerful and flexible. Here are some advanced techniques you can use:</p>
      
      <h3>Conditional Types</h3>
      <p>Conditional types allow you to create types that depend on other types:</p>
      
      <pre><code>type IsString<T> = T extends string ? true : false;
type A = IsString<string>; // true
type B = IsString<number>; // false</code></pre>
      
      <h3>Mapped Types</h3>
      <p>Mapped types allow you to transform the properties of an existing type:</p>
      
      <pre><code>type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};</code></pre>
      
      <h2>Utility Functions</h2>
      <p>TypeScript provides several utility types that can help you work with existing types:</p>
      
      <ul>
        <li><strong>Partial<T></strong>: Makes all properties in T optional</li>
        <li><strong>Required<T></strong>: Makes all properties in T required</li>
        <li><strong>Pick<T, K></strong>: Creates a type with only the specified properties</li>
        <li><strong>Omit<T, K></strong>: Creates a type without the specified properties</li>
      </ul>
      
      <h2>Performance Optimization</h2>
      <p>When working with large TypeScript projects, compilation time can become an issue. Here are some tips to improve performance:</p>
      
      <ul>
        <li>Use project references for large codebases</li>
        <li>Enable incremental compilation</li>
        <li>Optimize your tsconfig.json settings</li>
      </ul>
      
      <p>By applying these tips and tricks, you can take your TypeScript skills to the next level and write more maintainable, type-safe code.</p>
    `
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
    categories: ['CSS', 'Tailwind', 'Frontend'],
    content: `
      <p>Tailwind CSS has revolutionized the way developers approach styling web applications. Its utility-first approach provides a flexible and efficient way to create beautiful user interfaces without writing custom CSS.</p>
      
      <h2>Custom Plugin Development</h2>
      <p>Tailwind allows you to extend its functionality through plugins. Here's how you can create a custom plugin:</p>
      
      <pre><code>// tailwind.config.js
const plugin = require('tailwindcss/plugin')

module.exports = {
  plugins: [
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-sm': {
          textShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
        },
        '.text-shadow': {
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        },
      }
      addUtilities(newUtilities)
    })
  ]
}</code></pre>
      
      <h2>Responsive Design Patterns</h2>
      <p>Tailwind makes it easy to create responsive designs. Here are some advanced patterns:</p>
      
      <h3>Container Queries</h3>
      <p>With the @container query plugin, you can style elements based on their parent container's size rather than the viewport:</p>
      
      <pre><code>npm install @tailwindcss/container-queries</code></pre>
      
      <h3>Multi-Column Layouts</h3>
      <p>Creating responsive multi-column layouts is straightforward with Tailwind:</p>
      
      <pre><code>&lt;div class="columns-1 md:columns-2 lg:columns-3 gap-8"&gt;
  &lt;!-- Content --&gt;
&lt;/div&gt;</code></pre>
      
      <h2>Performance Optimization</h2>
      <p>For production, make sure you optimize your Tailwind setup:</p>
      
      <ul>
        <li>Use purgeCSS to remove unused styles</li>
        <li>Enable JIT mode for faster builds</li>
        <li>Split your configuration for better organization</li>
      </ul>
      
      <p>By applying these advanced techniques, you can create beautiful, responsive interfaces with Tailwind CSS while maintaining code quality and performance.</p>
    `
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
    categories: ['React', 'Performance', 'JavaScript'],
    content: `
      <p>Performance optimization is a critical aspect of building React applications that provide a smooth user experience. In this article, we'll explore various techniques to identify and resolve performance issues in your React applications.</p>
      
      <h2>Identifying Performance Issues</h2>
      <p>Before optimizing your application, you need to identify where the performance bottlenecks are. React provides several tools for this purpose:</p>
      
      <h3>React DevTools Profiler</h3>
      <p>The React DevTools Profiler allows you to record and analyze rendering performance of your components:</p>
      
      <ol>
        <li>Open React DevTools and switch to the Profiler tab</li>
        <li>Click the record button and interact with your application</li>
        <li>Stop recording and analyze the results</li>
      </ol>
      
      <h3>Performance Monitoring</h3>
      <p>Use tools like Lighthouse, WebPageTest, or Chrome's Performance tab to get a broader view of your application's performance.</p>
      
      <h2>Common Optimization Techniques</h2>
      
      <h3>Memoization</h3>
      <p>Use React.memo, useMemo, and useCallback to prevent unnecessary re-renders:</p>
      
      <pre><code>// Memoize a component
const MemoizedComponent = React.memo(MyComponent);

// Memoize a computed value
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

// Memoize a callback
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);</code></pre>
      
      <h3>Code Splitting</h3>
      <p>Split your bundle into smaller chunks to reduce the initial load time:</p>
      
      <pre><code>const LazyComponent = React.lazy(() => import('./LazyComponent'));</code></pre>
      
      <h3>Virtualization</h3>
      <p>For long lists, use virtualization libraries like react-window or react-virtualized to render only the visible items.</p>
      
      <h2>Server-Side Rendering and Static Generation</h2>
      <p>For better initial load performance, consider using server-side rendering (SSR) or static site generation (SSG) with frameworks like Next.js or Gatsby.</p>
      
      <p>By implementing these optimization techniques, you can significantly improve the performance of your React applications, leading to better user experiences and higher engagement.</p>
    `
  },
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
    categories: ['Next.js', 'React', 'Web Development'],
    content: `
      <p>Next.js has revolutionized the way we build React applications, providing a powerful framework that simplifies many aspects of web development. With the introduction of the App Router in Next.js 13, building complex applications has become even more streamlined.</p>
      
      <h2>Understanding the App Router</h2>
      <p>The App Router is a new paradigm for routing in Next.js applications. Unlike the Pages Router, which used file-based routing in a specific directory structure, the App Router introduces several key concepts:</p>
      
      <ul>
        <li><strong>Server Components:</strong> React Server Components allow you to render components on the server, reducing the JavaScript sent to the client.</li>
        <li><strong>Nested Layouts:</strong> Create shared UI for segments of your application while preserving state when users navigate between pages.</li>
        <li><strong>Streaming:</strong> Incrementally send UI from the server to the client, allowing users to see parts of the page before the entire page is rendered.</li>
      </ul>
      
      <h2>Getting Started with Next.js</h2>
      <p>To create a new Next.js project with the App Router, you can use the following command:</p>
      
      <pre><code>npx create-next-app@latest my-app --typescript --tailwind --eslint --app</code></pre>
      
      <p>This will create a new Next.js project with TypeScript, Tailwind CSS, ESLint, and the App Router.</p>
      
      <h2>Creating Routes</h2>
      <p>In the App Router, routes are defined using folders within the app directory. Each folder represents a route segment, and you can create pages by adding a page.tsx file to the folder. For example:</p>
      
      <ul>
        <li><code>app/page.tsx</code> - The home page (/).</li>
        <li><code>app/blog/page.tsx</code> - The blog page (/blog).</li>
        <li><code>app/blog/[slug]/page.tsx</code> - A dynamic blog post page (/blog/post-slug).</li>
      </ul>
      
      <h2>Layouts and Templates</h2>
      <p>With the App Router, you can create layouts that are shared across multiple pages. Layouts are defined using layout.tsx files in the app directory. For example:</p>
      
      <pre><code>// app/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}</code></pre>
      
      <p>By leveraging the power of the App Router, you can build complex applications with clean, maintainable code.</p>
    `
  },
  // ... Add more blog posts as needed
];

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.id === params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found | Personal Blog',
      description: 'The requested blog post could not be found.',
    };
  }
  
  return {
    title: `${post.title} | Personal Blog`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.id === params.slug);
  
  if (!post) {
    notFound();
  }
  
  // Set a default readTime based on content length if not provided
  const readTime = post.readTime || `${Math.ceil(post.content.length / 2000)} min read`;
  
  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Featured tag */}
        <div className="flex items-center my-6">
          <div className="w-5 h-5 mr-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" />
            </svg>
          </div>
          <span className="text-sm font-medium text-gray-900">Featured</span>
        </div>
        
        <article className="mb-12">
          {/* Article header */}
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900 leading-tight">
              {post.title}
            </h1>
            <h2 className="text-xl text-gray-600 mb-6 font-normal leading-snug">
              {post.excerpt}
            </h2>
            
            <div className="flex items-center mb-6">
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full overflow-hidden relative mr-3">
                  <Image
                    src={post.author.image}
                    alt={post.author.name}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="flex items-center">
                  <div className="mr-2">
                    <p className="font-medium text-gray-900">{post.author.name}</p>
                    <div className="flex items-center text-gray-500 text-sm">
                      <span>{post.date}</span>
                      <span className="mx-1">•</span>
                      <span>{readTime}</span>
                    </div>
                  </div>
                  <button className="text-green-600 text-sm border border-green-600 rounded-full px-2 py-0.5 hover:bg-green-50">
                    Follow
                  </button>
                </div>
              </div>
            </div>

            {/* Metrics */}
            <div className="flex items-center justify-between border-b border-gray-200 pb-8">
              <div className="flex items-center space-x-4">
                <div className="flex items-center text-gray-500">
                  <svg width="24" height="24" viewBox="0 0 24 24" className="h-5 w-5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" fill="currentColor"/>
                    <path d="M20 12C20 12 16.9524 18 12 18C7.04762 18 4 12 4 12C4 12 7.04762 6 12 6C16.9524 6 20 12 20 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="ml-1 text-sm">5.9K</span>
                </div>
                <div className="flex items-center text-gray-500">
                  <svg width="24" height="24" viewBox="0 0 24 24" className="h-5 w-5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M9 12H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M12 9L12 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <span className="ml-1 text-sm">138</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <button className="text-gray-500 hover:text-gray-700">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
                    <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button className="text-gray-500 hover:text-gray-700">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
                    <path d="M20 12H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 4L4 12L12 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button className="text-gray-500 hover:text-gray-700">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
                    <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </header>
          
          {/* Article content */}
          <div 
            className="prose prose-lg max-w-none text-gray-800 font-serif"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          {/* Article footer */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between mb-8">
              <div className="flex space-x-2">
                {post.categories.map((category, index) => (
                  <span 
                    key={index} 
                    className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full"
                  >
                    {category}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center space-x-4">
                <button className="text-gray-500 hover:text-gray-700">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </button>
                <button className="text-gray-500 hover:text-gray-700">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </button>
                <button className="text-gray-500 hover:text-gray-700">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-4 py-8">
              <button className="text-gray-500 hover:text-gray-900">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
              </button>
              <span className="text-gray-500 text-sm font-medium">138</span>
              <button className="text-gray-500 hover:text-gray-900">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2" />
                </svg>
              </button>
            </div>
          </div>
        </article>
      </div>
      
      {/* More from Medium section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-xl font-bold mb-8 text-gray-900">More from Medium</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.filter(p => p.id !== post.id).slice(0, 4).map((relatedPost) => {
              // Set a default readTime for related posts if not provided
              const relatedReadTime = relatedPost.readTime || `${Math.ceil(relatedPost.content.length / 2000)} min read`;
              
              return (
                <div key={relatedPost.id} className="flex space-x-4">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <div className="h-6 w-6 rounded-full overflow-hidden relative mr-2">
                        <Image
                          src={relatedPost.author.image}
                          alt={relatedPost.author.name}
                          fill
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                      <span className="text-gray-700 text-sm">{relatedPost.author.name}</span>
                    </div>
                    <Link href={`/blog/${relatedPost.id}`} className="group">
                      <h3 className="font-bold text-base text-gray-900 group-hover:underline line-clamp-2">
                        {relatedPost.title}
                      </h3>
                    </Link>
                    <div className="flex items-center text-gray-500 text-xs mt-1">
                      <span>{relatedPost.date}</span>
                      <span className="mx-1">•</span>
                      <span>{relatedReadTime}</span>
                    </div>
                  </div>
                  <div className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0">
                    <div className="relative w-full h-full">
                      <Image
                        src={relatedPost.coverImage}
                        alt={relatedPost.title}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="rounded-sm"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
} 