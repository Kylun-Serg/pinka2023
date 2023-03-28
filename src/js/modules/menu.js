import { bodyLockToggle, bodyLock, bodyUnlock } from './bodyLock.js';

const menu = () => {

  /*BURGER*/
  const burgerHeader = document.querySelector('[data-burger-header]');
  const burgerToolbar = document.querySelector('[data-burger-toolbar]');
  const burgerMenu = document.querySelector('[data-burger-menu]');
  burgerHeader.addEventListener('click', () => {
    burgerHeader.classList.toggle('burger_active');
    burgerMenu.classList.toggle('burger-menu_active');
    bodyLockToggle();
  });
  burgerToolbar.addEventListener('click', () => {
    burgerToolbar.classList.toggle('burger_active');
    burgerMenu.classList.toggle('burger-menu_active');
    burgerMenu.classList.toggle('burger-menu__toolbar');
    bodyLockToggle();
  });

  /*PHONE*/
  const phoneBtn = document.querySelector('.phone-arrow-btn');
  const phoneList = document.querySelector('.modal-header-phone');
  phoneBtn.addEventListener('click', () => {
    phoneBtn.classList.toggle('phone-arrow-btn_active');
    phoneList.classList.toggle('modal-header-phone_active');
  });
  /*CATALOG*/
  const btnCatalog = document.querySelectorAll('[data-catalog-btn]');
  const modalCatalog = document.querySelector('.modal-category');
  btnCatalog.forEach(el => {
    el.addEventListener('click', () => {
      modalCatalog.classList.add('modal-category_active');
      overlay.classList.add('modal-ovelay_active');
      bodyLock();
    });
  });

  /*BASKET*/
  const btnCart = document.querySelectorAll('.btn-cart');
  const modalCart = document.querySelector('.modal-card');
  btnCart.forEach(btn => {
    btn.addEventListener('click', () => {
      modalCart.classList.add('modal-card_active');
      overlay.classList.add('modal-ovelay_active');
      bodyLock();
    });
  });

  /*FILTER*/
  try {
    const filterBtn = document.querySelector('[data-filter-btn]');
    const filterCatalog = document.querySelector('[data-filter-catalog]');
    filterBtn.addEventListener('click', () => {
      filterCatalog.classList.add('filter-catalog_active');
      bodyLock();
    });
  } catch (error) { }

  /*CLOSE-MENU*/
  const closeBtn = document.querySelectorAll('.close-btn');
  closeBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (e.target.closest('.modal-category')) {
        modalCatalog.classList.remove('modal-category_active');
        overlay.classList.remove('modal-ovelay_active');
        bodyUnlock();
      }
      if (e.target.closest('.modal-card')) {
        modalCart.classList.remove('modal-card_active');
        overlay.classList.remove('modal-ovelay_active');
        bodyUnlock();
      }
      if (e.target.closest('.filter-catalog')) {
        filterCatalog.classList.remove('filter-catalog_active');
        bodyUnlock();
      }
    });
  });

  /*OVERLAY*/
  const overlay = document.querySelector('.modal-ovelay');
  overlay.addEventListener('click', () => {
    modalCatalog.classList.remove('modal-category_active');
    modalCart.classList.remove('modal-card_active');
    overlay.classList.remove('modal-ovelay_active');
    bodyUnlock();
  });
}

export default menu;