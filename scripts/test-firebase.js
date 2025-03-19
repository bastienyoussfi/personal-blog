import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

// Firebase configuration
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

// Test articles with increasing complexity
const testArticles = [
  {
    id: 'test-simple',
    title: 'Simple Text Test',
    excerpt: 'Basic plain text only',
    // Plain text only, no markdown
    content: 'This is a simple test with plain text only. No markdown formatting is used here.',
    date: 'March 20, 2025',
    readTime: '1 min',
    author: {
      name: 'Test Author',
      image: '/images/author-1.jpg',
    },
    coverImage: '/images/1.jpeg',
    tags: ['Test'],
  },
  {
    id: 'test-basic-md',
    title: 'Basic Markdown Test',
    excerpt: 'Basic Markdown formatting',
    // Basic markdown (headers, paragraphs, lists)
    content: `# Basic Markdown

This is a test with basic Markdown.

## Headers

Just testing some headers and paragraphs.

- List item 1
- List item 2
- List item 3

1. Numbered item 1
2. Numbered item 2
3. Numbered item 3`,
    date: 'March 20, 2025',
    readTime: '1 min',
    author: {
      name: 'Test Author',
      image: '/images/author-1.jpg',
    },
    coverImage: '/images/1.jpeg',
    tags: ['Test'],
  },
  {
    id: 'test-links-emphasis',
    title: 'Links and Emphasis Test',
    excerpt: 'Testing links and text emphasis',
    // Links and emphasis
    content: `# Links and Emphasis

**This text is bold**

*This text is italic*

[This is a link](https://example.com)

***Bold and italic***

This sentence has \`inline code\`.`,
    date: 'March 20, 2025',
    readTime: '1 min',
    author: {
      name: 'Test Author',
      image: '/images/author-1.jpg',
    },
    coverImage: '/images/1.jpeg',
    tags: ['Test'],
  },
  {
    id: 'test-code-blocks',
    title: 'Code Blocks Test',
    excerpt: 'Testing code blocks',
    // Code blocks
    content: "# Code Blocks\n\nHere's a code block:\n\n```\nfunction test() {\n  console.log('Hello world');\n}\n```\n\nAnd with language specified:\n\n```javascript\nconst x = 10;\nconst y = 20;\nconsole.log(x + y);\n```",
    date: 'March 20, 2025',
    readTime: '1 min',
    author: {
      name: 'Test Author',
      image: '/images/author-1.jpg',
    },
    coverImage: '/images/1.jpeg',
    tags: ['Test'],
  }
];

// Function to test each article one by one
async function testFirestore() {
  try {
    console.log('Starting Firestore test with incremental complexity...');
    
    for (const article of testArticles) {
      try {
        console.log(`\nTesting article '${article.id}'...`);
        console.log(`Content type: ${typeof article.content}`);
        console.log(`Content length: ${article.content.length} characters`);
        
        // Try to write to Firestore
        const docRef = doc(db, 'test_articles', article.id);
        await setDoc(docRef, article);
        console.log(`✅ SUCCESS: Article '${article.id}' added successfully`);
      } catch (error) {
        console.error(`❌ ERROR: Failed to add article '${article.id}':`, error.message);
        // Continue with next test case
      }
    }
    
    console.log('\nTest completed!');
  } catch (error) {
    console.error('Error in test process:', error);
  }
}

// Run the test
testFirestore().then(() => {
  console.log('Test script execution completed.');
  process.exit(0);
}).catch(error => {
  console.error('Fatal error in test script:', error);
  process.exit(1);
}); 