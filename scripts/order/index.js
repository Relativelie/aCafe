/* eslint-disable operator-linebreak */
function closeOrderModal() {
  document.querySelector('.orderBlock').style.display = 'none';
}

function closeOrderModalEsc(e) {
  if (e.key !== 'Escape') return;
  document.querySelector('.orderBlock').style.display = 'none';
}

async function sendOrder() {
  const result = await fetch(
    'https://bankproject.free.beeceptor.com/personal_info',
  );
  const resultReceived = await result.json();
  document.querySelector('.orderBlock').style.display = 'none';

  if (resultReceived.status === 'ok') {
    onSuccessReq();
    return;
  }
  onErrorReq();
}

const onSuccessReq = () => {
  const {
    titleSelector,
    descriptionSelector,
    btnSelector,
    successBlockSelector,
  } = orderSelectors();
  titleSelector.textContent = 'Your order has been sent for processing';
  descriptionSelector.textContent = 'We will call you back within 5min';
  btnSelector.textContent = 'Ok';
  successBlockSelector.style.display = 'flex';
};

const onErrorReq = () => {
  const {
    titleSelector,
    descriptionSelector,
    btnSelector,
    successBlockSelector,
  } = orderSelectors();

  const description =
    'You may either try to log on again after several minutes or contact us +000 000 000';
  titleSelector.textContent = 'Sorry, something is gone wrong';
  descriptionSelector.textContent = description;
  btnSelector.textContent = 'Ok';
  successBlockSelector.style.display = 'flex';
};

function checkOnEmptyFields() {
  const allModals = document.querySelectorAll('.orderModal input');
  const checkList = [];
  for (let i = 0; i < allModals.length; i++) {
    if (allModals[i].value === '') {
      allModals[i].classList.add('redBorder');
      checkList.push('false');
    } else {
      allModals[i].classList.remove('redBorder');
    }
  }
  if (checkList.length === 0) {
    sendOrder();
  }
}

function closeLatestStepOfOrderEsc(e) {
  if (e.key !== 'Escape') return;
  document.querySelector('.fillings').style.display = 'none';
  window.location.reload();
}

function closeLatestStepOfOrder() {
  document.querySelector('.successfullyOrder').style.display = 'none';
  window.location.reload();
}

const orderSelectors = () => {
  const titleSelector = document.querySelector('.successfullyModal h3');
  const descriptionSelector = document.querySelector('.successfullyModal p');
  const btnSelector = document.querySelector('.successfullyModal button');
  const successBlockSelector = document.querySelector('.successfullyOrder');

  return {
    titleSelector,
    descriptionSelector,
    btnSelector,
    successBlockSelector,
  };
};

function openOrderModal() {
  document.querySelector('.orderBlock').style.display = 'flex';
}

export {
  closeOrderModal,
  closeOrderModalEsc,
  sendOrder,
  checkOnEmptyFields,
  closeLatestStepOfOrderEsc,
  closeLatestStepOfOrder,
  openOrderModal,
};
