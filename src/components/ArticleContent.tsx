'use client';

import React from 'react';
import ArticleRenderer from './ArticleRenderer';

interface ArticleContentProps {
  content: string;
}

/**
 * ArticleContent - A simple wrapper for the article renderer
 */
const ArticleContent: React.FC<ArticleContentProps> = ({ content }) => {
  return <ArticleRenderer content={content} />;
};

export default ArticleContent; 