const hamburger = document.querySelector('.hamburger'),
      menu      = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close'),
      overlay   = document.querySelector('.overlay');
      menuItem  = document.querySelectorAll('.menu__item');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('hamburger_active');
  menu.classList.toggle('menu_active'); 
  overlay.classList.toggle('overlay_active');
});

closeElem.addEventListener('click', () => {
  hamburger.classList.remove('hamburger_active');
  menu.classList.remove('menu_active'); 
  overlay.classList.remove('overlay_active'); 
});

menuItem.forEach(item => {
  item.addEventListener('click', () => {
    menu.classList.remove('menu_active');
    overlay.classList.remove('overlay_active'); 
    hamburger.classList.remove('hamburger_active');
  });
});
