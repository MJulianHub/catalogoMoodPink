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
    name: "Pure Seduction Fragrance Mist",
    price: 650,
    images: [
      "https://www.victoriassecret.com/p/1000x1333/png/zz/25/02/06/02/112592031340_OM_F.jpg",
      "https://www.victoriassecret.com/p/1000x1333/png/zz/25/05/02/05/112592031340_alt.jpg",
      //'https://picsum.photos/seed/12/600/800'
    ],
    tag: "New",
    description: `Notes Top: Casaba Melon, Red Plum Heart: Morning Dew Cyclamen, Freesia Base: Sheer Musk, Rose Wood 250 ml/8.4 fl oz. Domestic`,
  },
  {
    id: 2,
    name: "Velvet Petals Fragrance Mist",
    price: 650,
    images: [
      //"https://www.victoriassecret.com.au/dw/image/v2/BLPL_PRD/on/demandware.static/-/Sites-beauty-master-catalog/default/dwc0f2ad1d/large/112047177928_OF_F.jpg?sw=1500&sh=1500&sm=fit",
      "https://www.victoriassecret.com/p/1000x1333/png/zz/25/02/12/00/112592037928_OM_F.jpg",
      "https://www.victoriassecret.com/p/760x1013/png/zz/25/05/02/05/112592037928_alt.jpg",
    ],
    description: `Notes Top: Sparkling Starfruit, Sweet Almond Glaze Accord Heart: Coconut Milk, Sugared Apricot Blossom Base: Cozy Musks, Creamy Sandalwood 250 ml/8.4 fl oz. Domestic`,
  },
  {
    id: 3,
    name: "Coconut Passion Fragrance Mist",
    price: 650,
    images: [
      //'https://www.victoriassecret.com.au/dw/image/v2/BLPL_PRD/on/demandware.static/-/Sites-beauty-master-catalog/default/dw946a6ace/large/112047173336_OF_F.jpg?sw=1500&sh=1500&sm=fit',
      "https://www.victoriassecret.com/p/1000x1333/png/zz/25/02/12/00/112592033336_OM_F.jpg",
      "https://www.victoriassecret.com/p/1000x1333/png/zz/25/05/02/05/112592033336_alt.jpg",
    ],
    tag: "Hot",
    description: `Notes Top: Blackberry, Coconut Milk Heart: Wild Lily, Raspberry Blossom Base: Sugared Amber, Warm Sand 250 ml/8.4 fl oz. Domestic`,
  },
  {
    id: 4,
    name: "Midnight Blooms Fragrance Mist",
    price: 650,
    images: [
      //"https://www.victoriassecret.com.au/dw/image/v2/BLPL_PRD/on/demandware.static/-/Sites-beauty-master-catalog/default/dwdc0fab11/large/112047174285_OF_F.jpg?sw=1500&sh=1500&sm=fit",
      "https://www.victoriassecret.com/p/1000x1333/png/zz/25/02/06/02/112592034285_OM_F.jpg",
      "https://www.victoriassecret.com/p/760x1013/png/zz/25/05/02/05/112592034285_alt.jpg",
      //'https://picsum.photos/seed/43/600/800'
    ],
    description: `Notes Top: Airy Pink Freesia, Berry Bouquet Heart: Moon Flower, Whipped Praline Base: Shimmering Woods, Creamy Vanilla 250 ml/8.4 fl oz. Domestic`,
  },
  {
    id: 5,
    name: "Bare Vanilla Fragrance Mist",
    price: 650,
    images: [
      //"https://www.victoriassecret.com.au/dw/image/v2/BLPL_PRD/on/demandware.static/-/Sites-beauty-master-catalog/default/dw408ca6cf/large/112047178527_OF_F.jpg?sw=1500&sh=1500&sm=fit",
      "https://www.victoriassecret.com/p/1000x1333/png/zz/25/02/12/00/112592038527_OM_F.jpg",
      "https://www.victoriassecret.com/p/760x1013/png/zz/25/05/02/05/112592038527_alt.jpg",
    ],
    description: `Notes Top: Bergamot, Apple Blossom Heart: White Angel Orchid, Spun Sugar Base: Whipped Vanilla, Glowing Amber 250 ml/8.4 fl oz. Domestic`,
  },
  {
    id: 6,
    name: "Heavenly Dream Angel Fine Fragrance Mist",
    price: 950,
    images: [
      //"https://www.victoriassecret.com/p/874x1165/tif/f9/76/f976c986c1fe4cf19db5c8c45055a6b2/112144823872_OM_F.jpg",
      "https://www.victoriassecret.com/p/1000x1333/tif/f9/76/f976c986c1fe4cf19db5c8c45055a6b2/112144823872_OM_F.jpg",
      "https://www.victoriassecret.com/p/1000x1333/png/zz/24/09/02/04/112144823872_alt.jpg",
      //'https://picsum.photos/seed/63/600/800',
      //'https://picsum.photos/seed/64/600/800'
      //'https://picsum.photos/seed/64/600/800'
    ],
    tag: "Limited",
    description: `Fragrance type: Fruity Gourmand Notes: prismatic musk, raspberry nectar, amber crystals Mist is our lightest version of the fragrance 250 ml/8.4 fl oz. Domestic`,
  },
  {
    id: 7,
    name: "Fine Fragrance Mist",
    price: 950,
    images: [
      //"https://lacasadeltinte.com/wp-content/uploads/2024/09/victorias_secret__bare_magnoli_1723071455_0a8a92f4_progressive.jpg",
      "https://www.victoriassecret.com/p/760x1013/png/zz/24/05/11/01/112463036142_OM_F.jpg",
      "https://www.victoriassecret.com/p/760x1013/png/zz/24/09/02/04/112463036142_alt.jpg",
    ],
    description: `Fragrance type: Creamy Floral Notes: upcycled orange flower, magnolia wood, vanilla musk 250 ml/8.4 oz. Made in USA`,
  },
  {
    id: 8,
    name: "Victoria Secret Rose body mist",
    price: 950,
    images: [
      "https://www.victoriassecret.com.au/dw/image/v2/BLPL_PRD/on/demandware.static/-/Sites-beauty-master-catalog/default/dwc17b9c73/large/112210512161_OM_F.jpg?sw=1500&sh=1500&sm=fit",
      "https://www.victoriassecret.com/p/1000x1333/png/zz/24/09/02/04/112210522161_alt.jpg",
      //'https://picsum.photos/seed/82/600/800'
    ],
    description: `Fragrance type: Woody Floral Notes: Australian sandalwood, mandarin Madagascar, Egyptian violet Mist is our lightest version of the fragrance TSA-friendly size, perfect for travel 75 ml/2.5 fl oz Domestic`,
  },
  {
    id: 9,
    name: "Heavenly Fine Fragrance Mist",
    price: 950,
    images: [
      "https://www.victoriassecret.com/p/1000x1333/tif/ab/4a/ab4a41dfdc8b4bd388e7d85596bf0f89/112144730776_OM_F.jpg",
      "https://www.victoriassecret.com/p/1000x1333/png/zz/24/09/02/04/112144730776_alt.jpg",
      //'https://picsum.photos/seed/82/600/800'
    ],
    description: `Fragrance type: Warm Notes: gold musk, vanilla sandalwood, white jasmine Mist is our lightest version of the fragrance 250 ml/8.4 fl oz. Domestic`,
  },
  {
    id: 10,
    name: "Bare Fine Fragrance Mist",
    price: 950,
    images: [
      "https://www.victoriassecret.com/p/1000x1333/tif/13/bc/13bc1e856df949bbb01956c69b429deb/111992343714_OF_F.jpg",
      "https://www.victoriassecret.com/p/1000x1333/png/zz/24/09/02/04/111992343714_alt.jpg",
      //'https://picsum.photos/seed/82/600/800'
    ],
    description: `Fragrance type: Woody Floral Notes: Australian sandalwood, mandarin Madagascar, Egyptian violet Mist is our lightest version of the fragrance 250 ml/8.4 fl oz. Domestic`,
  },
];

export default products;
