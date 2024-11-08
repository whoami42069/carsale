import React, { useState } from 'react';
import { Car, Package2 } from 'lucide-react';

interface TabProps {
  isActive: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const Tab: React.FC<TabProps> = ({ isActive, onClick, children }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-lg ${
      isActive
        ? 'bg-blue-600 text-white'
        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
    }`}
  >
    {children}
  </button>
);

export default function SellCarForm() {
  const [activeTab, setActiveTab] = useState('model');
  const [formData, setFormData] = useState({
    make: '',
    model: '',
    year: '',
    mileage: '',
    regenerationParts: [] as string[],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Thank you for submitting your car details!');
  };

  const regenerationPartsList = [
    'Engine',
    'Transmission',
    'Brakes',
    'Suspension',
    'Turbocharger',
    'Battery',
  ];

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <div className="flex items-center gap-2 mb-6">
        <Car className="w-6 h-6 text-blue-600" />
        <h2 className="text-2xl font-bold text-gray-900">Sell Your Car</h2>
      </div>

      <div className="flex gap-2 mb-6">
        <Tab
          isActive={activeTab === 'model'}
          onClick={() => setActiveTab('model')}
        >
          Model Details
        </Tab>
        <Tab
          isActive={activeTab === 'specs'}
          onClick={() => setActiveTab('specs')}
        >
          Specifications
        </Tab>
        <Tab
          isActive={activeTab === 'parts'}
          onClick={() => setActiveTab('parts')}
        >
          Regeneration Parts
        </Tab>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {activeTab === 'model' && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Make
              </label>
              <input
                type="text"
                value={formData.make}
                onChange={(e) =>
                  setFormData({ ...formData, make: e.target.value })
                }
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., Toyota"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Model
              </label>
              <input
                type="text"
                value={formData.model}
                onChange={(e) =>
                  setFormData({ ...formData, model: e.target.value })
                }
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., Camry"
              />
            </div>
          </div>
        )}

        {activeTab === 'specs' && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Year
              </label>
              <input
                type="number"
                value={formData.year}
                onChange={(e) =>
                  setFormData({ ...formData, year: e.target.value })
                }
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., 2020"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Mileage (km)
              </label>
              <input
                type="number"
                value={formData.mileage}
                onChange={(e) =>
                  setFormData({ ...formData, mileage: e.target.value })
                }
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., 50000"
              />
            </div>
          </div>
        )}

        {activeTab === 'parts' && (
          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Regeneration Parts
            </label>
            <div className="grid grid-cols-2 gap-3">
              {regenerationPartsList.map((part) => (
                <label
                  key={part}
                  className="flex items-center gap-2 p-3 border rounded-lg cursor-pointer hover:bg-gray-50"
                >
                  <input
                    type="checkbox"
                    checked={formData.regenerationParts.includes(part)}
                    onChange={(e) => {
                      const updatedParts = e.target.checked
                        ? [...formData.regenerationParts, part]
                        : formData.regenerationParts.filter((p) => p !== part);
                      setFormData({
                        ...formData,
                        regenerationParts: updatedParts,
                      });
                    }}
                    className="w-4 h-4 text-blue-600"
                  />
                  <span className="text-gray-700">{part}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        <div className="flex justify-end pt-4">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2"
          >
            <Package2 className="w-4 h-4" />
            Submit Listing
          </button>
        </div>
      </form>
    </div>
  );
}