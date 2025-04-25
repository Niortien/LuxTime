// File: components/WatchDashboard.tsx
'use client';

import { useState, useEffect } from 'react';
import Sidebar from '@/components/dashbord/Sidebar';
import WatchList from '@/components/dashbord/DashbordWatch';
import WatchForm from '@/components/dashbord/Watchform';
import { Watch } from '@/types/watch';
import { watches } from '@/data/watches';

export default function WatchDashboard() {
  const [watche, setWatches] = useState<Watch[]>(watches);

  const [selectedWatch, setSelectedWatch] = useState<Watch | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('All Watches');

  const addWatch = (watch: Omit<Watch, 'id' | 'createdAt'>) => {
    const date = new Date();
    const formattedDate = `${date.getDate()} ${date.toLocaleString('default', { month: 'short' })} ${date.getFullYear()}`;
    
    const newWatch: Watch = {
      ...watch,
      id: Date.now(),
    
    };
    
    setWatches([...watches, newWatch]);
    setIsFormOpen(false);
  };

  const updateWatch = (updatedWatch: Watch) => {
    setWatches(watches.map(watch => 
      watch.id === updatedWatch.id ? updatedWatch : watch
    ));
    setSelectedWatch(null);
    setIsFormOpen(false);
  };

  const deleteWatch = (id: number) => {
    setWatches(watches.filter(watch => watch.id !== id));
  };

  const filteredWatches = watches.filter(watch => 
    watch.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    watch.serie.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getProgressPercentage = (index: number) => {
    // Simulate different progress states
    const percentages = [75, 60, 45];
    return percentages[index % percentages.length];
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-1 overflow-auto bg-white rounded-lg m-4 p-6">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold">Welcome, Admin</h1>
            <p className="text-gray-500">Click on watch details</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search watches..."
                className="border rounded-lg pl-10 pr-4 py-2 w-64"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <svg 
                className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
            <button
              onClick={() => {
                setSelectedWatch(null);
                setIsFormOpen(true);
              }}
              className="bg-blue-600 text-white rounded-lg px-4 py-2 flex items-center gap-2"
            >
              <span>Create new</span>
            </button>
          </div>
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-blue-100 rounded-lg p-4">
            <h3 className="font-medium text-blue-700 mb-2">Montres de luxe</h3>
            <div className="mb-2 h-2 bg-blue-200 rounded-full">
              <div 
                className="h-2 bg-blue-500 rounded-full" 
                style={{ width: `${getProgressPercentage(0)}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-blue-700">{getProgressPercentage(0)}%</span>
              <span className="text-gray-500">Total: {watches.filter(w => w.price > 5000).length}</span>
            </div>
          </div>
          
          <div className="bg-red-100 rounded-lg p-4">
            <h3 className="font-medium text-red-700 mb-2">Montres milieu de gamme</h3>
            <div className="mb-2 h-2 bg-red-200 rounded-full">
              <div 
                className="h-2 bg-red-500 rounded-full" 
                style={{ width: `${getProgressPercentage(1)}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-red-700">{getProgressPercentage(1)}%</span>
              <span className="text-gray-500">Total: {watches.filter(w => w.price <= 5000 && w.price > 1000).length}</span>
            </div>
          </div>
          
          <div className="bg-amber-100 rounded-lg p-4">
            <h3 className="font-medium text-amber-700 mb-2">Montres abordables</h3>
            <div className="mb-2 h-2 bg-amber-200 rounded-full">
              <div 
                className="h-2 bg-amber-500 rounded-full" 
                style={{ width: `${getProgressPercentage(2)}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-amber-700">{getProgressPercentage(2)}%</span>
              <span className="text-gray-500">Total: {watches.filter(w => w.price <= 1000).length}</span>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-4 mb-4 border-b">
          <button
            className={`px-4 py-2 ${activeTab === 'All Watches' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('All Watches')}
          >
            All Watches
          </button>
          <button
            className={`px-4 py-2 ${activeTab === 'Luxury' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('Luxury')}
          >
            Luxury
          </button>
          <button
            className={`px-4 py-2 ${activeTab === 'Popular' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('Popular')}
          >
            Popular
          </button>
        </div>

        {/* Watch Form or List */}
        {isFormOpen ? (
          <WatchForm 
            watch={selectedWatch} 
            onSave={selectedWatch ? updateWatch : addWatch}
            onCancel={() => {
              setIsFormOpen(false);
              setSelectedWatch(null);
            }}
          />
        ) : 
        (
          <WatchList 
            watches={filteredWatches} 
            onEdit={(watch:Watch) => {
              setSelectedWatch(watch);
              setIsFormOpen(true);
            }}
            onDelete={deleteWatch}
          />
        )}
      </div>
    </div>
  );
}