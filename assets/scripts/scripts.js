const menuBtn = document.querySelector('.menu-btn');
const element = document.getElementById('toggleElement');
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

element.addEventListener('click', toggleSymbol);

function toggleSymbol() {
  const currentSymbol = element.innerHTML;

  switch (currentSymbol.charCodeAt(0)) {
    case 9988:
      element.innerHTML = '&#9776;';
      break;
    case 9776:
      element.innerHTML = '&#9988;';
      break;
    default:
      break;
  }
}


// const element = document.getElementById('toggleElement');
// element.addEventListener('click', toggleSymbol);

// function toggleSymbol() {
//   const currentSymbol = element.innerHTML;

//   switch (currentSymbol) {
//     case '&#9988;':
//       element.innerHTML = '&#9778;';
//       break;
//     case '&#9778;':
//       element.innerHTML = '&#9988;';
//       break;
//     default:
//       break;
//   }
// }


// function toggleSymbol() {
//   const currentSymbol = element.innerHTML;

//   switch (currentSymbol) {
//     case '&#9988;':
//       element.innerHTML = '&#9778;';
//       break;
//     case '&#9778;':
//       element.innerHTML = '&#9988;';
//       break;
//     default:
//       break;
//   }
// }


// function toggleSymbol() {
//   const currentSymbol = element.innerHTML;

//   if (currentSymbol === '&#9988;') {
//     element.innerHTML = '&#9778;';
//   } else {
//     element.innerHTML = '&#9988;';
//   }
// }

