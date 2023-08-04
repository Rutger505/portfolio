const compactHeaderMain = () => {
  // throttle
  window.removeEventListener('scroll', compactHeaderMain);
  setTimeout(() => {
    window.addEventListener('scroll', compactHeaderMain);
  }, 30);

  if (window.scrollY > 20) {
    header.classList.add('h-16');
    header.classList.remove('h-24');
  } else {
    header.classList.remove('h-16');
    header.classList.add('h-24');
  }
};

const header = document.querySelector('header');
window.addEventListener('scroll', compactHeaderMain);
compactHeaderMain();
