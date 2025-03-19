// Load environment variables
import 'dotenv/config';
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

// Check for required environment variables
const requiredVars = [
  'FIREBASE_API_KEY',
  'FIREBASE_AUTH_DOMAIN',
  'FIREBASE_PROJECT_ID',
  'FIREBASE_STORAGE_BUCKET',
  'FIREBASE_MESSAGING_SENDER_ID',
  'FIREBASE_APP_ID'
];

const missingVars = requiredVars.filter(varName => !process.env[varName]);
if (missingVars.length > 0) {
  console.error('❌ ERROR: Missing required Firebase environment variables:', missingVars.join(', '));
  console.error('Please update your .env file with the correct Firebase configuration.');
  process.exit(1);
}

// Firebase configuration from environment variables
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Sample data - using simpler Markdown content
const sampleArticles = [
  {
    id: 'typescript-basics',
    title: 'TypeScript Basics',
    excerpt: 'A simple introduction to TypeScript and its core features.',
    content: `### TypeScript: The Superpower JavaScript Didn’t Know It Needed

Hey, I’m Bastien, a 23-year-old software engineer who’s all about making code cleaner, safer, and more fun to work with. Today, I want to dive into **TypeScript**, a tool that’s become a game-changer for JavaScript developers everywhere. If you’ve ever been burned by a sneaky \`undefined\` error or spent hours debugging something that “should’ve worked,” this one’s for you—let’s get into it.

### What Is TypeScript?

TypeScript is a **typed superset of JavaScript**, created by Microsoft back in 2012. It’s not a whole new language—think of it as JavaScript with a safety net. You write TypeScript code, add type annotations, and it compiles down to plain JavaScript that runs anywhere JS does. The big deal? It catches errors *before* your code even runs, giving you confidence and cutting down on runtime surprises.

It’s optional, flexible, and integrates seamlessly with your existing JS projects. Whether you’re building a small script or a massive app, TypeScript scales with you.

### Why It’s a Big Deal

The headline feature is **static typing**. In vanilla JS, variables can be anything at any time—\`let x = 5\` could become \`x = "hello"\` two lines later, and good luck catching that until it blows up. TypeScript lets you define types up front:

\`\`\`tsx
let x: number = 5;
// x = "hello"; // Nope, TypeScript yells at you here
\`\`\`

This means errors get flagged in your editor, not in production. Fewer bugs, less stress.

Then there’s **better tooling**. TypeScript supercharges your IDE with autocomplete, refactoring support, and inline docs. Hover over a function, and you’ll see exactly what it expects and returns—no more guessing. For teams, this is huge—it’s like handing everyone a shared map of the codebase.

And it’s **scalable**. Small scripts? Add a few types and call it a day. Big apps? Define interfaces, enums, and complex types to keep everything tight. It grows with your project without forcing you into a rigid box.

### A Quick Taste

Here’s a simple example—a function to greet someone:

\`\`\`tsx
interface User {
  name: string;
  age: number;
}

function greet(user: User): string {
  return \`Hello, \${user.name}! You’re \${user.age} years young.\`;
}

console.log(greet({ name: "Alex", age: 25 }));
// greet({ name: "Sam" }); // Error: missing age
\`\`\`

See that? TypeScript enforces the \`User\` shape, so you can’t accidentally skip \`age\`. Clean, safe, and readable.

### Why It’s Taking Over

JavaScript’s flexibility is its strength, but it’s also a double-edged sword. As projects grow, that freedom can turn into chaos—think untyped APIs, messy refactors, or “it works on my machine” nightmares. TypeScript brings **structure without sacrifice**. You still get all the JS goodies—async/await, destructuring, modules—plus a layer of reliability.

It’s also **everywhere**. Frameworks like React, Vue, and Angular play nice with it (some even default to it now). Node.js backends? Check. Major libraries ship TypeScript definitions out of the box. And the community’s all in—look at DefinitelyTyped if you need proof.

The **productivity boost** is real too. Studies (like from the State of JS survey) show devs catch errors faster and ship with more confidence. For teams, it’s a shared language that cuts onboarding time and keeps codebases maintainable.

### Any Trade-Offs?

It’s not all sunshine. There’s a **learning curve**—types, interfaces, and generics take time to grok, especially if you’re new to static typing. And it adds a **compile step**, which might feel like a hassle if you’re used to JS’s “save and refresh” flow. But modern tools like Vite or \`ts-node\` make this a non-issue, and the payoff in bug-free code is worth it.

Oh, and your build might bloat a tad with type definitions—but that’s a small price for the stability you get.

### The Hype Is Real

TypeScript’s adoption is off the charts. GitHub’s Octoverse ranks it among the top languages, and X is full of devs singing its praises—think “TypeScript saved my sanity” posts. Big players like Microsoft (duh), Airbnb, and Slack use it, and it’s the default for new projects in many orgs. Pair it with React or Node, and you’ve got a stack that’s hard to beat.

### Should You Jump In?

If you’re starting a new project or maintaining an old one, TypeScript’s worth a look. You don’t have to go all-in—add it gradually with \`"allowJs": true\` in your \`tsconfig.json\` and type as you go. Try it on a side gig or a toy app, and watch how it catches mistakes you didn’t even know you were making.

Already using TypeScript? What’s your take? Drop a comment or ping me on X—I’d love to hear your story. Until then, happy typing!`,
    date: 'July 15, 2023',
    readTime: '3 min read',
    author: {
      name: 'Bastien Youssfi',
      image: '/images/bastien.jpeg',
      bio: 'Software engineer and writer, focused on creating user-friendly digital experiences.'
    },
    coverImage: '/images/typescript.jpeg',
    tags: ['TypeScript', 'JavaScript', 'Web Development'],
    featured: false
  }
];

// Function to seed data
async function seedFirestore() {
  try {
    console.log('Starting to seed Firestore with Markdown articles...');
    
    // Use specific document IDs for better control
    for (const article of sampleArticles) {
      try {
        console.log(`Processing article '${article.id}'...`);
        
        const docRef = doc(db, 'articles', article.id);
        await setDoc(docRef, article);
        console.log(`✅ Successfully added article: ${article.title}`);
      } catch (error) {
        console.error(`❌ Error adding article ${article.id}:`, error.message);
      }
    }
    
    console.log('Firestore seeding completed!');
  } catch (error) {
    console.error('Error in seed process:', error);
  }
}

// Run the seed function
seedFirestore().then(() => {
  console.log('Seed script execution completed.');
  process.exit(0);
}).catch(error => {
  console.error('Fatal error in seed script:', error);
  process.exit(1);
}); 