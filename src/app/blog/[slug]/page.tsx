import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

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
    &lt;html lang="en"&gt;
      &lt;body&gt;
        &lt;header&gt;My Website&lt;/header&gt;
        {children}
        &lt;footer&gt;© 2023&lt;/footer&gt;
      &lt;/body&gt;
    &lt;/html&gt;
  )
}</code></pre>
      
      <h2>Conclusion</h2>
      <p>Next.js and the App Router provide a powerful foundation for building modern web applications. By leveraging server components, nested layouts, and other features, you can create fast, interactive, and user-friendly websites.</p>
      
      <p>As you continue to explore Next.js, you'll discover many more features and capabilities that make it one of the most popular frameworks for React development.</p>
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
    categories: ['TypeScript', 'JavaScript', 'Programming'],
    content: `
      <p>TypeScript has become the language of choice for many JavaScript developers, offering type safety and improved developer experience. In this article, we'll explore some advanced TypeScript techniques that will help you write more robust code.</p>
      
      <h2>Utility Types</h2>
      <p>TypeScript provides several utility types that can help you transform and manipulate types:</p>
      
      <pre><code>// Partial makes all properties optional
type User = {
  id: number;
  name: string;
  email: string;
};

// All properties are optional
type PartialUser = Partial&lt;User&gt;;

// Pick selects specific properties
type UserCredentials = Pick&lt;User, 'email' | 'id'&gt;;</code></pre>
      
      <h2>Type Guards</h2>
      <p>Type guards are functions that check the type of a value at runtime and narrow the type within a conditional block:</p>
      
      <pre><code>function isString(value: unknown): value is string {
  return typeof value === 'string';
}

function processValue(value: unknown) {
  if (isString(value)) {
    // TypeScript knows value is a string here
    console.log(value.toUpperCase());
  }
}</code></pre>
      
      <h2>Discriminated Unions</h2>
      <p>Discriminated unions allow you to create a type that can be one of several types, with a property that identifies which type it is:</p>
      
      <pre><code>type Success = {
  status: 'success';
  data: string;
};

type Error = {
  status: 'error';
  message: string;
};

type Response = Success | Error;

function handleResponse(response: Response) {
  if (response.status === 'success') {
    // TypeScript knows response is Success here
    console.log(response.data);
  } else {
    // TypeScript knows response is Error here
    console.log(response.message);
  }
}</code></pre>
      
      <h2>Generic Functions</h2>
      <p>Generic functions allow you to create functions that work with a variety of types while maintaining type safety:</p>
      
      <pre><code>function firstElement&lt;T&gt;(arr: T[]): T | undefined {
  return arr[0];
}

// TypeScript infers the return type as string
const first = firstElement(['a', 'b', 'c']);

// TypeScript infers the return type as number
const firstNum = firstElement([1, 2, 3]);</code></pre>
      
      <h2>Conclusion</h2>
      <p>TypeScript offers a powerful type system that can help you write more robust code. By using utility types, type guards, discriminated unions, and generic functions, you can create flexible and type-safe applications that are easier to maintain and less prone to bugs.</p>
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
    categories: ['CSS', 'Tailwind', 'UI Design'],
    content: `
      <p>Tailwind CSS has transformed the way developers approach styling web applications, offering a utility-first approach that enables rapid UI development without leaving your HTML. In this article, we'll explore some advanced Tailwind CSS techniques that will help you build more sophisticated user interfaces.</p>
      
      <h2>Custom Variants</h2>
      <p>Tailwind allows you to create custom variants to apply styles conditionally. You can configure these in your tailwind.config.js file:</p>
      
      <pre><code>// tailwind.config.js
module.exports = {
  theme: {
    // ...
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      textColor: ['visited'],
    },
  },
  plugins: [],
}</code></pre>
      
      <h2>Responsive Design with Container Queries</h2>
      <p>While Tailwind has always had breakpoints for responsive design, container queries offer a more component-based approach to responsiveness:</p>
      
      <pre><code>&lt;div class="@container"&gt;
  &lt;div class="@md:flex @md:space-x-4"&gt;
    &lt;div class="@md:w-1/2"&gt;Content&lt;/div&gt;
    &lt;div class="@md:w-1/2"&gt;More content&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
      
      <h2>Custom Plugins</h2>
      <p>You can create custom Tailwind plugins to add your own utilities, components, or base styles:</p>
      
      <pre><code>// tailwind.config.js
const plugin = require('tailwindcss/plugin');

module.exports = {
  // ...
  plugins: [
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-sm': {
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)',
        },
        '.text-shadow': {
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
        },
        '.text-shadow-lg': {
          textShadow: '4px 4px 8px rgba(0, 0, 0, 0.3)',
        },
      };
      
      addUtilities(newUtilities);
    }),
  ],
}</code></pre>
      
      <h2>Theming with CSS Variables</h2>
      <p>You can use CSS variables with Tailwind to create themeable designs:</p>
      
      <pre><code>/* global.css */
