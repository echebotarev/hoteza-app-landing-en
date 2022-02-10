const header = document.querySelector('.header');

let pageYPos;

const getHeaderHeight = () => {
  return header.getBoundingClientRect().height;
};

const isHeaderFixed = () => {
  return header.classList.contains('header--fixed');
};

const onHidingToStaticEnd = () => {
  header.style.transition = 'none';
  header.classList.remove('header--fixed');
  header.removeEventListener('animationend', onHidingToStaticEnd);
  header.classList.remove('header--hiding');

  window.addEventListener('scroll', scrollHeader);
};

const onHeaderOpeningEnd = () => {
  header.classList.remove('header--opening');
  window.addEventListener('scroll', scrollHeader);
  header.removeEventListener('animationend', onHeaderOpeningEnd);

  if (window.pageYOffset === 0) {
    header.classList.remove('header--fixed');
  }
};

const makeHeaderStaticWithAnimation = () => {
  header.classList.add('header--hiding');
  header.addEventListener('animationend', onHidingToStaticEnd);
  window.removeEventListener('scroll', scrollHeader);
};

const showHeader = () => {
  header.classList.add('header--fixed');
  header.classList.add('header--opening');
  header.addEventListener('animationend', onHeaderOpeningEnd);
  window.removeEventListener('scroll', scrollHeader);
};

const scrollHeader = () => {
  pageYPos = window.pageYOffset;

  const defineHeaderAppearance = (margin) => {
    if (pageYPos > ((window.innerHeight) + margin)) {
      if (!isHeaderFixed() && (!header.classList.contains('fixed'))) {
        showHeader();
      }
    }
  };

  if (pageYPos < (window.innerHeight)) {
    if (isHeaderFixed()) {
      makeHeaderStaticWithAnimation();
    }
  }

  defineHeaderAppearance(getHeaderHeight());
};

const initHeaderScroll = () => {
  window.addEventListener('scroll', scrollHeader);
};

export {initHeaderScroll};
