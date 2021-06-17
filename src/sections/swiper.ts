import { Swiper, SwiperOptions, Navigation, Pagination, Thumbs } from 'swiper';

Swiper.use([Navigation, Pagination, Thumbs]);

const swiperParamsThumb: SwiperOptions = {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true
};

const swiperProductThumb = new Swiper('.product-thumb-swiper', swiperParamsThumb);

const swiperParams: SwiperOptions = {
  spaceBetween: 10,
  grabCursor: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  thumbs: {
    swiper: swiperProductThumb,
  },
};

const swiperProduct = new Swiper(".product-feature-swiper", swiperParams);
