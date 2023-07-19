const toTopButton = document.querySelector('#to-top-button');

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    toTopButton.classList.add('opacity-100');
  } else {
    toTopButton.classList.remove('opacity-100');
  }
});
