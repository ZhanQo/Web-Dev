import { Component } from '@angular/core';
import { Product } from '../product.model';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent],
  template: `

    <section class="grid">
      @for (p of products; track p.id) {
        <app-product-card [product]="p"></app-product-card>
      }
    </section>
  `,
  styles: [`
    .title { margin: 0 0 12px; font-size: 18px; }
    .grid {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 12px;
    }
    @media (max-width: 1100px) {
      .grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
    }
    @media (max-width: 800px) {
      .grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    }
    @media (max-width: 520px) {
      .grid { grid-template-columns: 1fr; }
    }
  `]
})
export class ProductListComponent {

  priceFilter: 'all' | 'low' | 'mid' | 'high' = 'all';


  products: Product[] = [
    {
      id: 1,
      name: 'NOW High Potency Vitamin D-3 5000 IU капсулы 240 шт',
      description: 'Мягкие капсулы с витамином D-3 от NOW содержат этот ключевой витамин в легкоусвояемой жидкой гелевой форме. Витамин D обычно поступает с пищей или вырабатывается кожей под воздействием ультрафиолетовой энергии солнца..',
      price: 5500,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p42/p6d/6907522.jpg?format=gallery-medium',
      images: [],
      link: 'https://kaspi.kz/shop/p/now-high-potency-vitamin-d-3-5000-iu-kapsuly-240-sht-101981132/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7iwPYUM2QHav5Qf3dhigYhzn&gclid=Cj0KCQiAtfXMBhDzARIsAJ0jp3Dnf8GHdl-Wa-heO5L129YPzZBPqpI-nD7GdZdKb5DKYl7hRJtSXXAaAtJ-EALw_wcB'
    },
    {
      id: 2,
      name: 'Maxler Creatine Monohydrate',
      description: 'Creatine Monohydrate – 100%-й моногидрат креатина в порошковой форме. Моногидрат креатина характеризуется максимальным содержанием действующего вещества, является самой распространенной формой креатина',
      price: 14990,
      rating: 4.3,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjc_rSqJjlZWKm41PV9u4vc19QTBra7FCzTA&s',
      images: [],
      link: 'https://kaspi.kz/shop/p/maxler-creatine-monohydrate-300-g-29502176/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7iwPYUM2QHav5Qf3dhigYhzn&gclid=Cj0KCQiAtfXMBhDzARIsAJ0jp3Dnf8GHdl-Wa-heO5L129YPzZBPqpI-nD7GdZdKb5DKYl7hRJtSXXAaAtJ-EALw_wcB'
    },
    {
      id: 3,
      name: 'Tunga NordWay 2 195/65 R15 91Q с шипами',
      description: 'Шины Tunga NordWay 2 — оптимальный выбор для зимних условий, обеспечивающие высокую безопасность и комфорт на дороге. Эти шины с шипами гарантируют отличное сцепление на льду и снегу, что делает их идеальными для легковых автомобилей.',
      price: 24700,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p47/pae/72815504.bin?format=gallery-medium',
      images: [],
      link: 'https://kaspi.kz/shop/p/tunga-nordway-2-195-65-r15-91q-s-shipami-12714714/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7iwPYUM2QHav5Qf3dhigYhzn&gclid=Cj0KCQiAtfXMBhDzARIsAJ0jp3Dnf8GHdl-Wa-heO5L129YPzZBPqpI-nD7GdZdKb5DKYl7hRJtSXXAaAtJ-EALw_wcB'
    },
    {
      id: 4,
      name: 'Стул Чили, 86x45x37 см, серый 1 шт.',
      description: 'Стул Чили — современное решение для вашего интерьера, которое сочетает комфорт, стильный дизайн и долговечность.',
      price: 9900,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p87/pca/74520704.png?format=gallery-medium',
      images: [],
      link: 'https://kaspi.kz/shop/p/stul-chili-86x45x37-sm-seryi-1-sht--109319431/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7iwPYUM2QHav5Qf3dhigYhzn&gclid=Cj0KCQiAtfXMBhDzARIsAJ0jp3Dnf8GHdl-Wa-heO5L129YPzZBPqpI-nD7GdZdKb5DKYl7hRJtSXXAaAtJ-EALw_wcB'
    },
    {
      id: 5,
      name: 'Диван Morbido Комфорт, 210х80 см, обивка микровелюр, бежевый',
      description: 'Практичный диван-кровать с легкой системой трансформации.',
      price: 50995,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p06/pe2/88088598.png?format=gallery-medium',
      images: [],
      link: 'https://kaspi.kz/shop/p/morbido-divan-komfort-obivka-mikroveljur-210h80h80-sm-bezhevyi-109383093/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7iwPYUM2QHav5Qf3dhigYhzn&gclid=Cj0KCQiAtfXMBhDzARIsAJ0jp3Dnf8GHdl-Wa-heO5L129YPzZBPqpI-nD7GdZdKb5DKYl7hRJtSXXAaAtJ-EALw_wcB'
    },
    {
      id: 6,
      name: 'K2KANT Тент автомобильный K21443 4XL серый кроссовер',
      description: 'Всесезонный автомобильный тент-гараж K2KANT — надежная защита вашего автомобиля от неблагоприятных погодных условий и механических повреждений.',
      price: 12700,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pd1/pef/22511457.png?format=gallery-medium',
      images: [],
      link: 'https://kaspi.kz/shop/p/k2kant-tent-avtomobil-nyi-k21443-4xl-seryi-krossover-112114871/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7iwPYUM2QHav5Qf3dhigYhzn&gclid=Cj0KCQiAtfXMBhDzARIsAJ0jp3Dnf8GHdl-Wa-heO5L129YPzZBPqpI-nD7GdZdKb5DKYl7hRJtSXXAaAtJ-EALw_wcB'
    },
    {
      id: 7,
      name: 'Мышь Ajazz AJ159 APEX белый',
      description: 'Ультралегкая беспроводная игровая мышь AJ159 APEX с 3 режимами работы, зарядной базой RGB, сенсором PAW3950 с разрешением 30 тыс. точек на дюйм, эргономичной игровой мышью Bluetooth весом 56 г, 5 программируемыми кнопками, переключателем на 100 миллионов нажатий, поддерживающим разрешение 8 тыс. Гц.',
      price: 28000,
      rating: 4.4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h70/hb3/86416444981278.jpg?format=gallery-medium',
      images: [],
      link: 'https://kaspi.kz/shop/p/ajazz-aj159-apex-belyi-120936307/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7iwPYUM2QHav5Qf3dhigYhzn&gclid=Cj0KCQiAtfXMBhDzARIsAJ0jp3Dnf8GHdl-Wa-heO5L129YPzZBPqpI-nD7GdZdKb5DKYl7hRJtSXXAaAtJ-EALw_wcB'
    },
    {
      id: 8,
      name: 'Тепловая электрическая пушка Ресанта ТЭПК-2000К, 2 кВт',
      description: 'Тепловая электрическая пушка Ресанта ТЭПК-2000K керам.нагревательный элемент, круглая 67/1/24 служит для вентиляции и быстрого нагрева воздуха в жилых, производственных помещениях, гаражах, на складах',
      price: 10290,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pfe/paa/95582169.jpg?format=gallery-large',
      images: [],
      link: 'https://kaspi.kz/shop/p/resanta-tepk-2000k-krasnyi-6200914/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7iwPYUM2QHav5Qf3dhigYhzn&gclid=Cj0KCQiAtfXMBhDzARIsAJ0jp3Dnf8GHdl-Wa-heO5L129YPzZBPqpI-nD7GdZdKb5DKYl7hRJtSXXAaAtJ-EALw_wcB'
    },
    {
      id: 9,
      name: 'Imou камера видеонаблюдения Ranger Mini 5MP, 5 расширение 2688х1664',
      description: 'Камера с разрешением 3K (5 МП) обеспечивает чёткое, детализированное изображение и полный обзор помещения благодаря возможности поворота на 355° и наклону 50°',
      price: 23990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p18/p35/77156430.jpg?format=gallery-medium',
      images: [],
      link: 'https://kaspi.kz/shop/p/imou-kamera-videonabljudenija-ranger-mini-5mp-5-rasshirenie-2688h1664-136648790/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7iwPYUM2QHav5Qf3dhigYhzn&gclid=Cj0KCQiAtfXMBhDzARIsAJ0jp3Dnf8GHdl-Wa-heO5L129YPzZBPqpI-nD7GdZdKb5DKYl7hRJtSXXAaAtJ-EALw_wcB'
    },
    {
      id: 10,
      name: 'Xerox Phaser 3020BI белый',
      description: 'Xerox Phaser 3020 - это монохромный лазерный принтер, который отлично подойдет для персонального использования. Белый матовый корпус и стильный дизайн будут смотреться органомично на любом письменном столе.',
      price: 69990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hd2/hf9/63757710032926.jpg?format=gallery-medium',
      images: [],
      link: 'https://kaspi.kz/shop/p/xerox-phaser-3020bi-belyi-1500208/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7iwPYUM2QHav5Qf3dhigYhzn&gclid=Cj0KCQiAtfXMBhDzARIsAJ0jp3Dnf8GHdl-Wa-heO5L129YPzZBPqpI-nD7GdZdKb5DKYl7hRJtSXXAaAtJ-EALw_wcB'
    },
  ];
}