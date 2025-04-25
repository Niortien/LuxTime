import { User } from '@/types/user';
import Image from 'next/image';

interface UserListProps {
  watches: User[];
  onEdit: (watch: User) => void;
  onDelete: (id: string) => void;
}

export default function UserList({ watches, onEdit, onDelete }: UserListProps) {
  return (
    <div className="bg-white rounded-lg">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Watch</th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Series</th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created</th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {watches.length === 0 ? (
              <tr>
                <td colSpan={5} className="py-4 px-6 text-center text-gray-500">
                  No watches found
                </td>
              </tr>
            ) : (
              watches.map((watch) => (
                <tr key={watch.id} className="hover:bg-gray-50">
                  <td className="py-4 px-6">
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex-shrink-0 bg-gray-200 rounded-full">
                        {watch.pathi ? (
                          <div className="h-10 w-10 rounded-full overflow-hidden bg-gray-200">
                            {/* This would be an actual image in a real app */}
                            <div className="h-full w-full bg-blue-200 flex items-center justify-center text-blue-600 font-bold">
                              {watch.name.charAt(0)}
                            </div>
                          </div>
                        ) : (
                          <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                            <span className="text-gray-500 font-medium">{watch.name.charAt(0)}</span>
                          </div>
                        )}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{watch.name}</div>
                        <div className="text-sm text-gray-500 truncate max-w-xs">{watch.description}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-500">{watch.serie}</td>
                  <td className="py-4 px-6 text-sm text-gray-900">${watch.price.toLocaleString()}</td>
                  <td className="py-4 px-6 text-sm text-gray-500">{watch.id}</td>
                  <td className="py-4 px-6 text-sm font-medium">
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => onEdit(watch)} 
                        className="text-blue-600 hover:text-blue-900"
                      >
                        Edit
                      </button>
                      <button 
                        onClick={() => onDelete(watch.name)} 
                        className="text-red-600 hover:text-red-900"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