:root {
  --color-primary: #3b82f6;
  --color-secondary: #10b981;
}

.dark {
  --color-primary: #60a5fa;
  --color-secondary: #34d399;
}

/* tailwind.config.js */
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
      },
    },
  },
  // ...
}</code></pre>
      
      <h2>Conclusion</h2>
      <p>Tailwind CSS provides a powerful and flexible approach to styling web applications. By leveraging custom variants, responsive design techniques, custom plugins, and theming with CSS variables, you can create sophisticated and maintainable user interfaces without writing custom CSS.</p>
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
      <p>React is known for its virtual DOM and efficient rendering, but as applications grow in complexity, performance issues can arise. In this article, we'll explore various techniques to optimize the performance of your React applications.</p>
      
      <h2>Memoization with React.memo</h2>
      <p>React.memo is a higher-order component that memoizes the result of a component render, preventing unnecessary re-renders when props haven't changed:</p>
      
      <pre><code>const MyComponent = React.memo(function MyComponent(props) {
  /* render using props */
});

// You can also provide a custom comparison function
const MyComponent = React.memo(
  function MyComponent(props) {
    /* render using props */
  },
  (prevProps, nextProps) => {
    return prevProps.id === nextProps.id;
  }
);</code></pre>
      
      <h2>useMemo and useCallback Hooks</h2>
      <p>The useMemo and useCallback hooks can help prevent unnecessary calculations and function recreations:</p>
      
      <pre><code>// Memoize expensive calculations
const memoizedValue = useMemo(() => {
  return computeExpensiveValue(a, b);
}, [a, b]);

// Memoize callback functions
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);</code></pre>
      
      <h2>Virtualization for Long Lists</h2>
      <p>When rendering long lists, virtualization can significantly improve performance by only rendering items that are visible to the user:</p>
      
      <pre><code>import { FixedSizeList } from 'react-window';

function MyList({ items }) {
  const Row = ({ index, style }) => (
    &lt;div style={style}&gt;
      {items[index]}
    &lt;/div&gt;
  );

  return (
    &lt;FixedSizeList
      height={500}
      width={300}
      itemCount={items.length}
      itemSize={35}
    &gt;
      {Row}
    &lt;/FixedSizeList&gt;
  );
}</code></pre>
      
      <h2>Code Splitting and Lazy Loading</h2>
      <p>Code splitting allows you to split your code into smaller chunks that can be loaded on demand, reducing the initial load time:</p>
      
      <pre><code>import React, { Suspense, lazy } from 'react';

// Lazy load a component
const LazyComponent = lazy(() => import('./LazyComponent'));

function MyComponent() {
  return (
    &lt;Suspense fallback={&lt;div&gt;Loading...&lt;/div&gt;}&gt;
      &lt;LazyComponent /&gt;
    &lt;/Suspense&gt;
  );
}</code></pre>
      
      <h2>Conclusion</h2>
      <p>Optimizing the performance of your React applications is essential for providing a good user experience. By using techniques like memoization, virtualization, and code splitting, you can ensure that your application remains fast and responsive, even as it grows in complexity.</p>
    `
  }
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
  
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white">
      <article className="max-w-4xl mx-auto">
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.categories.map((category, index) => (
              <span 
                key={index} 
                className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full"
              >
                {category}
              </span>
            ))}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">{post.title}</h1>
          <p className="text-xl text-gray-600 mb-6">{post.excerpt}</p>
          <div className="flex items-center">
            <div className="h-10 w-10 rounded-full overflow-hidden relative mr-4">
              <Image
                src={post.author.image}
                alt={post.author.name}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div>
              <p className="font-medium text-gray-900">{post.author.name}</p>
              <p className="text-sm text-gray-500">{post.date} · 5 min read</p>
            </div>
          </div>
        </header>
        
        <div className="relative h-96 w-full mb-8 rounded-lg overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        
        <div 
          className="prose prose-lg max-w-none text-gray-800"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Share this article</h2>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.21c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </article>
      
      <div className="max-w-4xl mx-auto mt-12 pt-12 border-t border-gray-200">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Continue Reading</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.filter(p => p.id !== post.id).slice(0, 2).map((relatedPost) => (
            <div key={relatedPost.id} className="flex space-x-4">
              <div className="relative h-20 w-20 flex-shrink-0">
                <Image
                  src={relatedPost.coverImage}
                  alt={relatedPost.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded"
                />
              </div>
              <div>
                <h3 className="font-medium hover:text-gray-600 text-gray-900">
                  <Link href={`/blog/${relatedPost.id}`}>
                    {relatedPost.title}
                  </Link>
                </h3>
                <p className="text-sm text-gray-500 mt-1">{relatedPost.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 