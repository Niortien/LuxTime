import React from 'react';
import { Calendar, User, Tag } from 'lucide-react';
import { Post } from '@/types/posts';


interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-6">
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
          <span className="flex items-center gap-1">
            <Calendar size={16} />
            {post.date}
          </span>
          <span className="flex items-center gap-1">
            <User size={16} />
            {post.author}
          </span>
          <span className="flex items-center gap-1">
            <Tag size={16} />
            {post.category}
          </span>
        </div>
        
        <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
          {post.title}
        </h2>
        
        <p className="text-gray-600 line-clamp-3">
          {post.content}
        </p>
        
        <button className="mt-4 text-blue-600 font-medium hover:text-blue-800 transition-colors">
          Read more →
        </button>
      </div>
    </article>
  );
}