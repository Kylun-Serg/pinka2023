import Swiper, { Navigation, Autoplay, Thumbs } from 'swiper';


const mainSlider = () => {

  const breakpoint = window.matchMedia('(max-width: 991px)');
  // отслеживаем экземпляры swiper, чтобы уничтожить их позже
  let mySwiper;
  const breakpointChecker = function () {
    //     // если нужна большая область просмотра и многострочный макет
    if (breakpoint.matches === true) {
      // clean up old instances and inline styles when available
      // очистить старые экземпляры и встроенные стили, если они доступны
      try { if (mySwiper !== undefined) mySwiper.destroy(true, true); } catch (error) { }
      // if (mySwiper !== undefined) mySwiper.destroy(true, true);
      // or/and do nothing
      // или/и ничего не делать
      return;
      //       // else if a small viewport and single column layout needed
      //       // иначе, если требуется маленькое окно просмотра и макет с одной колонкой
    } else if (breakpoint.matches === false) {

      //       // fire small viewport version of swiper
      //       // запускаем маленькую версию swiper для просмотра
      return enableSwiper();
    }
  };
  const enableSwiper = function () {
    mySwiper = new Swiper('.slider-main__swiper', {
      // configure Swiper to use modules
      modules: [Navigation],
      navigation: {
        nextEl: ".slider-arrow__rigt",
        prevEl: ".slider-arrow__left",
      },
    });
  };
  //   // // keep an eye on viewport size changes
  //   // следить за изменениями размера области просмотра
  breakpoint.addListener(breakpointChecker);
  //   // // kickstart
  //   // // запуск
  breakpointChecker(mySwiper, breakpoint);
  /*slider*/
};


const setGoodsSlider = () => {

  const breakpoint = window.matchMedia('(min-width: 991px)');
  // отслеживаем экземпляры swiper, чтобы уничтожить их позже
  let mySwiper;
  const breakpointChecker = function () {
    //     // если нужна большая область просмотра и многострочный макет
    if (breakpoint.matches === true) {
      // clean up old instances and inline styles when available
      // очистить старые экземпляры и встроенные стили, если они доступны
      try { if (mySwiper !== undefined) mySwiper.destroy(true, true); } catch (error) { }
      // or/and do nothing
      // или/и ничего не делать
      return;
      //       // else if a small viewport and single column layout needed
      //       // иначе, если требуется маленькое окно просмотра и макет с одной колонкой
    } else if (breakpoint.matches === false) {

      //       // fire small viewport version of swiper
      //       // запускаем маленькую версию swiper для просмотра
      return enableSwiper();
    }
  };
  const enableSwiper = function () {
    // console.log(typeof (obj[key].container))
    mySwiper = new Swiper('.set-goods__slider', {
      // configure Swiper to use modules
      slidesPerView: 1.2,
      spaceBetween: 10,
      breakpoints: {
        756: {
          slidesPerView: 2.1,
          spaceBetween: 20,
        },
      }
    });
  };
  //   // // keep an eye on viewport size changes
  //   // следить за изменениями размера области просмотра
  breakpoint.addListener(breakpointChecker);
  //   // // kickstart
  //   // // запуск
  breakpointChecker(mySwiper, breakpoint);
  /*slider*/
};

const modulePopular = () => {
  const breakpoint = window.matchMedia('(min-width: 991px)');
  // отслеживаем экземпляры swiper, чтобы уничтожить их позже
  let mySwiper;
  const breakpointChecker = function () {
    //     // если нужна большая область просмотра и многострочный макет
    if (breakpoint.matches === true) {
      // clean up old instances and inline styles when available
      // очистить старые экземпляры и встроенные стили, если они доступны
      try { if (mySwiper !== undefined) mySwiper.destroy(true, true); } catch (error) { }
      // or/and do nothing
      // или/и ничего не делать
      return;
      //       // else if a small viewport and single column layout needed
      //       // иначе, если требуется маленькое окно просмотра и макет с одной колонкой
    } else if (breakpoint.matches === false) {

      //       // fire small viewport version of swiper
      //       // запускаем маленькую версию swiper для просмотра
      return enableSwiper();
    }
  };
  const enableSwiper = function () {
    try {
      mySwiper = new Swiper('.popular-slider', {
        // configure Swiper to use modules
        slidesPerView: 1.1,
        spaceBetween: 10,
        breakpoints: {
          576: {
            slidesPerView: 1.2,
          },
          756: {
            slidesPerView: 2.1,
            spaceBetween: 20,
          },
        }
      });
    } catch (error) { }

  };
  //   // // keep an eye on viewport size changes
  //   // следить за изменениями размера области просмотра
  breakpoint.addListener(breakpointChecker);
  //   // // kickstart
  //   // // запуск
  breakpointChecker(mySwiper, breakpoint);
};

