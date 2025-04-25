'use client';

import { useState, useEffect } from 'react';
import { Watch } from '@/types/watch';

interface WatchFormProps {
  watch: Watch | null;
  onSave: (watch: any) => void;
  onCancel: () => void;
}

export default function WatchForm({ watch, onSave, onCancel }: WatchFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    image: '',
    serie: ''
  });

  useEffect(() => {
    if (watch) {
      setFormData({
        name: watch.name,
        price: watch.price.toString(),
        description: watch.description,
        image: watch.pathi,
        serie: watch.serie
      });
    }
  }, [watch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const watchData = {
      ...formData,
      price: parseFloat(formData.price)
    };
    
    if (watch) {
      onSave({ ...watchData, id: watch.id });
    } else {
      onSave(watchData);
    }
  };

  return (
    <div className="bg-white rounded-lg p-6 border">
      <h2 className="text-xl font-bold mb-6">{watch ? 'Edit' : 'Add'} Watch</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Watch Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Serie
            </label>
            <input
              type="text"
              name="serie"
              value={formData.serie}
              onChange={handleChange}
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Price ($)
          </label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            min="0"
            step="0.01"
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={3}
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Image URL
          </label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="http://example.com/image.jpg"
          />
          <p className="text-xs text-gray-500 mt-1">
            Leave empty to use default placeholder
          </p>
        </div>
        
        <div className="flex justify-end space-x-3 pt-4">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
          >
            {watch ? 'Update' : 'Save'} Watch
          </button>
        </div>
      </form>
    </div>
  );
}