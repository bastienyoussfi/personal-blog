'use client';

import React from 'react';

interface ArticleRendererProps {
  content: string;
  className?: string;
}

/**
 * ArticleRenderer - A component for rendering HTML article content with proper styling
 * 
 * This component provides consistent, well-spaced styling for article content
 * while safely rendering HTML content from trusted sources (like Firebase).
 */
const ArticleRenderer: React.FC<ArticleRendererProps> = ({ 
  content, 
  className = ''
}) => {
  return (
    <>
      <style jsx global>{`
        /* Global styles to ensure they apply to the article content */
        .article-content {
          font-size: 1.125rem !important;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif !important;
          line-height: 1.8 !important;
          letter-spacing: 0.01em !important;
          color: #333 !important;
          max-width: 100% !important;
        }
        
        .article-content p {
          margin-top: 0 !important;
          margin-bottom: 2rem !important;
          line-height: 1.8 !important;
        }
        
        .article-content h1, 
        .article-content h2, 
        .article-content h3, 
        .article-content h4, 
        .article-content h5, 
        .article-content h6 {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
          font-weight: 700 !important;
          margin-top: 3rem !important;
          margin-bottom: 1.5rem !important;
          line-height: 1.3 !important;
          color: #111 !important;
          padding-top: 0.5rem !important;
        }
        
        .article-content h1 {
          font-size: 2.25rem !important;
        }
        
        .article-content h2 {
          font-size: 1.875rem !important;
        }
        
        .article-content h3 {
          font-size: 1.5rem !important;
        }
        
        .article-content a {
          color: #3b82f6 !important;
          text-decoration: underline !important;
          text-underline-offset: 2px !important;
        }
        
        .article-content a:hover {
          color: #2563eb !important;
        }
        
        .article-content pre, 
        .article-content code {
          background-color: #f3f4f6 !important;
          padding: 0.3em 0.5em !important;
          border-radius: 0.25rem !important;
          font-size: 0.9em !important;
          font-family: "SF Mono", Menlo, Monaco, Consolas, monospace !important;
        }
        
        .article-content pre {
          padding: 1rem !important;
          margin: 2.5rem 0 !important;
          overflow-x: auto !important;
          white-space: pre-wrap !important;
        }
        
        .article-content blockquote {
          border-left: 4px solid #e5e7eb !important;
          padding: 0.5rem 0 0.5rem 1.5rem !important;
          font-style: italic !important;
          margin: 2.5rem 0 !important;
          color: #4b5563 !important;
          font-size: 1.1rem !important;
        }
        
        .article-content ul, 
        .article-content ol {
          padding-left: 2rem !important;
          margin-bottom: 2.5rem !important;
          margin-top: 1rem !important;
        }
        
        .article-content li {
          margin-bottom: 1rem !important;
          line-height: 1.7 !important;
        }
        
        .article-content img {
          max-width: 100% !important;
          height: auto !important;
          border-radius: 0.375rem !important;
          margin: 3rem auto !important;
          display: block !important;
        }
        
        .article-content hr {
          margin: 3.5rem 0 !important;
          border: 0 !important;
          height: 1px !important;
          background-color: #e5e7eb !important;
        }
        
        /* Add some spacing around figures, tables, and other elements */
        .article-content figure,
        .article-content table {
          margin: 2.5rem 0 !important;
        }
        
        .article-content figcaption {
          text-align: center !important;
          font-size: 0.9rem !important;
          color: #6b7280 !important;
          margin-top: 0.75rem !important;
        }
        
        .article-content table {
          width: 100% !important;
          border-collapse: collapse !important;
          margin: 2rem 0 !important;
        }
        
        .article-content th,
        .article-content td {
          padding: 0.75rem !important;
          border: 1px solid #e5e7eb !important;
        }
        
        .article-content th {
          background-color: #f9fafb !important;
        }
        
        /* Additional spacing for code blocks */
        .article-content pre code {
          display: block !important;
          padding: 1rem !important;
          line-height: 1.6 !important;
        }
        
        /* Ensure spacing between elements */
        .article-content > * + * {
          margin-top: 1.5rem !important;
        }
      `}</style>
      <div className="article-container" style={{ maxWidth: "100%", padding: "0 1rem" }}>
        <article 
          className={`article-content ${className}`}
          dangerouslySetInnerHTML={{ __html: content || '' }} 
        />
      </div>
    </>
  );
};

export default ArticleRenderer; 