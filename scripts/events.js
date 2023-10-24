// EVENTS

const eventBlock = document.querySelectorAll('.newsItem');
function showEvents() {
  let i = 0;
  const myInterval = setInterval(() => {
    eventBlock[i].style.opacity = 1;
    eventBlock[i].style.top = 0;
    i++;
    if (i === eventBlock.length) {
      clearInterval(myInterval);
    }
  }, 200);
}

const observer = new IntersectionObserver(
  (e) => {
    if (e[0].isIntersecting === true) {
      showEvents();
      observer.disconnect();
    }
  },
  { threshold: [0.3] },
);

observer.observe(document.querySelector('.newsBlockContainer'));

document.querySelector('.addFood').addEventListener('click', animatedBasket);

function animatedBasket() {
  document.querySelector('.menu__button').classList.remove('remove-animation');
  const myTimeout = setInterval(() => {
    document.querySelector('.menu__button').classList.add('remove-animation');
    clearInterval(myTimeout);
  }, 1000);
}
