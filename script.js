const textInEl = document.querySelector('.input');
const submitBtnEl = document.querySelector('.submit');
const proTextEl = document.querySelector('.progress-text');

submitBtnEl.addEventListener('click', () => {
  proTextEl.innerText = textInEl.value;
});
