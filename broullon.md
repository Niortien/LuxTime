import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { MenuSquare, ShoppingBag, Globe, ChevronDown } from 'lucide-react';
import Link from 'next/link';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const handleCartClick = () => {
    router.push('/cart');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="flex justify-around items-center pt-2 max-w-screen-2xl relative px-4">
        {/* Mobile Menu Button */}
        <div className="h-10 sm:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="focus:outline-none"
          >
            <MenuSquare size={40} className="text-blue-600"/>
          </button>
        </div>

        {/* Logo */}
        <Link 
          href="/" 
          className="text-4xl sm:text-3xl font-bold sm:order-first"
        >
          LuxTime
        </Link>

        {/* Navigation Links */}
        <div 
          className={`
            fixed sm:relative top-0 right-0 h-full sm:h-auto w-64 sm:w-auto
            bg-white sm:bg-transparent shadow-lg sm:shadow-none
            transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} sm:translate-x-0
            transition-transform duration-300 ease-in-out
            flex flex-col sm:flex-row items-center justify-start sm:justify-center
            pt-20 sm:pt-0 gap-8 sm:gap-12 z-20
          `}
        >
          <Link 
            href="/" 
            className="hover:text-blue-600 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            href="/collection" 
            className="hover:text-blue-600 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Collection
          </Link>
          <Link 
            href="/about" 
            className="hover:text-blue-600 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center gap-6">
          <div className="hidden sm:flex items-center gap-4">
            <button 
              className="relative hover:text-blue-600 transition-colors"
              onClick={handleCartClick}
            >
              <ShoppingBag size={24} />
              <span className="absolute -top-2 -right-2 bg-amber-400 text-xs w-5 h-5 rounded-full flex items-center justify-center">
                0
              </span>
            </button>
            <Globe size={20} className="text-gray-600" />
          </div>
          
          <div className="flex items-center gap-1 cursor-pointer">
            <span>Eng</span>
            <ChevronDown size={16} />
          </div>
        </div>

        {/* Overlay for mobile menu */}
        {isMenuOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-10 sm:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </nav>

      {/* Page Content */}
      <div className="container mx-auto mt-8 px-4">
        <h1 className="text-2xl font-bold text-center">Welcome to LuxTime</h1>
      </div>
    </div>
  );
}

export default App;