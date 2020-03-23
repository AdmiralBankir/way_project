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

  var setValidityMessage = function (form) {
    var submit = form.querySelector('button[type=submit]');
    var inputs = form.querySelectorAll('input');

    submit.addEventListener('click', function () {
      for (var k = 0; k < inputs.length; k++) {
        var input = inputs[k];

        if (input.checkValidity() === false) {
          if (!input.classList.contains('form__error-input')) {
            input.insertAdjacentHTML('beforebegin', '<p class="form__error-message">' + INVALID_MESSAGE + '</p>');
            input.classList.add('form__error-input');
          }
        } else {
          if (input.classList.contains('form__error-input')) {
            var errorMessages = form.querySelectorAll('.form__error-message');
            for (var z = 0; z < errorMessages.length; z++) {
              errorMessages[z].remove();
            }
            input.classList.remove('form__error-input');
          }
        }
      }
    });

  };

  var modalForm = document.querySelector('.countries__modal__wrapper form');
  var feedbackForm = document.querySelector('.feedback-form__wrapper form');

  setValidityMessage(modalForm);
  setValidityMessage(feedbackForm);

})();
