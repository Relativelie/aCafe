function getSelectedCategory() {
  document.querySelector('.fillings').style.display = 'flex';
  const category = document
    .querySelector('.selected')
    .classList[0].split('Btn')
    .join('');

  return category;
}

export { getSelectedCategory };
