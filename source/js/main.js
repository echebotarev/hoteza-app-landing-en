// import {ieFix} from './utils/ie-fix';
// import {polyfillObjectFit} from './utils/polyfill-object-fit';
import {initVideoPlay} from './modules/video-play';
import {iosVhFix} from './utils/ios-vh-fix';

import {initModals} from './modules/modals/init-modals';
import {initAccordions} from './vendor/init-accordion';

import {initHotelSwiper} from './modules/hotel-swiper';
import {initPlansSwiper} from './modules/plans-swiper';
import {subsPeriodToggler} from './modules/subs-period-toggler';
import {initHeaderScroll} from './modules/header-scroll';

import {observeFixed} from './modules/observe-fixed';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  // только если ie11
  // ieFix();
  // https://github.com/fregante/object-fit-images
  // polyfillObjectFit();

  iosVhFix();
  initHeaderScroll();
  observeFixed();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initVideoPlay();
    initModals();
    initPlansSwiper();
    subsPeriodToggler();
    initAccordions();
    initHotelSwiper();

  });
});

// ---------------------------------

// используйте .closest(el)

// для адаптивного JS используейтся matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// привязывайте js не на бэм, а на data-cookie

// выносим все в data-attr - url до пинов карты, настройки автопрокрутки, url к json и т.д.

if (navigator.language === 'ru-RU' && !localStorage.getItem('isChosenLanguage')) {
    localStorage.setItem('isChosenLanguage', true)
    document.location = '/ru'
}

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MHRR3P2');

window.gtag = (args) => {
  dataLayer.push(args);
};

const openFormBtn = document.querySelector('[data-open-modal="conversational"]');
openFormBtn.addEventListener('click', () => {
  // eslint-disable-next-line no-undef
  gtag({event: 'openedForm'});
  // eslint-disable-next-line no-undef
  fbq('trackCustom', 'openedForm');
}, false);
