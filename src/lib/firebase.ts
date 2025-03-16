import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, getDoc, doc } from 'firebase/firestore';

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

// Article type definition
export interface Author {
  name: string;
  image: string;
  bio?: string;
}

export interface ArticleData {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  date: string;
  readTime: string;
  author: Author;
  coverImage: string;
  tags?: string[];
  featured?: boolean;
}

// Fetch all articles
export async function getAllArticles(): Promise<ArticleData[]> {
  try {
    const articlesCollection = collection(db, 'articles');
    const articlesSnapshot = await getDocs(articlesCollection);
    
    return articlesSnapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        title: data.title,
        excerpt: data.excerpt,
        date: data.date,
        readTime: data.readTime,
        author: data.author,
        coverImage: data.coverImage,
        tags: data.tags,
        featured: data.featured || false,
      };
    });
  } catch (error) {
    console.error('Error fetching articles:', error);
    return [];
  }
}

// Fetch featured article
export async function getFeaturedArticle(): Promise<ArticleData | null> {
  try {
    const articles = await getAllArticles();
    return articles.find(article => article.featured) || articles[0] || null;
  } catch (error) {
    console.error('Error fetching featured article:', error);
    return null;
  }
}

// Fetch recent articles (excluding featured)
export async function getRecentArticles(limit: number = 3): Promise<ArticleData[]> {
  try {
    const articles = await getAllArticles();
    const featuredArticle = await getFeaturedArticle();
    
    return articles
      .filter(article => featuredArticle ? article.id !== featuredArticle.id : true)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, limit);
  } catch (error) {
    console.error('Error fetching recent articles:', error);
    return [];
  }
}

// Fetch a single article by ID with full content
export async function getArticleById(id: string): Promise<ArticleData | null> {
  try {
    const articleRef = doc(db, 'articles', id);
    const articleSnapshot = await getDoc(articleRef);
    
    if (!articleSnapshot.exists()) {
      return null;
    }
    
    const data = articleSnapshot.data();
    return {
      id: articleSnapshot.id,
      title: data.title,
      excerpt: data.excerpt,
      content: data.content,
      date: data.date,
      readTime: data.readTime,
      author: data.author,
      coverImage: data.coverImage,
      tags: data.tags || [],
      featured: data.featured || false,
    };
  } catch (error) {
    console.error('Error fetching article by ID:', error);
    return null;
  }
}

// Fetch related articles (excluding the current article)
export async function getRelatedArticles(currentId: string, limit: number = 2): Promise<ArticleData[]> {
  try {
    const articles = await getAllArticles();
    return articles
      .filter(article => article.id !== currentId)
      .slice(0, limit);
  } catch (error) {
    console.error('Error fetching related articles:', error);
    return [];
  }
} 