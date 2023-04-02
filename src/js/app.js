import notification from './modules/notification.js';
import spollers from './modules/spollers.js';
import Typed from 'typed.js';
import Swiper, { Navigation } from 'swiper';
import { mainSlider, setGoodsSlider, modulePopular, moduleSuggetion, sliderReview, sliderBlog, sliderAbout, productSliderPage } from './modules/sliders.js';
import accordion from './modules/accordion.js';
import scrollMenu from './modules/scrollMenu.js';
import { Tabs } from './modules/tabs.js';
import menu from './modules/menu.js';
import { Select } from './libs/select.js';
document.addEventListener('DOMContentLoaded', () => {
  'use strict';
  //модалки меню
  menu();
  //Строка с уведомлением
  notification();
  //Адаптивный споллер для футера
  spollers();
  //слайдер главная промо
  mainSlider();
  //слайдер главная Подберем набор
  setGoodsSlider();
  //слайдер главная модуль популярные
  modulePopular();
  //слайдер главная модуль лучшие предложение
  moduleSuggetion();
  //слайдер главная модуль отзывы
  sliderReview();
  //слайдер главная модуль статти
  sliderBlog();
  //слайдер главная модуль о нас
  sliderAbout();
  //слайдер страница товара
  productSliderPage();
  //появление нижнего меню при скролле
  scrollMenu();
  //табы на странице товара
  const tabs1 = new Tabs('tab', {});
  //споллер на странице фильтров
  accordion('.item-filter-catalog__heading');
  //споллер модуль вопросов
  accordion('.questions-page__hedaing');
  //модуль надписи на главной
  try {
    const typed = new Typed('.write', {
      strings: ["мила", "тверді шампуні", "дезодоранти", "бальзами для волосся", "бальзами для губ", "бальзами для волосся"],
      typeSpeed: 110,
      backSpeed: 90,
      backDelay: 3000,
      loop: true,
    });
  } catch (error) { }
  //select
  try {
    const selectCountry = new Select('#select-country', {
      placeholder: 'Країна',
      selectedId: '0',
      data: [
        { id: '1', value: 'Україна' },
        { id: '2', value: 'Франція' },
      ]
    });
  } catch (error) { }
  try {
    const selectREgion = new Select('#select-region', {
      placeholder: 'Область',
      selectedId: '0',
      data: [
        { id: '1', value: 'Сумська' },
        { id: '2', value: 'Харківська' },
        { id: '3', value: 'Херсонська' },
        { id: '4', value: 'Полтавська' },
        { id: '5', value: 'Київська' },
      ]
    });
  } catch (error) { }

});