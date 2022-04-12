
// JS-функция определения поддержки WebP

// function testWebP(callback) {
//    var webP = new Image(); webP.onload = webP.onerror = function () { callback(webP.height == 2); }; webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";

// }

// testWebP(function (support) {
//    if (support == true) { document.querySelector('body').classList.add('webp'); } else { document.querySelector('body').classList.add('no-webp'); }

// });



window.onload = function () {
   hidePreloader();
}
const searchLink = document.querySelector('.header__link-search');
const searchBlock = document.querySelector('.header__search');
const searchClose = document.querySelector('.header__close-btn');


searchLink.addEventListener('click', e => {
   e.preventDefault();
   if (searchBlock.style.display === 'block') {
      searchBlock.style.display = 'none';
   }
   else {
      searchBlock.style.display = 'block';
   }
})

searchClose.addEventListener('click', () => {
   if (searchBlock.style.display === 'block') {
      searchBlock.style.display = 'none';
   }
})
// Preloader
let preloader = document.getElementById('preloader');
// let preloader = document.querySelector('preloader')

function hidePreloader() {
   preloader.classList.add('preloader_hide');
   setTimeout(function () {
      preloader.classList.add('preloader_hidden');
      preloader.classList.remove('preloader_hide');
   }, 500)
}
