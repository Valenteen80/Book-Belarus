const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const request = require('https');
const { parse } = require('path');
const jsonParser = express.json();
const app = express();

const corsOptions = {
  "origin": "http://localhost:4200",
  "methods": "GET,PUT,POST,DELETE",
  "credentials": "true",
  "maxAge": "86400",
  "optionsSuccessStatus": 200
};

app.options('*', cors(corsOptions));
app.use(cors());
app.use(bodyParser.json());

const products = [
    {
        id: 1,
        name: 'Усеслаў Чарадзей',
        city: 'Минск',
        img: 'https://media-cdn.tripadvisor.com/media/photo-s/0d/e9/cc/52/caption.jpg',
        description: '22-х этажная гостиница «Усеслаў Чарадзей» с комфортными одноместными номенами поражает жителей и гостей Минска грандиозной величественностью. Несомненным преимуществом является ее расположение рядом с административным и деловым центром столицы и станцией метро Немига, но при этом вдали от шума и суеты большого города.',
        price: 60,
        rating: 3,
        capacity: 30,
        busyDates: [
          {date: "2022-08-01", employedQuantity: 25},
          {date: "2022-08-02", employedQuantity: 25},
          {date: "2022-08-03", employedQuantity: 25},
        ]
      },
      {
        id: 2,
        name: 'Стары Менск',
        city: 'Минск',
        img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/26/20/bd/caption.jpg?w=1100&h=-1&s=1',
        description: 'Номерной фонд составляют 252 одноместных номера. В каждом свой индивидуальный интерьер, обставленный дорогой классической мебелью. Для комфортного проживания установлен кондиционер и телевизор. Есть зонированные номера, они больше по площади и в них расположены гостиный уголок и рабочее место. В ресторане гостиницы подают блюда европейской кухни. Каждое утро персонал накрывает "шведский стол". В баре ресторана представлен большой выбор напитков.',
        price: 101,
        rating: 2,
        capacity: 30,
        busyDates: [
          {date: "2022-08-01", employedQuantity: 30},
          {date: "2022-08-02", employedQuantity: 25},
          {date: "2022-08-03", employedQuantity: 30},
        ]
      },
      {
        id: 3,
        name: 'Вітаўт Вялікі',
        city: 'Минск',
        img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/cd/e1/10/caption.jpg?w=1200&h=-1&s=1',
        description: 'Гостиница «Вітаўт Вялікі» - это гостиничный комплекс бизнес класса, соответствующий стандартам пяти звезд и расположенный в центре Минска на живописном берегу реки Свислочь. Гостиница «Вітаўт Вялікі» предлагает гостям 183 номера различных категорий, рестораны китайской и русской кухни, кафе, большой многофункциональный зал, переговорные комнаты, фитнес-центр, бар, казино.',
        price: 120,
        rating: 5,
        capacity: 30,
        busyDates: [
          {date: "2022-08-01", employedQuantity: 30},
          {date: "2022-08-02", employedQuantity: 30},
          {date: "2022-08-03", employedQuantity: 25},
        ]
      },
      {
        id: 4,
        name: 'Чароўны Бераст',
        city: 'Брест',
        img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/97/62/0b/caption.jpg?w=800&h=600&s=1',
        description: 'Гостиница «Чароўны Бераст» с с комфортными одноместными номенами идеально расположена для посещения всех главных достопримечательностей Бреста и региона, включая Брестскую крепость и Беловежскую пущу. Непосредственная близость к железнодорожному вокзалу, центральному автовокзалу, а также к деловому, административному и торговому центру предоставляет очевидное преимущество гостям отеля.',
        price: 73,
        rating: 4,
        capacity: 30,
        busyDates: [
          {date: "2022-08-01", employedQuantity: 30},
          {date: "2022-08-02", employedQuantity: 30},
          {date: "2022-08-03", employedQuantity: 25},
        ]
      },
      {
        id: 5,
        name: 'Горад над Бугам',
        city: 'Брест',
        img: 'https://pbs.twimg.com/media/E6-noC4XIAAR6Dy?format=jpg&name=900x900',
        description: 'Гостиница «Горад над Бугам» – это современное 6-ти этажное здание с комфортными одноместными номенами, которое распахнуло свои двери в 2015 году, и находится рядом с белорусско-польской границей на автомагистрали М-1. Расстояние до Бреста составляет 15 км. Номерной фонд для 76 гостей, оформленный в классическом стиле, оборудован телевизорами с плоским экраном и бесплатным высокоскоростным Wi-Fi.',
        price: 30,
        rating: 1,
        capacity: 30,
        busyDates: [
          {date: "2022-08-01", employedQuantity: 30},
          {date: "2022-08-02", employedQuantity: 30},
          {date: "2022-08-03", employedQuantity: 26},
        ]
      },
      {
        id: 6,
        name: 'Бацькаўшчына',
        city: 'Брест',
        img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/7f/19/f7/caption.jpg?w=1200&h=-1&s=1',
        description: 'Отель городского типа с комфортными одноместными номенами. Расположен вблизи железнодорожного и автовокзалов, в шаговой доступности от Брестской крепости, пешеходной ул. Советская, парка культуры и отдыха.',
        price: 20,
        rating: 1,
        capacity: 30,
        busyDates: [
          {date: "2022-08-01", employedQuantity: 28},
        ]
      },
      {
        id: 7,
        name: 'Волат',
        city: 'Витебск',
        img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-s/03/0d/73/25/caption.jpg?w=600&h=-1&s=1',
        description: 'Отель с комфортными одноместными номенамию. Отель предлагает круглосуточную стойку регистрации, обслуживание в номер и хранение багажа. Кроме того, гости отеля могут воспользоваться рестораном. Гостям, приехавшим на машине, предоставляется бесплатная парковка.',
        price: 15,
        rating: 2,
        capacity: 30,
        busyDates: [
        ]
      },
      {
        id: 8,
        name: 'Дзьвіна',
        city: 'Витебск',
        img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/2b/3e/59/caption.jpg?w=1200&h=-1&s=1',
        description: 'отличный выбор для путешественников в Витебске. Отель с комфортными одноместными номенами. Это хорошее соотношение цены и качества, комфорта и удобства, семейной атмосферы и услуг, призванных сделать пребывание здесь очень приятным.',
        price: 25,
        rating: 3,
        capacity: 30,
        busyDates: [
          {date: "2022-08-01", employedQuantity: 30},
          {date: "2022-08-02", employedQuantity: 30},
          {date: "2022-08-03", employedQuantity: 10},
        ]
      },
      {
        id: 9,
        name: 'Гетман Астрожскі',
        city: 'Витебск',
        img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/ff/7f/9e/caption.jpg?w=900&h=-1&s=1',
        description: 'Отель с комфортными одноместными номенами. Отличное расположение: центр в двух шагах, автобусные остановки, ведущие практически в любую точку города - тоже, при этом тихая улица.Уютная планировка, повсюду картины Марка Шагала.Впервые увидела в гостинице цветное постельное белье)) Это очень по-домашнему, непривычно, но мило.',
        price: 17,
        rating: 4,
        capacity: 30,
        busyDates: [
          {date: "2022-08-01", employedQuantity: 30},
          {date: "2022-08-02", employedQuantity: 30},
          {date: "2022-08-03", employedQuantity: 10},
        ]
      },
      {
        id: 10,
        name: 'Сож',
        city: 'Гомель',
        img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-s/01/f5/40/77/caption.jpg?w=600&h=-1&s=1',
        description: 'Хороший отель с комфортными одноместными номенами для путешествующих через Белорусь. Нас заселили. Номера чистые и уютные, есть все необходимое. Удобряя постель, принадлежности для ванной.  Отдельная парковка для гостей. Есть веранда. ',
        price: 35,
        rating: 6,
        capacity: 30,
        busyDates: [
          {date: "2022-08-01", employedQuantity: 30},
          {date: "2022-08-02", employedQuantity: 30},
          {date: "2022-08-03", employedQuantity: 10},
        ]
      },
      {
        id: 11,
        name: 'Вандруйце з намі',
        city: 'Гомель',
        img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/37/5e/5c/getlstd-property-photo.jpg?w=1200&h=-1&s=1',
        description: 'Отель с комфортными одноместными номенами. Кухня выше всяких похвал, очень вкусно и красиво, обслуживание- отлично. Вокруг красоты, озеро, лавочки , цветущая магнолия . Шикарное место для отдыха. Есть баня, беседка, детский уголок, катамараны.',
        price: 43,
        rating: 6,
        capacity: 30,
        busyDates: [
          {date: "2022-08-01", employedQuantity: 30},
          {date: "2022-08-02", employedQuantity: 30},
          {date: "2022-08-03", employedQuantity: 10},
        ]
      },
      {
        id: 12,
        name: 'Тураў',
        city: 'Гомель',
        img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/99/ef/ab/caption.jpg?w=1200&h=-1&s=1',
        description: 'Отель с комфортными одноместными номенами. В номере всё новое, есть большой холодильник, плоский телевизор, душевая кабина. В общем были приятно удивлены. Для проживание есть все необходимое',
        price: 13,
        rating: 7,
        capacity: 30,
        busyDates: [
          {date: "2022-08-01", employedQuantity: 30},
          {date: "2022-08-02", employedQuantity: 30},
          {date: "2022-08-03", employedQuantity: 10},
        ]
      },
      {
        id: 13,
        name: 'Стэфан Баторый',
        city: 'Гродно',
        img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/8b/e5/3a/caption.jpg?w=1200&h=-1&s=1',
        description: 'Отель с комфортными одноместными номенами. Найти идеальный семейную гостиницу в Гродно не должно быть сложной задачей. Добро пожаловать в Отель "Стэфан Баторый", прекрасный выбор для таких путешественников, как вы. Отель "Стэфан Баторый" — это семейная гостиница, где номера оборудованы кондиционером, холодильником и письменным столом и где можно постоянно быть на связи благодаря бесплатному Wi-Fi.',
        price: 37,
        rating: 6,
        capacity: 30,
        busyDates: [
          {date: "2022-08-01", employedQuantity: 30},
          {date: "2022-08-02", employedQuantity: 30},
          {date: "2022-08-03", employedQuantity: 10},
        ]
      },
      {
        id: 14,
        name: 'Гародня',
        city: 'Гродно',
        img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/ea/8f/81/caption.jpg?w=1100&h=-1&s=1',
        description: 'Отель с комфортными одноместными номенами. Отличная локация в центре города, есть небольшая парковка.',
        price: 70,
        rating: 3,
        capacity: 30,
        busyDates: [
          {date: "2022-08-01", employedQuantity: 30},
          {date: "2022-08-02", employedQuantity: 30},
          {date: "2022-08-03", employedQuantity: 10},
        ]
      },
      {
        id: 15,
        name: 'Нёман',
        city: 'Гродно',
        img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/2e/ee/c2/caption.jpg?w=1200&h=-1&s=1',
        description: 'Отель с комфортными одноместными номенами. Неман — это отличный выбор для гостей Гродно, семейная атмосфера и множество полезных услуг сделают пребывание здесь очень приятным.Номера оборудованы кондиционером, а выйти в Сеть в Неман очень просто благодаря бесплатному Wi-Fi.',
        price: 46,
        rating: 7,
        capacity: 30,
        busyDates: [
          {date: "2022-08-01", employedQuantity: 30},
          {date: "2022-08-02", employedQuantity: 30},
          {date: "2022-08-03", employedQuantity: 10},
        ]
      },
      {
        id: 16,
        name: 'Магілёў',
        city: 'Могилёв',
        img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/86/5f/33/caption.jpg?w=1100&h=-1&s=1',
        description: 'Отель с комфортными одноместными номенами. Отличный выбор для путешественников в Могилёве. Это хорошее соотношение цены и качества, комфорта и удобства, семейной атмосферы и услуг, призванных сделать пребывание здесь очень приятным.Здесь вы будете чувствовать себя как дома, т.к. номера отеля оборудованы холодильником и кондиционером, а благодаря бесплатному Wi-Fi выйти в Сеть можно в любой момент.',
        price: 55,
        rating: 2,
        capacity: 30,
        busyDates: [
          {date: "2022-08-01", employedQuantity: 30},
          {date: "2022-08-02", employedQuantity: 30},
          {date: "2022-08-03", employedQuantity: 10},
        ]
      },
      {
        id: 17,
        name: 'У Лёвы з Магілёва',
        city: 'Могилёв',
        img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/05/8c/28/green-hill-hotel.jpg?w=1200&h=-1&s=1',
        description: 'Отель с комфортными одноместными номенами. Территория шикарная, граничит с лесом, где полно грибов и рекой, где есть мостики для рыбалки.',
        price: 26,
        rating: 4,
        capacity: 30,
        busyDates: [
          {date: "2022-08-01", employedQuantity: 30},
          {date: "2022-08-02", employedQuantity: 30},
          {date: "2022-08-03", employedQuantity: 10},
        ]
      },
      {
        id: 18,
        name: 'Магіла льва)))',
        city: 'Могилёв',
        img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/8e/1b/bc/caption.jpg?w=1200&h=-1&s=1',
        description: 'Отель с комфортными одноместными номенами. Номера простые, уютные, есть холодильник, набор посуды, кулер на ресепшене, воду можно пить из крана т.к. она из скважины. Баня - уютная, удобная',
        price: 7,
        rating: 1,
        capacity: 30,
        busyDates: [
          {date: "2022-08-01", employedQuantity: 30},
          {date: "2022-08-02", employedQuantity: 30},
          {date: "2022-08-03", employedQuantity: 10},
          {date: "2022-08-06", employedQuantity: 10},
        ]
      },
];

