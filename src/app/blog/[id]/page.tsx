import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// This would typically come from a database or CMS
// For now using dummy data that matches your homepage style
const posts = [
  {
    id: 'making-featured-stories-visible',
    title: 'Making Featured stories even more visible',
    content: `
      <p>Today, we're excited to announce some improvements to help featured stories reach more readers.</p>
      
      <h2>New Push Notifications</h2>
      <p>First, we're introducing push notifications for featured stories from publications you follow. If you follow a publication, you can now receive a notification when they feature a new story. This helps ensure you never miss the most important content from your favorite publications.</p>
      
      <p>These notifications are customizable, so you can control how often you receive them or turn them off completely if you prefer.</p>
      
      <h2>Featured Story Feeds</h2>
      <p>We're also rolling out dedicated feeds for featured stories. This new feed will showcase featured stories from publications you follow, making it easier to discover high-quality content that publication editors have specifically chosen to highlight.</p>
      
      <p>The feed will be accessible from both the web and mobile apps, providing a consistent experience across all platforms.</p>
      
      <h2>Why This Matters</h2>
      <p>Featured stories represent some of the best content on our platform. By making these stories more visible, we're helping readers discover great content while giving writers more opportunities to reach new audiences.</p>
      
      <p>For writers, having your story featured will now have an even bigger impact, as it can reach not just readers who visit a publication's homepage, but also those who follow the publication but may not visit regularly.</p>
      
      <h2>Coming Soon</h2>
      <p>These features will be rolling out over the next few weeks. We'll continue to refine them based on your feedback.</p>
      
      <p>We're committed to building features that help quality content reach the right audience, and we believe these changes will make a meaningful difference for both readers and writers.</p>
    `,
    date: 'Feb 20, 2025',
    readTime: '2 min read',
    author: {
      name: 'Melissa DePuydt',
      image: '/images/author-1.jpg',
      bio: 'Product designer and writer, focused on creating user-friendly digital experiences.'
    },
    coverImage: '/images/1.jpeg',
    tags: ['Product Updates', 'Features', 'Notifications']
  },
  {
    id: 'mastering-typescript',
    title: 'Mastering TypeScript: Tips and Tricks',
    content: `
      <p>TypeScript has become an essential tool for modern JavaScript development, offering type safety and enhanced developer experience. In this article, we'll explore advanced techniques to level up your TypeScript skills.</p>
      
      <h2>Advanced Type Utilities</h2>
      <p>TypeScript comes with several built-in type utilities that can make your code more robust. Let's look at some of the most useful ones.</p>
      
      <h3>Partial and Required</h3>
      <p>The Partial utility makes all properties of a type optional, while Required does the opposite, making all properties required.</p>
      
      <pre><code>interface User {
  name: string;
  age: number;
  email: string;
}

// All properties are optional
type PartialUser = Partial<User>;

// All properties are required
type RequiredUser = Required<User>;</code></pre>
      
      <h2>Discriminated Unions</h2>
      <p>Discriminated unions are a pattern that makes working with union types safer and more intuitive.</p>
      
      <pre><code>type Success = {
  status: 'success';
  data: any;
};

type Error = {
  status: 'error';
  error: string;
};

type Response = Success | Error;

function handleResponse(response: Response) {
  if (response.status === 'success') {
    // TypeScript knows response is Success here
    console.log(response.data);
  } else {
    // TypeScript knows response is Error here
    console.log(response.error);
  }
}</code></pre>
      
      <h2>Using Generics Effectively</h2>
      <p>Generics allow you to create reusable components that work with a variety of types rather than a single one.</p>
      
      <pre><code>function createState<T>(initial: T): [() => T, (v: T) => void] {
  let value = initial;
  return [
    () => value,
    (v: T) => { value = v; }
  ];
}

// TypeScript infers the correct types
const [getState, setState] = createState('hello');
</code></pre>
      
      <h2>Conclusion</h2>
      <p>Mastering these TypeScript techniques will help you write more robust and maintainable code. The type system is one of TypeScript's greatest strengths, and learning to leverage it effectively can significantly improve your development experience.</p>
    `,
    date: 'June 20, 2023',
    readTime: '5 min read',
    author: {
      name: 'Jane Smith',
      image: '/images/author-2.jpg',
      bio: 'Senior frontend developer specializing in TypeScript and React applications.'
    },
    coverImage: '/images/2.jpeg',
    tags: ['TypeScript', 'JavaScript', 'Web Development']
  },
  {
    id: 'tailwind-css-techniques',
    title: 'Advanced Tailwind CSS Techniques',
    content: `
      <p>Tailwind CSS has revolutionized the way developers approach styling. In this article, we'll explore advanced techniques for using Tailwind CSS effectively.</p>
      
      <h2>Custom Configuration</h2>
      <p>While Tailwind provides a comprehensive set of utility classes out of the box, you might need to customize it for your project's specific needs.</p>
      
      <pre><code>// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'brand': '#3b82f6',
        'brand-light': '#93c5fd',
        'brand-dark': '#1d4ed8',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
    }
  }
}</code></pre>
      
      <h2>Component Extraction</h2>
      <p>To avoid repetition while maintaining the utility-first approach, extract common patterns into components.</p>
      
      <h3>Using React Components</h3>
      <pre><code>function Button({ children }) {
  return (
    <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
      {children}
    </button>
  );
}</code></pre>
      
      <h3>Using Tailwind's @apply</h3>
      <pre><code>/* In your CSS file */
.btn {
  @apply px-4 py-2 bg-blue-500 text-white rounded;
}
.btn:hover {
  @apply bg-blue-600;
}
.btn:focus {
  @apply outline-none ring-2 ring-blue-500 ring-opacity-50;
}</code></pre>
      
      <h2>Responsive Design</h2>
      <p>Tailwind's responsive design utilities make it easy to create interfaces that work well on any device.</p>
      
      <pre><code>&lt;div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"&gt;
  &lt;!-- Content --&gt;
&lt;/div&gt;</code></pre>
      
      <h2>Dark Mode</h2>
      <p>Implementing dark mode is straightforward with Tailwind CSS.</p>
      
      <pre><code>&lt;div class="bg-white dark:bg-gray-800 text-gray-900 dark:text-white"&gt;
  &lt;!-- Content --&gt;
&lt;/div&gt;</code></pre>
      
      <h2>Conclusion</h2>
      <p>Tailwind CSS provides a powerful set of tools for creating beautiful and responsive user interfaces. By leveraging these advanced techniques, you can make your development workflow more efficient and your designs more consistent.</p>
    `,
    date: 'July 5, 2023',
    readTime: '4 min read',
    author: {
      name: 'Alex Johnson',
      image: '/images/author-3.jpg',
      bio: 'UI/UX designer and frontend developer with a passion for clean, functional design.'
    },
    coverImage: '/images/3.jpeg',
    tags: ['CSS', 'Tailwind', 'Web Design']
  },
  {
    id: 'react-performance-optimization',
    title: 'React Performance Optimization',
    content: `
      <p>Performance optimization is crucial for providing a smooth user experience in React applications. In this article, we'll explore strategies for identifying and fixing performance issues.</p>
      
      <h2>Identifying Performance Issues</h2>
      <p>Before optimizing, you need to identify where the performance bottlenecks are in your application.</p>
      
      <h3>React Developer Tools</h3>
      <p>The React Developer Tools extension provides a Profiler tab that allows you to record and analyze component rendering performance.</p>
      
      <h3>Performance Tab</h3>
      <p>The Performance tab in Chrome DevTools provides insights into your application's runtime performance, helping you identify long tasks and rendering issues.</p>
      
      <h2>Memoization Techniques</h2>
      <p>React provides several APIs for memoization, which can prevent unnecessary re-renders.</p>
      
      <h3>React.memo</h3>
      <pre><code>const MyComponent = React.memo(function MyComponent(props) {
  // Component logic
});</code></pre>
      
      <h3>useMemo and useCallback</h3>
      <pre><code>// Memoize a computed value
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

// Memoize a callback function
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);</code></pre>
      
      <h2>Code Splitting</h2>
      <p>Code splitting allows you to split your bundle into smaller chunks that can be loaded on demand, reducing the initial load time.</p>
      
      <h3>Dynamic Imports</h3>
      <pre><code>import { lazy, Suspense } from 'react';

const LazyComponent = lazy(() => import('./LazyComponent'));

function MyComponent() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}</code></pre>
      
      <h2>Virtualization</h2>
      <p>When rendering large lists, virtualization can significantly improve performance by only rendering items that are currently visible in the viewport.</p>
      
      <pre><code>import { FixedSizeList } from 'react-window';

function MyList({ items }) {
  const Row = ({ index, style }) => (
    <div style={style}>
      {items[index]}
    </div>
  );

  return (
    <FixedSizeList
      height={500}
      width={300}
      itemSize={35}
      itemCount={items.length}
    >
      {Row}
    </FixedSizeList>
  );
}</code></pre>
      
      <h2>Conclusion</h2>
      <p>Performance optimization is an ongoing process. By regularly profiling your application and applying these techniques where needed, you can provide a better experience for your users.</p>
    `,
    date: 'August 12, 2023',
    readTime: '6 min read',
    author: {
      name: 'Michael Brown',
      image: '/images/author-4.jpg',
      bio: 'React specialist with a focus on performance optimization and architecture.'
    },
    coverImage: '/images/4.jpeg',
    tags: ['React', 'JavaScript', 'Performance']
  }
];

