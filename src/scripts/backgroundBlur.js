const sizeBlur = () => {
  const blurElement = document.querySelector('#background-blur');
  const totalHeight = document.body.clientHeight;

  blurElement.style.height = `${totalHeight}px`;

  console.log('fired');
};

window.addEventListener('resize', sizeBlur);
sizeBlur();
