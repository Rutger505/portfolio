const sizeBlur = () => {
  const blurElement = document.querySelector('#background-blur');
  const totalHeight = document.body.clientHeight;

  blurElement.style.height = `${totalHeight}px`;
};

window.addEventListener('resize', sizeBlur);
setInterval(sizeBlur, 500);
