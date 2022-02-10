const subsPeriodToggler = () => {
  const plansBtnYear = document.querySelector('.subscriptions__btn--year');
  const plansBtnMonth = document.querySelector('.subscriptions__btn--month');
  const plansContent = document.querySelector('.subscriptions__content');

  function togglePlansPeriod() {
    plansBtnMonth.classList.toggle('active');
    plansBtnYear.classList.toggle('active');
    plansContent.classList.toggle('is-year');
  }

  if (!plansBtnYear && !plansBtnMonth) {
    return;
  }

  plansBtnYear.addEventListener('click', togglePlansPeriod);
  plansBtnMonth.addEventListener('click', togglePlansPeriod);
};
export {subsPeriodToggler};
