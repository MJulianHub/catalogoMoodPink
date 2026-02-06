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
    name: 'Victoria Secret Pure Seduction body mist',
    price: 650,
    images: [
      'https://m.media-amazon.com/images/I/61PT9v-JHgL._SL1500_.jpg',
      //'https://picsum.photos/seed/11/600/800',
      //'https://picsum.photos/seed/12/600/800'
    ],
    tag: 'New',
    description: 'A long-lasting lipstick with rich pigments and a creamy finish to keep your lips vibrant all day.'
  },
  {
    id: 2,
    name: 'Victoria Secret Velvet Petals body mist',
    price: 650,
    images: [
      'https://www.victoriassecret.com.au/dw/image/v2/BLPL_PRD/on/demandware.static/-/Sites-beauty-master-catalog/default/dwc0f2ad1d/large/112047177928_OF_F.jpg?sw=1500&sh=1500&sm=fit',
     // 'https://picsum.photos/seed/21/600/800',
     // 'https://picsum.photos/seed/22/600/800'
    ],
    description: 'Buildable medium coverage foundation that blends seamlessly for a natural, flawless look.'
  },
  {
    id: 3,
    name: 'Victoria Secret Coconut Passion body mist',
    price: 650,
    images: [
      'https://www.victoriassecret.com.au/dw/image/v2/BLPL_PRD/on/demandware.static/-/Sites-beauty-master-catalog/default/dw946a6ace/large/112047173336_OF_F.jpg?sw=1500&sh=1500&sm=fit',
      //'https://picsum.photos/seed/31/600/800',
      //'https://picsum.photos/seed/32/600/800'
    ],
    tag: 'Hot',
    description: 'A shimmering highlighter to accentuate cheekbones with a soft, luminous glow.'
  },
  {
    id: 4,
    name: 'Victoria Secret Midnight Bloom body mist',
    price: 650,
    images: [
      'https://www.victoriassecret.com.au/dw/image/v2/BLPL_PRD/on/demandware.static/-/Sites-beauty-master-catalog/default/dwdc0fab11/large/112047174285_OF_F.jpg?sw=1500&sh=1500&sm=fit',
      //'https://picsum.photos/seed/41/600/800',
      //'https://picsum.photos/seed/42/600/800',
      //'https://picsum.photos/seed/43/600/800'
    ],
    description: 'Highly pigmented, blendable eyeshadow with a velvety texture for day-to-night looks.'
  },
  {
    id: 5,
    name: 'Victoria Secret Bare Vanilla body mist',
    price: 650,
    images: [
      'https://www.victoriassecret.com.au/dw/image/v2/BLPL_PRD/on/demandware.static/-/Sites-beauty-master-catalog/default/dw408ca6cf/large/112047178527_OF_F.jpg?sw=1500&sh=1500&sm=fit',
     // 'https://picsum.photos/seed/51/600/800',
     // 'https://picsum.photos/seed/52/600/800'
    ],
    description: 'Compact blush that gives a natural flush and blends easily into the skin.'
  },
  {
    id: 6,
    name: 'Victoria Secret Dream Angel body mist',
    price: 950,
    images: [
      'https://www.victoriassecret.com/p/874x1165/tif/f9/76/f976c986c1fe4cf19db5c8c45055a6b2/112144823872_OM_F.jpg',
      //'https://picsum.photos/seed/61/600/800',
      //'https://picsum.photos/seed/62/600/800',
      //'https://picsum.photos/seed/63/600/800',
      //'https://picsum.photos/seed/64/600/800'
      //'https://picsum.photos/seed/64/600/800'
    ],
    tag: 'Limited',
    description: 'A sophisticated fragrance with floral and woody notes, perfect for special occasions.'
  },
  {
    id: 7,
    name: 'Victoria Secret heavenly body mist',
    price: 950,
    images: [
      'https://lacasadeltinte.com/wp-content/uploads/2024/09/victorias_secret__bare_magnoli_1723071455_0a8a92f4_progressive.jpg',
      //'https://picsum.photos/seed/71/600/800',
      //'https://picsum.photos/seed/72/600/800'
    ],
    description: 'A lightweight serum packed with vitamins to hydrate and restore skin radiance.'
  },
  {
    id: 8,
    name: 'Victoria Secret Rose body mist',
    price: 950,
    images: [
      'https://www.victoriassecret.com.au/dw/image/v2/BLPL_PRD/on/demandware.static/-/Sites-beauty-master-catalog/default/dwc17b9c73/large/112210512161_OM_F.jpg?sw=1500&sh=1500&sm=fit',
      //'https://picsum.photos/seed/81/600/800',
      //'https://picsum.photos/seed/82/600/800'
    ],
    description: 'An intensive hydrating mask to replenish moisture and soften skin overnight.'
  }
];

export default products;
