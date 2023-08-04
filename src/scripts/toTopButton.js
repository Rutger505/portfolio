const toTopButtonElement = document.querySelector('#to-top-button');

const toTopButton = () => {
  // throttle
  window.removeEventListener('scroll', toTopButton);
  setTimeout(() => {
    window.addEventListener('scroll', toTopButton);
  }, 50);

  if (window.scrollY > 200) {
    toTopButtonElement.classList.add('opacity-100');
  } else {
    toTopButtonElement.classList.remove('opacity-100');
  }
};

window.addEventListener('scroll', toTopButton);
