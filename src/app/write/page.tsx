'use client';

import { useState } from 'react';

export default function WritePage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would save the post to a database
    alert('Your post has been saved!');
  };
  
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">Write a New Post</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              className="w-full px-4 py-3 text-3xl font-bold border-0 border-b border-gray-200 focus:ring-0 focus:border-gray-900 text-gray-900 bg-white"
              required
            />
          </div>
          
          <div className="relative">
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Tell your story..."
              className="w-full px-4 py-3 min-h-[400px] text-lg border-0 focus:ring-0 resize-none text-gray-900 bg-white"
              required
            ></textarea>
            
            <div className="absolute bottom-4 right-4 text-gray-400 text-sm">
              {content.length} characters
            </div>
          </div>
          
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="px-6 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Save Draft
            </button>
            <button
              type="submit"
              className="px-6 py-2 rounded-full bg-gray-900 text-white hover:bg-gray-800 transition-colors"
            >
              Publish
            </button>
          </div>
        </form>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-xl font-bold mb-4 text-gray-900">Formatting Tips</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>Use <strong>**bold**</strong> for bold text</li>
            <li>Use <em>*italic*</em> for italic text</li>
            <li>Use # for headings (# Heading 1, ## Heading 2)</li>
            <li>Use - or * for bullet points</li>
            <li>Use 1. 2. 3. for numbered lists</li>
            <li>Use &gt; for blockquotes</li>
            <li>Use `code` for inline code</li>
            <li>Use ```language for code blocks</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 