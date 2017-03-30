export interface MenuItem {
  name: string;
  description: string;
  image: string;
  favorite?: boolean;
}

export enum CoffeeSize {
  UNKNOWN = 0,
  TALL,
  GRANDE,
  VENTI,
}

const PREFIX =
    'http://d3mrtwiv4dr09z.cloudfront.net/media/catalog/product/cache/2/medium_image/230x175/17f82f742ffe127f42dca9de82fb58b1/';

export const COFFEE_ITEMS: MenuItem[] = [
  {
    name: 'Caffè Latte',
    description:
        'Rich espresso merged with steamed milk creates this Coffee House favorite.',
    image: PREFIX + 'h/o/hot_latte_m.png',
  },
  {
    name: 'Iced Latte',
    description:
        'The iced versions of our classic latte. Perfect for those hot summer days.',
    image: PREFIX + 'i/c/iced_latte_m.png',
  },
  {
    name: 'Cappuccino',
    description: 'Dark, rich espresso under a layer of smooth, stretched foam.',
    image: PREFIX + 't/r/trad_cap_m.png',
  },
  {
    name: 'Caffè Macchiato',
    description: 'Espresso with a dollop of perfectly steamed foam.',
    image: PREFIX + 'h/o/honey_macchiato_m_1.png',
  },
  {
    name: 'Caffè Mocha',
    description:
        'A little treat for those who need their coffee with their chocolate.',
    image: PREFIX + 'c/a/caffemocha_230x175_1.png',
  },
  {
    name: 'Caffè Americano',
    description:
        'Italian espresso served the American way; drowned in hot water.',
    image: PREFIX + 'c/a/caffeamericano_230x175.png',
  },
  {
    name: 'Caramel Macchiato',
    description:
        'Rich, buttery caramel, intense espresso, and hint of vanilla.',
    image: PREFIX + 'c/a/car_macchiatohot_m.jpg',
  },
  {
    name: 'Cold Brew',
    description:
        '12 hours of steeping in cold water create this smooth, refreshing iced coffee.',
    image: PREFIX + 'c/o/cold_brew_m.png',
  },
  {
    name: 'Espresso',
    description: 'A double shot of our signature Espresso Blend.',
    image: PREFIX + 'e/s/espresso_230x175.png',
  },
];