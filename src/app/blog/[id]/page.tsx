import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticleById, getRelatedArticles, getAllArticles } from "@/lib/firebase";
import ArticleContent from "@/components/ArticleContent";
import SocialShareButtons from "@/components/SocialShareButtons";

type BlogPostParams = {
  params: {
    id: string;
  };
};

// Generate static params for all blog posts at build time
export async function generateStaticParams() {
  const articles = await getAllArticles();
  
  return articles.map(article => ({
    id: article.id,
  }));
}

// This function gets called at build time and on every request
export async function generateMetadata({ params }: BlogPostParams) {
  const post = await getArticleById(params.id);
  
  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested article could not be found'
    };
  }

  // Enhanced metadata for better SEO
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ 
        url: post.coverImage,
        width: 1200,
        height: 630,
        alt: post.title 
      }],
      type: 'article',
      publishedTime: post.date,
      authors: [post.author.name],
      tags: post.tags || [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${params.id}/`,
    },
    // Add structured data for article
    other: {
      'article:published_time': post.date,
      'article:author': post.author.name,
    }
  };
}

export default async function BlogPost({ params }: BlogPostParams) {
  const post = await getArticleById(params.id);
  
  if (!post) {
    notFound();
  }
  
  const relatedPosts = await getRelatedArticles(params.id, 2);
  // Create the full URL for sharing
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://yourblog.com";
  const fullUrl = `${baseUrl}/blog/${params.id}`;

  // Generate JSON-LD structured data for this article
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: post.author.name,
      image: post.author.image,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Your Blog Name', // Replace with your blog name
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/logo.png`, // Add your logo image
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': fullUrl,
    },
  };

  return (
    <div className="bg-white">
      {/* Add JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      
      <div className="max-w-3xl mx-auto px-6 py-8">
        {/* Back button */}
        <div className="mb-8">
          <Link 
            href="/" 
            className="text-gray-600 hover:text-gray-900 flex items-center"
            aria-label="Back to homepage"
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
        
        {/* Featured Image */}
        <div className="relative w-full aspect-[16/9] mb-12 rounded-md overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
            style={{ objectFit: 'cover' }}
          />
        </div>
        
        {/* Blog post content with theme selector */}
        <ArticleContent content={post.content || ''} />
        
        {/* Social Sharing Buttons */}
        <SocialShareButtons url={fullUrl} title={post.title} />
        
        {/* Author bio */}
        {post.author.bio && (
          <div className="mt-10 pt-8 border-t border-gray-200">
            <div className="flex items-center">
              <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                <Image 
                  src={post.author.image}
                  alt={post.author.name}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Written by {post.author.name}</h3>
                <p className="text-gray-600 mt-1">{post.author.bio}</p>
              </div>
            </div>
          </div>
        )}
        
        {/* Related articles */}
        {relatedPosts.length > 0 && (
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedPosts.map(relatedPost => (
                <div key={relatedPost.id} className="flex flex-col">
                  <div className="relative aspect-[16/9] w-full rounded-md overflow-hidden mb-4">
                    <Link href={`/blog/${relatedPost.id}`}>
                      <Image
                        src={relatedPost.coverImage}
                        alt={relatedPost.title}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </Link>
                  </div>
                  <Link href={`/blog/${relatedPost.id}`} className="group">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-700">{relatedPost.title}</h3>
                  </Link>
                  <span className="text-gray-500 text-sm mt-2">{relatedPost.date} • {relatedPost.readTime}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 