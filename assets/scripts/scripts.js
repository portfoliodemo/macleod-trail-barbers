const menuBtn = document.querySelector('.menu-btn');
// const menuBtnOpen = document.querySelector('.menu-btn-open');
const menu = document.querySelector('#menu');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
  
  // menuBtnOpen.classList.toggle('active');
  // if (menuBtn.innerHTML === '&#9776;') {
  //   menuBtn.innerHTML = '&#9988;';
  // } else {
  //   menuBtn.innerHTML = '&#9776;';
  // }
});
