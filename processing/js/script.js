
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

//svg
document.querySelectorAll('img.svg').forEach(img => {
   var imgId = img.id;
   var imgClass = img.className;
   var imgURL = img.src;
   var imgFill = img.getAttribute('data-fill');

   fetch(imgURL).then(r => r.text()).then(text => {
      var parser = new DOMParser();
      var xmlDoc = parser.parseFromString(text, "text/xml");
      var svg = xmlDoc.getElementsByTagName('svg')[0];

      if (typeof imgId !== 'undefined') {
         svg.setAttribute('id', imgId);
      }

      if (typeof imgClass !== 'undefined') {
         svg.setAttribute('class', imgClass);
      }

      if (typeof imgFill !== 'undefined') {
         svg.setAttribute('fill', imgFill);
      }

      img.parentNode.replaceChild(svg, img);

   }).catch(console.error);

});
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
