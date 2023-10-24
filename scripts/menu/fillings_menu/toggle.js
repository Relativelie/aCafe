const closeBtn = document.querySelector('.closeBtn');
closeBtn.addEventListener('click', closeFillingsModal);
document
  .querySelector('.addFood')
  .addEventListener('click', closeFillingsModal);
document.addEventListener('keyup', closeFillingsModalEsc);

function closeFillingsModal() {
  document.querySelector('.fillings').style.display = 'none';
}

function closeFillingsModalEsc(e) {
  if (e.key === 'Escape') {
    document.querySelector('.fillings').style.display = 'none';
  }
}
