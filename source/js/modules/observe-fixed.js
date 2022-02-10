const header = document.querySelector('.header');

const isHeaderFixed = () => {
  return header.classList.contains('header--fixed');
};

const observeFixed = () => {
  let body = document.body;
  let breakpointLg = window.matchMedia('(min-width: 1024px)');
  let observer = new MutationObserver(() => {
    if (breakpointLg.matches) {
      if (isHeaderFixed()) {
        header.style.paddingRight = body.style.paddingRight;
      }
    }
  });
  observer.observe(body, {attributes: true});
};

export {observeFixed};
