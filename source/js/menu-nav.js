'use strict';

(function () {

  var headerNav = document.querySelector('.page-header__nav-wrapper');
  var closeBtn = document.querySelector('.page-header__toggle');

  headerNav.classList.remove('page-header__nav-wrapper--nojs');
  closeBtn.classList.remove('page-header__toggle--nojs');

  closeBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    closeBtn.classList.toggle('page-header__toggle--close');
    headerNav.classList.toggle('page-header__nav-wrapper--open');
  });

})();
