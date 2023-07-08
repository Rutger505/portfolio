const backgroundBlur = document.querySelector('#background-blur');

const totalHeight = document.body.scrollHeight;
const totalWidth = document.body.scrollWidth;

backgroundBlur.style.height = `${totalHeight}px`;
backgroundBlur.style.width = `${totalWidth}px`;