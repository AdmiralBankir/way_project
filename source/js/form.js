'use strict';

(function () {
  var forms = document.querySelectorAll('form');
  var INVALID_MESSAGE = 'Данные не верны';

  var onSubmitForm = function (i) {
    return function () {
      var success = document.querySelector('#success').content.querySelector('.success').cloneNode(true);
      var formSuccess = forms[i].appendChild(success);
      formSuccess.querySelector('button').addEventListener('click', function () {
        forms[i].removeChild(formSuccess);
      });
    };
  };

  for (var i = 0; i < forms.length; i++) {
    forms[i].addEventListener('submit', onSubmitForm(i));
  }

  for (var j = 0; j < forms.length; j++) {
    forms[j].addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
  }

  var onInputChange = function (e) {
    var input = e.target;

    if (!input.checkValidity()) {
      input.classList.add('form__error-input');
    } else {
      input.classList.remove('form__error-input');
    }
  }

  var inputs = document.querySelectorAll('input');

  inputs.forEach(function (input) {
    input.insertAdjacentHTML('afterend', '<p class="form__error-message">' + INVALID_MESSAGE + '</p>');
    input.addEventListener('input', onInputChange);
  });


})();