const moduleSuggetion = () => {
  const breakpoint = window.matchMedia('(min-width: 991px)');
  // отслеживаем экземпляры swiper, чтобы уничтожить их позже
  let mySwiper;
  const breakpointChecker = function () {
    //     // если нужна большая область просмотра и многострочный макет
    if (breakpoint.matches === true) {
      // clean up old instances and inline styles when available
      // очистить старые экземпляры и встроенные стили, если они доступны
      try { if (mySwiper !== undefined) mySwiper.destroy(true, true); } catch (error) { }
      // or/and do nothing
      // или/и ничего не делать
      return;
      //       // else if a small viewport and single column layout needed
      //       // иначе, если требуется маленькое окно просмотра и макет с одной колонкой
    } else if (breakpoint.matches === false) {

      //       // fire small viewport version of swiper
      //       // запускаем маленькую версию swiper для просмотра
      return enableSwiper();
    }
  };
  const enableSwiper = function () {
    // console.log(typeof (obj[key].container))
    mySwiper = new Swiper('.suggetion-slider', {
      // configure Swiper to use modules
      slidesPerView: 1.1,
      spaceBetween: 10,
      breakpoints: {
        576: {
          slidesPerView: 1.2,
        },
        756: {
          slidesPerView: 2.1,
          spaceBetween: 20,
        },
      }
    });
  };
  //   // // keep an eye on viewport size changes
  //   // следить за изменениями размера области просмотра
  breakpoint.addListener(breakpointChecker);
  //   // // kickstart
  //   // // запуск
  breakpointChecker(mySwiper, breakpoint);
};


const sliderReview = () => {
  if (document.querySelector('.review-module__slider')) {

    const reviewSlider = new Swiper('.review-module__slider', {
      // configure Swiper to use modules
      modules: [Navigation],
      slidesPerView: 1.1,
      spaceBetween: 10,
      breakpoints: {
        576: {
          slidesPerView: 1.2,
        },
        768: {
          slidesPerView: 2.2,
        },
        991: {
          slidesPerView: 2.4,
          spaceBetween: 20,
        },
        1333: {
          slidesPerView: 2.4,
          spaceBetween: 20,
        },
      },
      navigation: {
        nextEl: ".slider-arrow__rigt",
        prevEl: ".slider-arrow__left",
      },
    });
  };
}

const sliderBlog = () => {
  if (document.querySelector('.module-blog__items')) {

    const reviewSlider = new Swiper('.module-blog__items', {
      // configure Swiper to use modules
      slidesPerView: 1.1,
      spaceBetween: 10,
      breakpoints: {
        576: {
          slidesPerView: 1.2,
        },
        768: {
          slidesPerView: 2.2,
        },
        991: {
          slidesPerView: 2.4,
          spaceBetween: 20,
        },
        1333: {
          slidesPerView: 3.2,
          spaceBetween: 20,
        },
      },
    });
  };
}

const sliderAbout = () => {
  const breakpoint = window.matchMedia('(min-width: 991px)');
  // отслеживаем экземпляры swiper, чтобы уничтожить их позже
  let mySwiper;
  const breakpointChecker = function () {
    //     // если нужна большая область просмотра и многострочный макет
    if (breakpoint.matches === true) {
      // clean up old instances and inline styles when available
      // очистить старые экземпляры и встроенные стили, если они доступны
      try { if (mySwiper !== undefined) mySwiper.destroy(true, true); } catch (error) { }
      // or/and do nothing
      // или/и ничего не делать
      return;
      //       // else if a small viewport and single column layout needed
      //       // иначе, если требуется маленькое окно просмотра и макет с одной колонкой
    } else if (breakpoint.matches === false) {

      //       // fire small viewport version of swiper
      //       // запускаем маленькую версию swiper для просмотра
      return enableSwiper();
    }
  };
  const enableSwiper = function () {
    // console.log(typeof (obj[key].container))
    mySwiper = new Swiper('.about__items', {
      // configure Swiper to use modules
      slidesPerView: 1.1,
      spaceBetween: 10,
      breakpoints: {
        576: {
          slidesPerView: 2.2,
        },
        768: {
          slidesPerView: 3.2,
        },
        991: {
          spaceBetween: 20,
        },
      },
    });
  };
  //   // // keep an eye on viewport size changes
  //   // следить за изменениями размера области просмотра
  breakpoint.addListener(breakpointChecker);
  //   // // kickstart
  //   // // запуск
  breakpointChecker(mySwiper, breakpoint);
}



const productSliderPage = () => {
  if (document.querySelector('.main-product-slider')) {
    const thumbsSwiper = new Swiper('.thumb-product-slider', {
      // configure Swiper to use modules
      observer: true,
      observeParents: true,
      slidesPerView: 3,
      spaceBetween: 40,
      speed: 800,
    });

    const productSlider = new Swiper('.main-product-slider', {
      // configure Swiper to use modules
      modules: [Thumbs],
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      thumbs: {
        swiper: thumbsSwiper,
      },
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      speed: 800,
    });
  }
};



export { mainSlider, setGoodsSlider, modulePopular, moduleSuggetion, sliderReview, sliderBlog, sliderAbout, productSliderPage };


















// const breakpoint = window.matchMedia('(max-width: 991px)');

// let sectionMainSlider;

// const breakpointChecker = function () {
//   // if larger viewport and multi-row layout needed
//   if (breakpoint.matches === true) {
//     // clean up old instances and inline styles when available
//     if (sectionMainSlider !== undefined) sectionMainSlider.destroy(true, true);
//     // or/and do nothing
//     return;
//     // else if a small viewport and single column layout needed
//   } else if (breakpoint.matches === false) {
//     // fire small viewport version of swiper
//     return enableSwiper();
//   }
// };

// const enableSwiper = function () {
//   sectionMainSlider = new Swiper('.slider-main__swiper', {
//     // configure Swiper to use modules
//     modules: [Navigation],
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });
// };

// // keep an eye on viewport size changes
// breakpoint.addListener(breakpointChecker);
// // kickstart
// breakpointChecker();