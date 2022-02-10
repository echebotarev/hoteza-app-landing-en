const productSlider = document.querySelector('.subscriptions__swiper');
const breakpointLg = window.matchMedia('(min-width:1280px)');
const breakpointSm = window.matchMedia('(max-width:767px)');
let swiper;

const initSwiper = (slider) => {
  swiper = new Swiper(slider, {
    speed: 400,
    autoHeight: true,
    allowTouchMove: true,
    breakpointsBase: 'window',
    slidesPerView: 'auto',
  });
};

const initPlansSwiper = () => {
  if (!productSlider) {
    return;
  }
  const breakpointChecker = () => {
    if (breakpointLg.matches) {
      if (swiper) {
        swiper.destroy(true, true);
      }
    } else if (breakpointSm.matches) {
      if (swiper) {
        swiper.destroy(true, true);
      }
    } else {
      initSwiper(productSlider);
    }
  };
  breakpointLg.addListener(breakpointChecker);
  breakpointSm.addListener(breakpointChecker);
  breakpointChecker();
};
export {initPlansSwiper};
