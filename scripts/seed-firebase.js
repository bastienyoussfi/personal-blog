const { initializeApp } = require('firebase/app');
const { getFirestore, doc, setDoc } = require('firebase/firestore');

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2xohCWzAEd1J6ydPhxAScNoTgZSF7evk",
  authDomain: "blog-73bf5.firebaseapp.com",
  projectId: "blog-73bf5",
  storageBucket: "blog-73bf5.firebasestorage.app",
  messagingSenderId: "412171140451",
  appId: "1:412171140451:web:1a0a275bdfe02581802756",
  measurementId: "G-2SDSCSEQ9P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Sample data
const sampleArticles = [
  {
    id: 'making-featured-stories-visible',
    title: 'Making Featured stories even more visible',
    excerpt: 'Introducing new push notifications and Featured story feeds for publication followers',
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
    tags: ['Product Updates', 'Features', 'Notifications'],
    featured: true
  },
  {
    id: 'mastering-typescript',
    title: 'Mastering TypeScript: Tips and Tricks',
    excerpt: 'Take your TypeScript skills to the next level with these advanced tips and tricks that will make your code more robust.',
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
    tags: ['TypeScript', 'JavaScript', 'Web Development'],
    featured: false
  },
  {
    id: 'tailwind-css-techniques',
    title: 'Advanced Tailwind CSS Techniques',
    excerpt: 'Discover advanced techniques for using Tailwind CSS to create beautiful and responsive user interfaces without writing custom CSS.',
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
    tags: ['CSS', 'Tailwind', 'Web Design'],
    featured: false
  },
  {
    id: 'react-performance-optimization',
    title: 'React Performance Optimization',
    excerpt: 'Learn how to identify and fix performance issues in your React applications to provide a better user experience.',
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
    tags: ['React', 'JavaScript', 'Performance'],
    featured: false
  }
];

// Function to seed data
async function seedFirestore() {
  try {
    console.log('Starting to seed Firestore...');
    
    // Use specific document IDs for better control
    for (const article of sampleArticles) {
      const docRef = doc(db, 'articles', article.id);
      await setDoc(docRef, article);
      console.log(`Added article: ${article.title}`);
    }
    
    console.log('Firestore seeding completed successfully!');
  } catch (error) {
    console.error('Error seeding Firestore:', error);
  }
}

// Run the seed function
seedFirestore().then(() => {
  console.log('Seed script execution completed.');
  process.exit(0);
}).catch(error => {
  console.error('Error in seed script:', error);
  process.exit(1);
}); 