// This would typically be a database or API call in a real app
async function getPostData(id: string) {
  return posts.find(post => post.id === id) || null;
}

interface BlogPostParams {
  params: {
    id: string;
  }
}

export default async function BlogPost({ params }: BlogPostParams) {
  const post = await getPostData(params.id);
  
  if (!post) {
    notFound();
  }

  return (
    <div className="bg-white">
      <div className="max-w-3xl mx-auto px-6 py-8">
        {/* Back button */}
        <div className="mb-8">
          <Link 
            href="/" 
            className="text-gray-600 hover:text-gray-900 flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Back to articles
          </Link>
        </div>
        
        {/* Post Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
        
        {/* Author info and post metadata */}
        <div className="flex items-center mb-8">
          <div className="h-10 w-10 rounded-full overflow-hidden relative mr-4">
            <Image
              src={post.author.image}
              alt={post.author.name}
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div>
            <div className="text-gray-800 font-medium">{post.author.name}</div>
            <div className="flex items-center text-gray-500 text-sm">
              <span>{post.date}</span>
              <span className="mx-1">•</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
        
        {/* Cover Image */}
        <div className="relative aspect-[2/1] w-full rounded-lg overflow-hidden mb-8">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {post.tags.map(tag => (
            <span 
              key={tag} 
              className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* Post Content */}
        <div 
          className="prose prose-gray prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        
        {/* Author Bio */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-lg font-semibold mb-4">About the author</h3>
          <div className="flex items-start">
            <div className="h-12 w-12 rounded-full overflow-hidden relative mr-4 flex-shrink-0">
              <Image
                src={post.author.image}
                alt={post.author.name}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div>
              <div className="text-gray-800 font-medium mb-1">{post.author.name}</div>
              <p className="text-gray-600">{post.author.bio}</p>
            </div>
          </div>
        </div>
        
        {/* Related Posts - Would typically be selected based on tags or category */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-lg font-semibold mb-6">More articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts
              .filter(p => p.id !== post.id)
              .slice(0, 2)
              .map(relatedPost => (
                <Link href={`/blog/${relatedPost.id}`} key={relatedPost.id} className="group">
                  <div className="flex space-x-4">
                    <div className="w-1/3 relative aspect-square rounded-sm overflow-hidden">
                      <Image
                        src={relatedPost.coverImage}
                        alt={relatedPost.title}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="w-2/3">
                      <h4 className="text-base font-semibold text-gray-900 group-hover:text-gray-700 leading-tight mb-1">
                        {relatedPost.title}
                      </h4>
                      <div className="text-gray-500 text-xs">
                        <span>{relatedPost.date}</span>
                        <span className="mx-1">•</span>
                        <span>{relatedPost.readTime}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
} 