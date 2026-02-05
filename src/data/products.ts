export interface Product {
  id: number;
  name: string;
  price: number;
  images: string[];
  tag?: string;
  description?: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Radiant Lipstick',
    price: 19.99,
    images: [
      'https://picsum.photos/seed/1/600/800',
      'https://picsum.photos/seed/11/600/800',
      'https://picsum.photos/seed/12/600/800'
    ],
    tag: 'New',
    description: 'A long-lasting lipstick with rich pigments and a creamy finish to keep your lips vibrant all day.'
  },
  {
    id: 2,
    name: 'Silk Foundation',
    price: 29.99,
    images: [
      'https://picsum.photos/seed/2/600/800',
      'https://picsum.photos/seed/21/600/800',
      'https://picsum.photos/seed/22/600/800'
    ],
    description: 'Buildable medium coverage foundation that blends seamlessly for a natural, flawless look.'
  },
  {
    id: 3,
    name: 'Glow Highlighter',
    price: 14.99,
    images: [
      'https://picsum.photos/seed/3/600/800',
      'https://picsum.photos/seed/31/600/800',
      'https://picsum.photos/seed/32/600/800'
    ],
    tag: 'Hot',
    description: 'A shimmering highlighter to accentuate cheekbones with a soft, luminous glow.'
  },
  {
    id: 4,
    name: 'Velvet Eyeshadow',
    price: 24.5,
    images: [
      'https://picsum.photos/seed/4/600/800',
      'https://picsum.photos/seed/41/600/800',
      'https://picsum.photos/seed/42/600/800',
      'https://picsum.photos/seed/43/600/800'
    ],
    description: 'Highly pigmented, blendable eyeshadow with a velvety texture for day-to-night looks.'
  },
  {
    id: 5,
    name: 'Blush Compact',
    price: 12.0,
    images: [
      'https://picsum.photos/seed/5/600/800',
      'https://picsum.photos/seed/51/600/800',
      'https://picsum.photos/seed/52/600/800'
    ],
    description: 'Compact blush that gives a natural flush and blends easily into the skin.'
  },
  {
    id: 6,
    name: 'Luxury Perfume',
    price: 59.99,
    images: [
      'https://picsum.photos/seed/6/600/800',
      'https://picsum.photos/seed/61/600/800',
      'https://picsum.photos/seed/62/600/800',
      'https://picsum.photos/seed/63/600/800',
      'https://picsum.photos/seed/64/600/800'
    ],
    tag: 'Limited',
    description: 'A sophisticated fragrance with floral and woody notes, perfect for special occasions.'
  },
  {
    id: 7,
    name: 'Nourishing Serum',
    price: 39.99,
    images: [
      'https://picsum.photos/seed/7/600/800',
      'https://picsum.photos/seed/71/600/800',
      'https://picsum.photos/seed/72/600/800'
    ],
    description: 'A lightweight serum packed with vitamins to hydrate and restore skin radiance.'
  },
  {
    id: 8,
    name: 'Hydrating Mask',
    price: 9.99,
    images: [
      'https://picsum.photos/seed/8/600/800',
      'https://picsum.photos/seed/81/600/800',
      'https://picsum.photos/seed/82/600/800'
    ],
    description: 'An intensive hydrating mask to replenish moisture and soften skin overnight.'
  }
];

export default products;
