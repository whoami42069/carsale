import React from 'react';
import { Phone, Info, Heart, History } from 'lucide-react';

interface CarCardProps {
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  image: string;
  previousPrice?: number;
  ownerPhone: string;
}

export default function CarCard({
  make,
  model,
  year,
  price,
  mileage,
  image,
  previousPrice,
  ownerPhone,
}: CarCardProps) {
  const [isLiked, setIsLiked] = React.useState(false);

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={`${year} ${make} ${model}`}
          className="w-full h-full object-cover"
        />
        <button
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-4 right-4 p-2 bg-white/90 rounded-full shadow-md hover:bg-white"
        >
          <Heart
            className={`w-5 h-5 ${
              isLiked ? 'fill-red-500 stroke-red-500' : 'stroke-gray-600'
            }`}
          />
        </button>
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-semibold text-gray-900">
            {year} {make} {model}
          </h3>
          <div className="flex flex-col items-end">
            <span className="text-lg font-bold text-green-600">
              ${price.toLocaleString()}
            </span>
            {previousPrice && (
              <span className="text-sm text-gray-500 line-through">
                ${previousPrice.toLocaleString()}
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-1">
            <History className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-600">
              {mileage.toLocaleString()} mi
            </span>
          </div>
        </div>

        <div className="flex gap-2 mt-4">
          <a
            href={`tel:${ownerPhone}`}
            className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>Contact Owner</span>
          </a>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Info className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
}