app.get('/products', (req, res) => {
  let filtredProducts = [];

  if (req.query.city === 'undefined') {
    filtredProducts = [...products];
  } else {
    filtrByCity();
  }

  function filtrByCity() {
    let filtredByCityProducts = products.filter((item) => item.city === req.query.city);
    filterByAvailableDates(filtredByCityProducts);
  }

  function filterByAvailableDates(filtredByCityProducts) {
    const converCheckInDate = convertDate(req.query.checkInDate);
    const converCheckOutDate = convertDate(req.query.checkOutDate);

    filtredByCityProducts.forEach((product) => {
      let isFree = true;
      for(let i = converCheckInDate; i < converCheckOutDate; i = i + 24*60*60*1000) {
        const dates = new Date(i).toISOString().substr(0,10);
        const date = product.busyDates.find((busyDate) => {return busyDate.date === dates});

        if (date) {
          const available = product.capacity - date.employedQuantity;

          if (available < +req.query.amountGuests) {
              isFree = false;
          }
        } 
      }

      if (!filtredProducts.includes(product) && isFree) {
        filtredProducts.push(product);
      } 
    });
  }
  res.send(filtredProducts);
});

function convertDate(date) {
  let formatDate = new Date(date);
  let month = formatDate.getMonth() + 1 < 10 ? '0' + (formatDate.getMonth() + 1) : '' + (formatDate.getMonth() + 1);
  let day = formatDate.getDate() < 10 ? '0' + (formatDate.getDate()) : '' + (formatDate.getDate());

  return Date.parse(`${formatDate.getFullYear()}-${month}-${day}`);
}

app.listen(4000, () => {
    console.log('Application listening on port 5000!');
});
