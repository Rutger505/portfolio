const compactHeader = () => {
  // throttle
  window.removeEventListener('scroll', compactHeader);
  setTimeout(() => {
    window.addEventListener('scroll', compactHeader);
  }, 30);

  if (window.scrollY > 30) {
    header.classList.add('h-16');
    header.classList.remove('h-24');
  } else {
    header.classList.remove('h-16');
    header.classList.add('h-24');
  }
};

const header = document.querySelector('header');
window.addEventListener('scroll', compactHeader);
compactHeader();
