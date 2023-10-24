function onClickFilling(e, selectedFood, numberOfChoice) {
  const hasSelectedFood = () => {
    const selectedItemsClassList = e.srcElement.classList.value.split(' ');
    return selectedItemsClassList.indexOf('selectedFood') !== -1;
  };

  const fillingIndex = numberOfChoice[e.srcElement.classList[0]];

  if (hasSelectedFood()) {
    selectedFood.setFilling(null);
    document
      .querySelector(`.${e.srcElement.classList[0]}`)
      .classList.remove('selectedFood');
    return;
  }
  selectedFood.setFilling(filling);
  document
    .querySelector(`.${e.srcElement.classList[0]}`)
    .classList.add('selectedFood');
}

export { onClickFilling };
