const sizeBlur = () => {
  const blurElement = document.querySelector('#background-blur');
  const totalHeight = document.body.clientHeight;

  blurElement.style.height = `${totalHeight}px`;
};

const backgroundBlur = () => {
  setTimeout(sizeBlur, 100);
  sizeBlur();
};

window.addEventListener('resize', backgroundBlur);
sizeBlur();
