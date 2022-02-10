const initHotelSwiper = () => {
  const hotelSwiper = new Swiper('.hotel-reviews__swiper', {
    speed: 700,
    spaceBetween: 100,
    autoHeight: true,
    allowTouchMove: false,
    navigation: {
      nextEl: '.hotel-reviews__btn--next',
      prevEl: '.hotel-reviews__btn--prev',
      disabledClass: 'hotel-reviews__btn--disabled',
    },
  });
};

export {initHotelSwiper};
