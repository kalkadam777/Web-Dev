export interface Product {
  id: number;
  image:string;
  name: string;
  description: string;
  rating:number;
  website:string;
  image_gallery?:string[];
}

export const products:Product[] =
[
  {
    id:1,
    image:'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
    name:'Apple iPhone 13',
    description:'Apple iPhone 13 gets a 6.1-inch Super Retina XDR display with an incredibly high pixel density - photos, videos and text look amazingly sharp. And thanks to the reduced TrueDepth camera area, the display now has more image space.',
    rating:10,
    website: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-chernyi-102298404/?c=750000000',
    image_gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h35/h8f/84378448232478.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h3d/h8e/64208874405918.jpg?format=gallery-medium',
        // 'https://resources.cdn-kaspi.kz/img/m/p/hfe/h17/64208876634142.jpg?format=gallery-medium'
    ]
  },
  {
    id:2,
    image:'https://resources.cdn-kaspi.kz/img/m/p/hdc/h14/84690160189470.png?format=gallery-medium',
    name:'Xiaomi Redmi 12 4G',
    description:'The smartphone features a 6.79-inch IPS LCD screen with a resolution of 1080 x 2400 pixels and an aspect ratio of 20:9. With this screen, users can enjoy bright and crisp colours as well as a wide viewing angle. With a refresh rate of 90Hz, the screen offers smooth scrolling and responsiveness when using a smartphone.',
    rating:5,
    website: 'https://kaspi.kz/shop/p/xiaomi-redmi-12-8-gb-128-gb-serebristyi-115255863/?c=750000000',
    image_gallery: [
      'https://resources.cdn-kaspi.kz/img/m/p/h49/hd7/83559338475550.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h23/hce/83559138459678.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/he2/h1d/83559338442782.png?format=gallery-medium'
    ]
  },
  {
    id:3,
    image:'https://resources.cdn-kaspi.kz/img/m/p/hc1/h65/83559848181790.png?format=gallery-medium',
    name:'Apple iPhone 15 Pro Max',
    description:'Apple iPhone 15 Pro Max is an ultra-rugged flagship made of titanium. The latest Apple A17 Pro chip is responsible for the uncompromising performance of the smartphone. The device has an advanced camera system, thoughtful ergonomics, updated design and a new programmable button.',
    rating:10,
    website: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/?c=750000000',
    image_gallery: [
      'https://resources.cdn-kaspi.kz/img/m/p/h49/hd7/83559338475550.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h23/hce/83559138459678.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/he2/h1d/83559338442782.png?format=gallery-medium'
    ]
  },
  {
    id:4,
    image:'https://resources.cdn-kaspi.kz/img/m/p/h98/h2b/64400497737758.jpg?format=gallery-medium',
    name:'Apple iPhone 14',
    description:'Pro camera system 48MP Main Ultra Wide Telephoto Photonic Engine for incredible detail and color Autofocus on TrueDepth front camera',
    rating:7,
    website: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/?c=750000000',
    image_gallery: [
      'https://resources.cdn-kaspi.kz/img/m/p/h49/hd7/83559338475550.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h23/hce/83559138459678.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/he2/h1d/83559338442782.png?format=gallery-medium'
    ]
  },
  {
    id:5,
    image:'https://resources.cdn-kaspi.kz/img/m/p/he2/h1d/83559338442782.png?format=gallery-medium',
    name:'Apple iPhone 15',
    description:'Apple iPhone 15 is a smartphone that combines advanced optics, a powerful processor, a long-lasting battery and a memorable design. The smartphone has a dynamic island that displays notifications and other important information.',
    rating:8,
    website: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=750000000',
    image_gallery: [
      'https://resources.cdn-kaspi.kz/img/m/p/h49/hd7/83559338475550.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h23/hce/83559138459678.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/he2/h1d/83559338442782.png?format=gallery-medium'
    ]
  },
  // {
  //   id:6,
  //   image:'https://resources.cdn-kaspi.kz/img/m/p/hd8/hac/63897052413982.jpg?format=gallery-medium',
  //   name:'Apple iPhone 11',
  //   description:'iPhone 11 features a powerful 6-core A13 Bionic processor that performs every task quickly and smoothly. Its also as energy efficient as possible, saving battery life. The hardware and software work together seamlessly to maximise battery life. The 3110mAh non-removable battery supports wireless charging, making the process easier and faster.',
  //   rating:12,
  //   website: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=750000000',
  //   image_gallery: [
  //     'https://resources.cdn-kaspi.kz/img/m/p/h49/hd7/83559338475550.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h23/hce/83559138459678.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/he2/h1d/83559338442782.png?format=gallery-medium'
  //   ]
  // },
  // {
  //   id:7,
  //   image:'https://resources.cdn-kaspi.kz/img/m/p/h1b/h77/84526902706206.jpg?format=gallery-medium',
  //   name:'Xiaomi Redmi 13C',
  //   description:'The Redmi 13Cs hardware is based on a fairly efficient Helio G85 chipset, which works in tandem with 6GB of RAM and 128GB of storage. There is a slot for microSD card. The 5000 mAh battery supports 18-watt wired charging. Theres no wireless or reverse charging.',
  //   rating:8,
  //   website: 'https://kaspi.kz/shop/p/xiaomi-redmi-13c-8-gb-256-gb-chernyi-114695323/?c=750000000',
  //   image_gallery: [
  //     'https://resources.cdn-kaspi.kz/img/m/p/h49/hd7/83559338475550.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h23/hce/83559138459678.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/he2/h1d/83559338442782.png?format=gallery-medium'
  //   ]
  // },
  // {
  //   id:8,
  //   image:'https://resources.cdn-kaspi.kz/img/m/p/hfe/hfb/80075311218718.jpg?format=gallery-medium',
  //   name:'Samsung Galaxy A34 5G',
  //   description:'Samsung Galaxy A34 is a very well-balanced device from a well-known brand. It has high performance, which allows you to use it as a gaming smartphone, a full set of communication tools, including support for the 5G standard, a good bright screen, an excellent camera, good sound and a pleasant design.',
  //   rating:6,
  //   website: 'https://kaspi.kz/shop/p/samsung-galaxy-a34-5g-6-gb-128-gb-chernyi-109880731/?c=750000000',
  //   image_gallery: [
  //     'https://resources.cdn-kaspi.kz/img/m/p/h49/hd7/83559338475550.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h23/hce/83559138459678.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/he2/h1d/83559338442782.png?format=gallery-medium'
  //   ]
  // },
  // {
  //   id:9,
  //   image:'https://resources.cdn-kaspi.kz/img/m/p/h4e/hc0/84933514100766.jpg?format=gallery-medium',
  //   name:'Xiaomi Redmi Note 13 Pro 5G',
  //   description:'Xiaomi Redmi Note 13 Pro is a superb smartphone that is set to hit the market in September 2023. It is one of the intermediate models in the range of Xiaomi Redmi Note 13 Pro+, Xiaomi Redmi Note 13. The smartphone starts the process of assembling the smartphone using reliable materials, mainly the latest generation of durable Corning Gorilla Glass Victus combustible glass.',
  //   rating:4,
  //   website: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-13-pro-5g-12-gb-512-gb-chernyi-115939564/?c=750000000',
  //   image_gallery: [
  //     'https://resources.cdn-kaspi.kz/img/m/p/h49/hd7/83559338475550.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h23/hce/83559138459678.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/he2/h1d/83559338442782.png?format=gallery-medium'
  //   ]
  // },
  // {
  //   id:10,
  //   image:'https://resources.cdn-kaspi.kz/img/m/p/h81/h13/80435536887838.jpg?format=gallery-medium',
  //   name:'Samsung Galaxy A54 5G',
  //   description:'Samsung Galaxy A54: specs, reviews, FAQs This is a mid-range smartphone with flagship features. The Galaxy A54 gets a mid-range proprietary processor, a bright display with 120Hz refresh rate and moisture protection. That said, it has the same main camera as the flagship Galaxy S22.',
  //   rating:6,
  //   website: 'https://kaspi.kz/shop/p/samsung-galaxy-a54-5g-8-gb-256-gb-chernyi-110044379/?c=750000000',
  //   image_gallery: [
  //     'https://resources.cdn-kaspi.kz/img/m/p/h49/hd7/83559338475550.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h23/hce/83559138459678.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/he2/h1d/83559338442782.png?format=gallery-medium'
  //   ]
  // },
  // {
  //   id:11,
  //   image:'https://resources.cdn-kaspi.kz/img/m/p/h62/h60/82304904855582.jpg?format=gallery-medium',
  //   name:'Xiaomi Redmi A2+',
  //   description:'The Redmi A2+ is powered by a MediaTek Helio G36 processor paired with 3GB of RAM and 64GB of storage. The battery is 5,000mAh. 10W charging is supported. An appropriate power supply is included in the package.',
  //   rating:2,
  //   website: 'https://kaspi.kz/shop/p/xiaomi-redmi-a2-3-gb-64-gb-chernyi-112151794/?c=750000000',
  //   image_gallery: [
  //     'https://resources.cdn-kaspi.kz/img/m/p/h49/hd7/83559338475550.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h23/hce/83559138459678.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/he2/h1d/83559338442782.png?format=gallery-medium'
  //   ]
  // },
  // {
  //   id:12,
  //   image:'https://resources.cdn-kaspi.kz/img/m/p/h83/h99/84633072730142.png?format=gallery-medium',
  //   name:'Poco C65',
  //   description:'Smartphone POCO C65 - a new model from the budget line of Xiaomi. This is a stylish phone with a large screen, a powerful processor and a camera that allows you to take high-quality photos. The model based on Andriod 13 operating system and MIUI 14 for POCO shell is perfect for everyday use and simple tasks. ',
  //   rating:5,
  //   website: 'https://kaspi.kz/shop/p/poco-c65-8-gb-256-gb-chernyi-115049893/?c=750000000',
  //   image_gallery: [
  //     'https://resources.cdn-kaspi.kz/img/m/p/h49/hd7/83559338475550.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h23/hce/83559138459678.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/he2/h1d/83559338442782.png?format=gallery-medium'
  //   ]
  // },
  // {
  //   id:13,
  //   image:'https://resources.cdn-kaspi.kz/img/m/p/h82/hc4/84434499960862.jpg?format=gallery-medium',
  //   name:'OPPO A18',
  //   description:'You`ll get a smartphone that can do it all for you: scrolling through social media feeds, taking pictures, watching content, and working tasks. The technical capabilities ensure smooth device performance, proven by time trials.',
  //   rating:3,
  //   website: 'https://kaspi.kz/shop/p/oppo-a18-4-gb-128-gb-chernyi-114291573/?c=750000000',
  //   image_gallery: [
  //     'https://resources.cdn-kaspi.kz/img/m/p/h49/hd7/83559338475550.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h23/hce/83559138459678.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/he2/h1d/83559338442782.png?format=gallery-medium'
  //   ]
  // },
  // {
  //   id:14,
  //   image:'https://resources.cdn-kaspi.kz/img/m/p/h92/haa/63993960136734.jpg?format=gallery-medium',
  //   name:'iPhone SE 202',
  //   description:'The Apple iPhone SE 2022 is a classic design with powerful hardware. With a 4.7 inch Retina HD display, the smartphone can easily fit even in your pocket.At the heart of the Apple iPhone SE 2022 is the super-powerful A15 Bionic processor, just like in the iPhone 13. The A15 Bionic chip means fast photo processing, smooth graphics in games, the ability to shoot 4K video and more.',
  //   rating:2,
  //   website: 'https://kaspi.kz/shop/p/apple-iphone-se-2022-64gb-chernyi-104153727/?c=750000000',
  //   image_gallery: [
  //     'https://resources.cdn-kaspi.kz/img/m/p/h49/hd7/83559338475550.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h23/hce/83559138459678.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/he2/h1d/83559338442782.png?format=gallery-medium'
  //   ]
  // },
  // {
  //   id:15,
  //   image:'https://resources.cdn-kaspi.kz/img/m/p/h2a/hcb/79755720294430.jpg?format=gallery-medium',
  //   name:'Xiaomi Redmi Note 12 Pro 5G',
  //   description:'Redmi Note 12 Pro 5G smartphone review: specifications, pros and ... In Redmi Note 12 Pro I liked the design of the model, practical case materials, the presence of an IR port, a rich package, long runtime and fast charging, good cameras and decent performance',
  //   rating:4,
  //   website: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-12-pro-5g-8-gb-256-gb-chernyi-109734243/?c=750000000',
  //   image_gallery: [
  //     'https://resources.cdn-kaspi.kz/img/m/p/h49/hd7/83559338475550.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h23/hce/83559138459678.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/he2/h1d/83559338442782.png?format=gallery-medium'
  //   ]
  //   },
];

