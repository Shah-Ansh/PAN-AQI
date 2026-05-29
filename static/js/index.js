document.addEventListener('DOMContentLoaded', () => {
  const navBurger = document.querySelector('.navbar-burger');
  if (!navBurger) {
    return;
  }

  navBurger.addEventListener('click', () => {
    const target = navBurger.dataset.target;
    const menu = target ? document.getElementById(target) : null;

    navBurger.classList.toggle('is-active');
    if (menu) {
      menu.classList.toggle('is-active');
    }
  });
});
