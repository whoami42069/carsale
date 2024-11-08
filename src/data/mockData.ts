export interface Car {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  image?: string;
  previousPrice?: number;
  ownerPhone: string;
  regenerationParts?: string[];
}

export const FEATURED_CARS: Car[] = [
  {
    id: '1',
    make: 'Toyota',
    model: 'Camry',
    year: 2020,
    price: 22500,
    previousPrice: 24000,
    mileage: 35000,
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&q=80&w=1000',
    ownerPhone: '555-0123',
    regenerationParts: ['Engine', 'Transmission']
  },
  {
    id: '2',
    make: 'Honda',
    model: 'Accord',
    year: 2019,
    price: 20900,
    mileage: 42000,
    image: 'https://images.unsplash.com/photo-1582639510494-c80b5de9f148?auto=format&fit=crop&q=80&w=1000',
    ownerPhone: '555-0124'
  },
  {
    id: '3',
    make: 'Tesla',
    model: 'Model 3',
    year: 2021,
    price: 41900,
    previousPrice: 45000,
    mileage: 28000,
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80&w=1000',
    ownerPhone: '555-0125'
  }
];

export const BROWSE_CARS: Car[] = [
  {
    id: '4',
    make: 'BMW',
    model: '3 Series',
    year: 2018,
    price: 25900,
    mileage: 45000,
    ownerPhone: '555-0126',
    regenerationParts: ['Brakes', 'Suspension']
  },
  {
    id: '5',
    make: 'Mercedes',
    model: 'C-Class',
    year: 2019,
    price: 29900,
    mileage: 38000,
    ownerPhone: '555-0127'
  },
  {
    id: '6',
    make: 'Audi',
    model: 'A4',
    year: 2020,
    price: 31900,
    mileage: 32000,
    ownerPhone: '555-0128',
    regenerationParts: ['Turbocharger']
  }
];