import { MetadataRoute } from 'next';
import { getAllArticles } from '@/lib/firebase';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://yourblog.com';
  
  // Get all articles
  const articles = await getAllArticles();
  
  // Generate article URLs
  const articleUrls = articles.map((article) => ({
    url: `${baseUrl}/blog/${article.id}/`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));
  
  // Default URLs
  const routes = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    // Add more static routes as needed
  ];
  
  return [...routes, ...articleUrls];
} 