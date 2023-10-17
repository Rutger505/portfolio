const sizeBlur = () => {
  const blurElement = document.querySelector('#background-blur');
  const totalHeight = document.body.clientHeight;

  blurElement.style.height = `${totalHeight}px`;
};

setInterval(sizeBlur, 500);
sizeBlur();
