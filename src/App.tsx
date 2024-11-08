import React, { useState } from 'react';
import { Car } from 'lucide-react';
import SearchBar from './components/SearchBar';
import CarCard from './components/CarCard';
import SellCarForm from './components/SellCarForm';
import BrowseCars from './components/BrowseCars';
import { FEATURED_CARS } from './data/mockData';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const renderContent = () => {
    switch (activeSection) {
      case 'browse':
        return <BrowseCars />;
      case 'sell':
        return <SellCarForm />;
      case 'about':
        return (
          <div className="max-w-4xl mx-auto p-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">About Us</h2>
            <p className="text-xl text-gray-600">Sell your araba niyazi</p>
          </div>
        );
      default:
        return (
          <>
            {/* Hero Section */}
            <div className="relative bg-blue-600 text-white">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800"></div>
              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="text-center">
                  <h1 className="text-4xl font-bold mb-6">
                    Find Your Perfect Pre-Owned Vehicle
                  </h1>
                  <p className="text-xl text-blue-100 mb-12">
                    Browse through thousands of quality used cars with verified histories
                    and trusted sellers
                  </p>
                  <SearchBar />
                </div>
              </div>
            </div>

            {/* Featured Listings */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Listings</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {FEATURED_CARS.map((car) => (
                  <CarCard key={car.id} {...car} />
                ))}
              </div>
            </main>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div 
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => setActiveSection('home')}
            >
              <Car className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">AutoMarket</span>
            </div>
            <nav className="flex gap-6">
              <button
                onClick={() => setActiveSection('browse')}
                className={`text-gray-600 hover:text-gray-900 ${
                  activeSection === 'browse' ? 'font-semibold text-blue-600' : ''
                }`}
              >
                Browse Cars
              </button>
              <button
                onClick={() => setActiveSection('sell')}
                className={`text-gray-600 hover:text-gray-900 ${
                  activeSection === 'sell' ? 'font-semibold text-blue-600' : ''
                }`}
              >
                Sell Your Car
              </button>
              <button
                onClick={() => setActiveSection('about')}
                className={`text-gray-600 hover:text-gray-900 ${
                  activeSection === 'about' ? 'font-semibold text-blue-600' : ''
                }`}
              >
                About
              </button>
            </nav>
          </div>
        </div>
      </header>

      {renderContent()}

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About AutoMarket</h3>
              <p className="text-gray-400">
                Your trusted destination for quality pre-owned vehicles. We connect
                buyers with verified sellers to ensure a safe and satisfactory
                car-buying experience.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><button onClick={() => setActiveSection('browse')} className="hover:text-white">How It Works</button></li>
                <li><button onClick={() => setActiveSection('about')} className="hover:text-white">Safety Tips</button></li>
                <li><button className="hover:text-white">Contact Support</button></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">
                Subscribe to get updates on new listings and automotive news.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
                />
                <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AutoMarket. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;