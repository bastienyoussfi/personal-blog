import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticleById, getRelatedArticles, getAllArticles } from "@/lib/firebase";

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

// Social sharing component
function SocialShareButtons({ url, title }: { url: string; title: string }) {
  return (
    <div className="flex items-center my-8 space-x-4 border-t border-b border-gray-100 py-6">
      <span className="text-gray-700 font-medium">Share this article:</span>
      
      {/* Twitter/X Share Button */}
      <a 
        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-blue-400 transition-colors"
        aria-label="Share on Twitter"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
        </svg>
      </a>
      
      {/* LinkedIn Share Button */}
      <a 
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-blue-600 transition-colors"
        aria-label="Share on LinkedIn"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 21h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
        </svg>
      </a>
      
      {/* Facebook Share Button */}
      <a 
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-blue-800 transition-colors"
        aria-label="Share on Facebook"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 011-1h3v-4h-3a5 5 0 00-5 5v2.01h-2l-.396 3.98h2.396v8.01z"></path>
        </svg>
      </a>
    </div>
  );
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
        <div className="relative w-full aspect-[16/9] mb-8 rounded-md overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
            style={{ objectFit: 'cover' }}
          />
        </div>
        
        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap mb-8">
            {post.tags.map((tag, index) => (
              <span 
                key={index} 
                className="mr-2 mb-2 px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        
        {/* Blog post content */}
        <article className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content || '' }} />
        
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
            <h3 className="text-lg font-semibold mb-6">More articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map(relatedPost => (
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
        )}
      </div>
    </div>
  );
} 