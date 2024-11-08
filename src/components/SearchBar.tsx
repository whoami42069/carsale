import React from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';

export default function SearchBar() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex gap-4 p-4 bg-white rounded-xl shadow-lg">
        <div className="flex-1 flex items-center gap-3 px-4 border rounded-lg focus-within:border-blue-500">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search by make, model, or year..."
            className="flex-1 py-2 outline-none"
          />
        </div>
        
        <div className="flex gap-2">
          <select className="px-4 py-2 border rounded-lg appearance-none bg-white">
            <option value="">Price Range</option>
            <option value="0-10000">$0 - $10,000</option>
            <option value="10000-20000">$10,000 - $20,000</option>
            <option value="20000-30000">$20,000 - $30,000</option>
            <option value="30000+">$30,000+</option>
          </select>
          
          <button className="px-4 py-2 border rounded-lg hover:bg-gray-50 transition-colors">
            <SlidersHorizontal className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
}