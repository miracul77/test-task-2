window.addEventListener('load', () => {
  let openPopUp = document.querySelector('.open_pop_up');
  let closePopUp = document.querySelector('.pop_up_close');
  let closePopUpBtn = document.querySelector('.btnClose');
  let popUp = document.querySelector('.pop_up');
  let form = document.querySelector('.form');
  let inputs = form.querySelectorAll('.check');
  let validation = {
    carNumber: {
      pattern: /^([АВЕКМНОРСТУХ]{1}[0-9]{3}[АВЕКМНОРСТУХ]{2}[0-9]{2,3})$/,
      errorText: 'Некорректно введён номер автомобиля',
    },
    data: {
      pattern: /^\d{2}[./-]\d{2}[./-]\d{4}$/,
      errorText: 'Некорректно введена дата',
    },

    names: {
      pattern: /./,
      errorText: 'Некорректный ввод данных',
    },
    spasport: {
      pattern: /^([0-9]{2}\s{1}[0-9]{2})$/,
      errorText: 'Некорректный ввод серии <br /> поспорта',
    },
    npasport: {
      pattern: /^([0-9]{6})$/,
      errorText: 'Некорректный ввод номера <br /> поспорта',
    },
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let hasError = false;

    for (let i = 0; i < inputs.length; i++) {
      let inp = inputs[i];
      let rule = validation[inp.dataset.rule];

      if (!rule.pattern.test(inp.value)) {
        inp.classList.add('err');
        hasError = true;
        showError(inp, rule.errorText);
      }
    }

    if (hasError) {
      e.preventDefault();
    }
  });

  form.addEventListener('focusin', (e) => {
    if (e.target.classList.contains('check')) {
      e.target.classList.remove('err');
      showError(e.target, '');
    }
  });

  openPopUp.addEventListener('click', function (e) {
    e.preventDefault();
    popUp.classList.add('active');
  });

  closePopUp.addEventListener('click', () => {
    popUp.classList.remove('active');
  });

  closePopUpBtn.addEventListener('click', () => {
    popUp.classList.remove('active');
  });
});

function showError(input, message) {
  input.nextElementSibling.innerHTML = message;
}
