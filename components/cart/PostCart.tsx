import React from 'react';
import { CheckCircle2, Circle, User } from 'lucide-react';
import { Cart } from '@/types/cart';


interface CartListProps {
  items: Cart[]; 
}

export function PostCart({ items }: CartListProps) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-lg shadow-md p-4 transition-all hover:shadow-lg"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                {item.completed ? (
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                ) : (
                  <Circle className="w-6 h-6 text-gray-400" />
                )}
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
                <div className="flex items-center mt-1 text-sm text-gray-500">
                  <User className="w-4 h-4 mr-1" />
                  <span>User ID: {item.userId}</span>
                </div>
              </div>
            </div>
            <span className="text-sm font-medium text-gray-500">#{item.id}</span>
          </div>
        </div>
      ))}
    </div>
  );
}