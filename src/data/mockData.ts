import { CoffeeProduct } from '@/types/coffee';

export const mockCoffeeProducts: CoffeeProduct[] = [
  {
    id: '1',
    name: 'Ethiopian Yirgacheffe',
    origin: 'Ethiopia',
    roastProfile: 'Light',
    flavorNotes: [
      { id: '1', name: 'Floral' },
      { id: '2', name: 'Citrus' },
      { id: '3', name: 'Bergamot' }
    ],
    brewingMethods: ['Pour Over', 'Aeropress'],
    rating: 4.5,
    description: 'A bright and complex coffee with distinctive floral and citrus notes.',
    price: 18.99,
    imageUrl: '/placeholder.svg',
    reviews: [
      {
        id: '1',
        userId: '1',
        username: 'coffeelover',
        rating: 5,
        comment: 'Absolutely wonderful coffee with amazing floral notes!',
        createdAt: new Date().toISOString(),
      }
    ],
  },
  {
    id: '2',
    name: 'Colombian Supremo',
    origin: 'Colombia',
    roastProfile: 'Medium',
    flavorNotes: [
      { id: '4', name: 'Chocolate' },
      { id: '5', name: 'Caramel' },
      { id: '6', name: 'Nutty' }
    ],
    brewingMethods: ['Espresso', 'French Press'],
    rating: 4.3,
    description: 'A well-balanced coffee with sweet chocolate and caramel notes.',
    price: 16.99,
    imageUrl: '/placeholder.svg',
    reviews: [
      {
        id: '2',
        userId: '2',
        username: 'beanmaster',
        rating: 4,
        comment: 'Great everyday coffee with consistent flavor.',
        createdAt: new Date().toISOString(),
      }
    ],
  },
  {
    id: '3',
    name: 'Brazilian Arabica',
    origin: 'Brazil',
    roastProfile: 'Medium',
    flavorNotes: [
      { id: '7', name: 'Chocolate' },
      { id: '8', name: 'Nuts' },
      { id: '9', name: 'Fruit' }
    ],
    brewingMethods: ['French Press', 'Drip Coffee'],
    rating: 4.2,
    description: 'A smooth and balanced coffee with rich chocolate and nutty notes, complemented by subtle fruit undertones.',
    price: 15.99,
    imageUrl: '/lovable-uploads/b8d7326a-7a29-47b6-85f3-e89e65e462dd.png',
    reviews: [
      {
        id: '3',
        userId: '3',
        username: 'coffeemaster',
        rating: 4,
        comment: 'Perfect everyday coffee with great balance.',
        createdAt: new Date().toISOString(),
      }
    ],
  },
  {
    id: '4',
    name: 'Lavazza Gran Espresso',
    origin: 'South America, Central America, Asia',
    roastProfile: 'Dark',
    flavorNotes: [
      { id: '10', name: 'Dark Chocolate' },
      { id: '11', name: 'Spices' }
    ],
    brewingMethods: ['Espresso', 'Moka Pot'],
    rating: 4.4,
    description: 'A rich and full-bodied espresso blend with intense dark chocolate notes and aromatic spices.',
    price: 25.00,
    imageUrl: '/lovable-uploads/b8d7326a-7a29-47b6-85f3-e89e65e462dd.png',
    reviews: [
      {
        id: '4',
        userId: '4',
        username: 'espressolover',
        rating: 5,
        comment: 'Perfect crema and rich flavor profile!',
        createdAt: new Date().toISOString(),
      }
    ],
  },
  {
    id: '5',
    name: 'Ethiopian Light Roast',
    origin: 'Ethiopia',
    roastProfile: 'Light',
    flavorNotes: [
      { id: '12', name: 'Strawberry' },
      { id: '13', name: 'Blueberry' },
      { id: '14', name: 'Jasmine Tea' },
      { id: '15', name: 'Citrus' }
    ],
    brewingMethods: ['Pour Over', 'Chemex'],
    rating: 4.7,
    description: 'A bright and complex Ethiopian coffee with vibrant berry notes and floral undertones.',
    price: 53.00,
    imageUrl: '/lovable-uploads/b8d7326a-7a29-47b6-85f3-e89e65e462dd.png',
    reviews: [
      {
        id: '5',
        userId: '5',
        username: 'lightroastfan',
        rating: 5,
        comment: 'Amazing fruity notes and wonderful aroma!',
        createdAt: new Date().toISOString(),
      }
    ],
  },
  {
    id: '6',
    name: 'Sumatran Medium-Dark Roast',
    origin: 'Sumatra, Indonesia',
    roastProfile: 'Medium-Dark',
    flavorNotes: [
      { id: '16', name: 'Earthy' },
      { id: '17', name: 'Chocolate' },
      { id: '18', name: 'Herbal' }
    ],
    brewingMethods: ['French Press', 'Cold Brew'],
    rating: 4.3,
    description: 'A bold and earthy Indonesian coffee with rich chocolate notes and herbal undertones.',
    price: 14.95,
    imageUrl: '/lovable-uploads/b8d7326a-7a29-47b6-85f3-e89e65e462dd.png',
    reviews: [
      {
        id: '6',
        userId: '6',
        username: 'indonesiancoffee',
        rating: 4,
        comment: 'Rich and complex with amazing earthiness.',
        createdAt: new Date().toISOString(),
      }
    ],
  },
  {
    id: '7',
    name: 'Guatemalan Medium-Dark Roast',
    origin: 'Antigua, Guatemala',
    roastProfile: 'Medium-Dark',
    flavorNotes: [
      { id: '19', name: 'Chocolate' },
      { id: '20', name: 'Caramel' },
      { id: '21', name: 'Nutty' }
    ],
    brewingMethods: ['Pour Over', 'Espresso'],
    rating: 4.5,
    description: 'A well-balanced Guatemalan coffee featuring rich chocolate and caramel notes with a nutty finish.',
    price: 19.99,
    imageUrl: '/lovable-uploads/b8d7326a-7a29-47b6-85f3-e89e65e462dd.png',
    reviews: [
      {
        id: '7',
        userId: '7',
        username: 'guatemalafan',
        rating: 5,
        comment: 'Perfectly balanced with amazing chocolate notes!',
        createdAt: new Date().toISOString(),
      }
    ],
  }
];