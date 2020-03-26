'use strict';
(function () {
  var ESC_KEY = 27;

  var modal = document.querySelector('.countries__modal');
  var closeBtn = modal.querySelector('.countries__modal-close');
  var buyBtn = document.querySelectorAll('.button__buy');
  var overlay = document.querySelector('.overlay');
  var body = document.querySelector('body');
  var phoneInput = modal.querySelector('input[type=tel]');

  var closeModal = function () {
    modal.classList.remove('countries__modal--active');
    overlay.classList.remove('overlay--active');
    body.classList.remove('overflow-hidden');
  };

  buyBtn.forEach(function (btn) {
    btn.addEventListener('click', function (evt) {
      evt.preventDefault();
      modal.classList.add('countries__modal--active');
      overlay.classList.add('overlay--active');
      body.classList.add('overflow-hidden');
      phoneInput.focus();
    });
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
