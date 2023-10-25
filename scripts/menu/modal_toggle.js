function onClickFilling(e, selectedFood, numberOfChoice) {
  const fillingIndex = numberOfChoice[e.srcElement.classList[0]];
  const prevFillingIndex = selectedFood.getSelectedFood().fillings;

  if (fillingIndex === prevFillingIndex) {
    selectedFood.setFilling(null);
    removeSelectedClass();
    return;
  }

  removeSelectedClass();
  selectedFood.setFilling(fillingIndex);
  setSelectedClass(e);
}

const removeSelectedClass = () => {
  const selector = document.querySelector('.selectedFood');
  if (selector == null) return;

  selector.classList.remove('selectedFood');
};

function closeFillingsModal(selectedFood) {
  selectedFood.clearSelectedFood();
  removeSelectedClass();
  document.querySelector('.fillings').style.display = 'none';
}

function closeFillingsModalEsc(e, selectedFood) {
  if (e.key !== 'Escape') return;

  selectedFood.clearSelectedFood();
  removeSelectedClass();
  document.querySelector('.fillings').style.display = 'none';
}

const setSelectedClass = (e) => {
  document
    .querySelector(`.${e.srcElement.classList[0]}`)
    .classList.add('selectedFood');
};

export { onClickFilling, closeFillingsModal, closeFillingsModalEsc };
