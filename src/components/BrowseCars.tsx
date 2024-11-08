import React from 'react';
import { BROWSE_CARS } from '../data/mockData';
import { History, Phone } from 'lucide-react';

export default function BrowseCars() {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Available Cars</h2>
      <div className="grid gap-6">
        {BROWSE_CARS.map((car) => (
          <div
            key={car.id}
            className="bg-white rounded-lg shadow-md p-6 flex justify-between items-center"
          >
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900">
                {car.year} {car.make} {car.model}
              </h3>
              <div className="flex items-center gap-4 mt-2 text-gray-600">
                <div className="flex items-center gap-1">
                  <History className="w-4 h-4" />
                  <span>{car.mileage.toLocaleString()} km</span>
                </div>
                {car.regenerationParts && (
                  <div className="flex gap-2">
                    {car.regenerationParts.map((part) => (
                      <span
                        key={part}
                        className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                      >
                        {part}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-2xl font-bold text-green-600">
                ${car.price.toLocaleString()}
              </span>
              <a
                href={`tel:${car.ownerPhone}`}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                <Phone className="w-4 h-4" />
                Contact
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}