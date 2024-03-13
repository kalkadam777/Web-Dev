export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  address: string;
  rating: string;
  like: number;
}

export const products = [
  {
    id: 1,
    name: 'Ноутбук Apple MacBook Air 15 2023 MQKW3 синий',
    price: 559990 ,
    description: 'диагональ экрана: 15.3 дюйм\n' +
      'процессор: Apple M2\n' +
      'видеокарта: Apple M2\n' +
      'размер оперативной памяти: 8.0 ГБ\n' +
      'тип жесткого диска: SSD\n' +
      'общий объем накопителей: 256.0 ГБ',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h65/h41/81547557240862.jpg?format=gallery-large',
    address: 'https://kaspi.kz/shop/p/apple-macbook-air-15-2023-mqkw3-sinii-111217728/?c=750000000',
    rating: 'http://danleicht.com/wp-content/uploads/2016/06/Five-Stars.jpg',
    like: 0
  },
  {
    id: 2,
    name: 'Ноутбук Apple MacBook Pro 13 MNEH3 серый',
    price: 642800,
    description: 'диагональ экрана: 13.3 дюйм\n' +
      'процессор: Apple M2\n' +
      'видеокарта: Apple M2 10-Core\n' +
      'размер оперативной памяти: 8.0 ГБ\n' +
      'тип жесткого диска: SSD\n' +
      'общий объем накопителей: 256.0 ГБ',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/ha0/h89/64537546129438.jpg?format=gallery-large',
    address: 'https://kaspi.kz/shop/p/apple-macbook-pro-13-mneh3-seryi-105514238/?c=750000000',
    rating: 'http://danleicht.com/wp-content/uploads/2016/06/Five-Stars.jpg',
    like: 0
  },
  {
    id: 3,
    name: 'Ноутбук Razer Blade 15 Advanced RZ09-0421EED3-R3E1 черный',
    price: 599980,
    description: 'диагональ экрана: 15.6 дюйм\n' +
      'процессор: Intel Core i7-12800H\n' +
      'видеокарта: NVIDIA GeForce RTX 3060\n' +
      'размер оперативной памяти: 16.0 ГБ\n' +
      'тип жесткого диска: SSD\n' +
      'общий объем накопителей: 1024.0 ГБ',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h2b/hab/66433262813214.jpg?format=gallery-large ',
    address: 'https://kaspi.kz/shop/p/razer-blade-15-advanced-rz09-0421eed3-r3e1-chernyi-107849640/?c=750000000',
    rating: 'http://danleicht.com/wp-content/uploads/2016/06/Five-Stars.jpg',
    like: 0
  },
  {
    id: 4,
    name: 'Ноутбук ASUS UX6404VV-P1122X 90NB11J1-M00620 черный',
    price: 999970,
    description: 'диагональ экрана: 14.5 дюйм\n' +
      'процессор: Intel Core i9-13900H\n' +
      'видеокарта: NVIDIA GeForce RTX 4060\n' +
      'размер оперативной памяти: 16.0 ГБ\n' +
      'тип жесткого диска: SSD\n' +
      'общий объем накопителей: 1000.0 ГБ',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h87/h65/84941918830622.jpg?format=gallery-large',
    address: 'https://kaspi.kz/shop/p/asus-ux6404vv-p1122x-90nb11j1-m00620-chernyi-115967904/?c=750000000',
    rating: 'http://danleicht.com/wp-content/uploads/2016/06/Five-Stars.jpg',
    like: 0
  },
  {
    id: 5,
    name: 'Ноутбук ASUS ExpertBook B5 B5602CBA-L20147X темно-синий',
    price: 379000,
    description: 'диагональ экрана: 16.0 дюйм' +
      'процессор: Intel Core i7-1260P\n' +
      'видеокарта: Intel Iris Xe Graphics\n' +
      'размер оперативной памяти: 16.0 ГБ\n' +
      'тип жесткого диска: SSD\n' +
      'общий объем накопителей: 1000.0 ГБ',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h7b/h87/82250738171934.jpg?format=gallery-large',
    address: 'https://kaspi.kz/shop/p/asus-expertbook-b5-b5602cba-l20147x-temno-sinii-112105093/?c=750000000',
    rating: 'http://danleicht.com/wp-content/uploads/2016/06/Five-Stars.jpg',
    like: 0

  },
  {
    id: 6,
    name: 'Телевизор Samsung QE85Q60BAUXCE 216 см черный',
    price: 644890,
    description: 'тип: QLED-телевизор ' +
      'диагональ: 85.0 дюйм ' +
      'разрешение: 3840x2160 ' +
      'поддержка HD: 4K UHD ' +
      'технология Smart TV: Да' +
      'wi-Fi: Да' +
      'входы: композитный, ,HDMI, ,Ethernet (RJ-45), ,USB, ,антенный, ,Bluetooth, ,AV',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hfb/h2a/64404374257694.jpg?format=gallery-large',
    address: 'https://kaspi.kz/shop/p/samsung-qe85q60bauxce-216-sm-chernyi-106302793/?c=750000000',
    rating: 'http://danleicht.com/wp-content/uploads/2016/06/Five-Stars.jpg',
    like: 0
  },
  {
    id: 7,
    name: 'Телевизор LG 65QNED876QB 165 см черный',
    price: 782847 ,
    description: 'тип: QNED-телевизор\n' +
      'диагональ: 65.0 дюйм\n' +
      'разрешение: 3840x2160\n' +
      'поддержка HD: 4K UHD\n' +
      'технология Smart TV: Да\n' +
      'wi-Fi: Да\n' +
      'входы: оптический, ,AV, ,HDMI, ,Ethernet (RJ-45), ,USB, ,антенный, ,Bluetooth',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h9a/hac/64444244328478.jpg?format=gallery-large',
    address: 'https://kaspi.kz/shop/p/lg-65qned876qb-165-sm-chernyi-106028051/?c=750000000',
    rating: 'http://danleicht.com/wp-content/uploads/2016/06/Five-Stars.jpg',
    like: 0
  },
  {
    id: 8,
    name: 'Телевизор Xiaomi Mi TV Q1 L75M6-ESG 191 см черный',
    price: 749990,
    description: 'тип: QLED-телевизор\n' +
      'диагональ: 75.0 дюйм\n' +
      'разрешение: 3840x2160\n' +
      'поддержка HD: 4K UHD\n' +
      'технология Smart TV: Да\n' +
      'wi-Fi: Да\n' +
      'входы: аудио, оптический, AV, HDMI, Ethernet (RJ-45), USB, Bluetooth',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h93/h5b/64183119380510.jpg?format=gallery-large',
    address: 'https://kaspi.kz/shop/p/xiaomi-mi-tv-q1-l75m6-esg-191-sm-chernyi-103438333/?c=750000000',
    rating: 'http://danleicht.com/wp-content/uploads/2016/06/Five-Stars.jpg',
    like: 0
  },
  {
    id: 9,
    name: 'Телевизор Elista C86UHD4EKC 218 см черный',
    price: 697088,
    description: 'тип: LED-телевизор\n' +
      'диагональ: 86.0 дюйм\n' +
      'разрешение: 3840x2160\n' +
      'поддержка HD: 4K UHD\n' +
      'технология Smart TV: Да\n' +
      'wi-Fi: Да\n' +
      'входы: HDMI, ,USB, ,Bluetooth',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/haf/hff/84887610130462.jpg?format=gallery-large',
    address: 'https://kaspi.kz/shop/p/elista-c86uhd4ekc-218-sm-chernyi-115886025/?c=750000000',
    rating: 'http://danleicht.com/wp-content/uploads/2016/06/Five-Stars.jpg',
    like: 0
  },
  {
    id: 10,
    name: 'Телевизор Haier 75 S3 черный',
    price: 549990,
    description: 'тип: QLED-телевизор\n' +
      'диагональ: 75.0 дюйм\n' +
      'разрешение: 3840x2160\n' +
      'поддержка HD: 4K HDR\n' +
      'технология Smart TV: Да\n' +
      'wi-Fi: Да\n' +
      'входы: AV, HDMI, Ethernet (RJ-45), USB, Bluetooth',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hd9/h58/68430563672094.jpg?format=gallery-large',
    address: 'https://kaspi.kz/shop/p/haier-75-s3-chernyi-108662425/?c=750000000',
    rating: 'http://danleicht.com/wp-content/uploads/2016/06/Five-Stars.jpg',
    like: 0
  },
  {
    id: 11,
    name: 'Телевизор Sony KD55A8BR2 140 черный',
    price: 599990,
    description: 'тип: OLED-телевизор\n' +
      'диагональ: 55.0 дюйм\n' +
      'разрешение: 3840x2160\n' +
      'поддержка HD: 4K UHD\n' +
      'технология Smart TV: Да\n' +
      'wi-Fi: Да\n' +
      'входы: AV, HDMI, Ethernet (RJ-45), USB',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hb4/h19/63942497239070.jpg?format=gallery-large',
    address: 'https://kaspi.kz/shop/p/sony-kd55a8br2-140-chernyi-100509659/?c=750000000',
    rating: 'http://danleicht.com/wp-content/uploads/2016/06/Five-Stars.jpg',
    like: 0
  },
  {
    id: 12,
    name: 'Смартфон Apple iPhone 15 Pro Max 256Gb серый',
    price: 629681,
    description: 'технология NFC: Да\n' +
      'цвет: серый\n' +
      'тип экрана: OLED, Super Retina XDR display\n' +
      'диагональ: 6.7 дюйм\n' +
      'размер оперативной памяти: 8 ГБ\n' +
      'процессор: 6-ядерный Apple A17 Pro\n' +
      'объем встроенной памяти: 256.0 ГБ\n' +
      'емкость аккумулятора: 4422.0 мАч\n',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hc1/h65/83559848181790.png?format=gallery-large',
    address: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/?c=750000000',
    rating: 'http://danleicht.com/wp-content/uploads/2016/06/Five-Stars.jpg',
    like: 0
  },
  {
    id: 13,
    name: 'Смартфон Apple iPhone 13 128Gb Midnight черный',
    price: 295365,
    description: 'технология NFC: Да\n' +
      'цвет: черный\n' +
      'тип экрана: OLED, Super Retina XDR\n' +
      'диагональ: 6.1 дюйм\n' +
      'размер оперативной памяти: 4 ГБ\n' +
      'процессор: 6-ядерный Apple A15 Bionic\n' +
      'объем встроенной памяти: 128.0 ГБ\n' +
      'емкость аккумулятора: 3095.0 мАч\n',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-large',
    address: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-chernyi-102298404/?c=750000000',
    rating: 'http://danleicht.com/wp-content/uploads/2016/06/Five-Stars.jpg',
    like: 0
  },
  {
    id: 14,
    name: 'Смартфон Samsung Galaxy Z Fold5 5G 12 ГБ/512 ГБ черный',
    price: 634985,
    description: 'технология NFC: Да\n' +
      'цвет: черный\n' +
      'тип экрана: Dynamic AMOLED 2X\n' +
      'диагональ: 7.6 дюйм\n' +
      'размер оперативной памяти: 12 ГБ\n' +
      'процессор: 8-ядерный Qualcomm Snapdragon 8 Gen 2\n' +
      'объем встроенной памяти: 512.0 ГБ\n' +
      'емкость аккумулятора: 4400.0 мАч\n',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h36/h1f/82762046963742.jpg?format=gallery-large',
    address: 'https://kaspi.kz/shop/p/samsung-galaxy-z-fold5-5g-12-gb-512-gb-chernyi-112480820/?c=750000000',
    rating: 'http://danleicht.com/wp-content/uploads/2016/06/Five-Stars.jpg',
    like: 0
  },
  {
    id: 15,
    name: 'Смартфон Samsung Galaxy S23 Ultra 12 ГБ/512 ГБ черный',
    price: 517633,
    description: 'технология NFC: Да\n' +
      'цвет: черный\n' +
      'тип экрана: Dynamic AMOLED 2X\n' +
      'диагональ: 6.8 дюйм\n' +
      'размер оперативной памяти: 12 ГБ\n' +
      'процессор: 8-ядерный Snapdragon 8 Gen 2\n' +
      'объем встроенной памяти: 512.0 ГБ\n' +
      'емкость аккумулятора: 5000.0 мАч\n',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h6c/h7c/69067267407902.jpg?format=gallery-large',
    address: 'https://kaspi.kz/shop/p/samsung-galaxy-s23-ultra-12-gb-512-gb-chernyi-108916047/?c=750000000',
    rating: 'http://danleicht.com/wp-content/uploads/2016/06/Five-Stars.jpg',
    like: 0
  },
  {
    id: 16,
    name: 'Смартфон Google Pixel 8 Pro 12 ГБ/256 ГБ черный',
    price: 537879,
    description: 'технология NFC: Да\n' +
      'цвет: черный\n' +
      'тип экрана: OLED, Gorilla Glass Victus\n' +
      'диагональ: 6.7 дюйм\n' +
      'размер оперативной памяти: 12 ГБ\n' +
      'процессор: 8-ядерный Google Tensor G3\n' +
      'объем встроенной памяти: 256.0 ГБ\n' +
      'емкость аккумулятора: 5050.0 мАч\n',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h72/h19/84136286191646.jpg?format=gallery-large',
    address: 'https://kaspi.kz/shop/p/google-pixel-8-pro-12-gb-256-gb-chernyi-113692604/?c=750000000',
    rating: 'http://danleicht.com/wp-content/uploads/2016/06/Five-Stars.jpg',
    like: 0
  },
  {
    id: 17,
    name: 'Автомобильная визитка',
    price: 238 ,
    description:'способ крепления: двухсторонний скотч место установки: приборная панельматериал: пластик цвет: черный',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/ha2/h5a/64527256748062.jpg?format=gallery-medium',
    address: 'https://kaspi.kz/shop/p/avtomobil-naja-vizitka-avtochehly-kz-2107221439-chernyi-105726714/?c=750000000',
    rating: 'http://danleicht.com/wp-content/uploads/2016/06/Five-Stars.jpg',
    like: 0
  },
  {
    id: 18,
    name: 'FOXSUR зарядное устройство',
    price: 8738 ,
    description:'тип: зарядное устройство напряжение АКБ: 12/24 В максимальный ток пуска: 8.0 А особенности: автоматическая зарядка, ,автоматическое отключение зарядки, ,защита от перегрева, ,защита от перегрузок и короткого замыкания, ,ЖК-экран',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h45/h59/65076168294430.jpg?format=gallery-medium',
    address: 'https://kaspi.kz/shop/p/foxsur-zarjadnoe-ustroistvo-fbc122408d-105391486/?c=750000000',
    rating: 'http://danleicht.com/wp-content/uploads/2016/06/Five-Stars.jpg',
    like: 0
  },
  {
    id: 19,
    name: 'Аккумулятор Bars Silver 60Ah -/+',
    price: 24610 ,
    description:'назначение: для легковых автомобилей емкость: 60.0 Ач полярность: обратная напряжение: 12 В',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h8d/hc6/82872290803742.jpg?format=gallery-medium',
    address: 'https://kaspi.kz/shop/p/bars-silver-60ah----15200181/?c=750000000',
    rating: 'http://danleicht.com/wp-content/uploads/2016/06/Five-Stars.jpg',
    like: 0
  },
  {
    id: 20,
    name: 'Автокомпрессор Циклон поршневый KS-303',
    price: 3650,
    description:'подключение: от прикуривателя тип: поршневый  производительность: 35.0 л/мин максимальное давление: 10.0 атм',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h8a/he2/63767240114206.jpg?format=gallery-medium',
    address: 'https://kaspi.kz/shop/p/avtokompressor-tsiklon-porshnevyi-ks-303-22600025/?c=750000000',
    rating: 'http://danleicht.com/wp-content/uploads/2016/06/Five-Stars.jpg',
    like: 0
  },
  {
    id: 21,
    name: 'Видеорегистратор 70mai Dash Cam 1S Midrive D06 Global Version черный',
    price: 22471,
    description:'конструкция видеорегистратора: без экрана режим записи: циклическая, ,запись без разрывов функции: датчик удара (G-сенсор) цвет: черный',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h6b/hea/63868427862046.jpg?format=gallery-medium',
    address: 'https://kaspi.kz/shop/p/videoregistrator-70mai-dash-cam-1s-midrive-d06-global-version-chernyi-100068251/?c=750000000',
    rating: 'http://danleicht.com/wp-content/uploads/2016/06/Five-Stars.jpg',
    like: 0
  },
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
