'use strict';

(function () {
  document.addEventListener('DOMContentLoaded', function () {
    var lazyloadImages;

    if ('IntersectionObserver' in window) {
      lazyloadImages = document.querySelectorAll('.places__item-lazy');
      var imageObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var image = entry.target;
            image.classList.remove('places__item-lazy');
            imageObserver.unobserve(image);
          }
        });
      });

      lazyloadImages.forEach(function (image) {
        imageObserver.observe(image);
      });
    }
  });
})();
