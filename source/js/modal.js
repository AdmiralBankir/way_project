'use strict';
(function () {
  var ESC_KEY = 27;

  var modal = document.querySelector('.countries__modal');
  var closeBtn = modal.querySelector('.countries__modal-close');
  var buyBtn = document.querySelector('.card__btn');
  var overlay = document.querySelector('.overlay');

  var closeModal = function () {
    modal.classList.remove('countries__modal--active');
    overlay.classList.remove('overlay--active');
  };

  buyBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    modal.classList.add('countries__modal--active');
    overlay.classList.add('overlay--active');
  });

  closeBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    closeModal();
  });

  overlay.addEventListener('click', function () {
    closeModal();
  });

  document.addEventListener('keyup', function (e) {
    if (e.keyCode === ESC_KEY) {
      closeModal();
    }
  });

})();
