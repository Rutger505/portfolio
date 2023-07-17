const totalExperiencesElements = document.querySelectorAll('work-experience');
const textElements = document.querySelectorAll('.experience-text');
const borderElements = document.querySelectorAll(`.experience-border`);
const textContainers = document.querySelectorAll(`.experience-text-container`);
const dateTexts = document.querySelectorAll(`.experience-date`); // where margin whill be applied
const lineElements = document.querySelectorAll(`.experience-line`);

for (let i = 1; i < totalExperiencesElements.length + 1; i++) {
  const textHeight = textElements[i].clientHeight;
  const borderSize = textHeight / 2;

  // set correct border size
  const rightSide = elementCount % 2 == 0;
  borderElements[i].style.borderWidth = `${borderSize}px`;
  if (rightSide) {
    borderElements[i].style.marginLeft = `-${borderSize}px`;
  } else {
    borderElements[i].style.marginRight = `-${borderSize}px`;
  }

  // set correct margin for centering

  const textContainerWidth = textContainers[i].clientWidth;
  const dateTextWidth = dateTexts[i].clientWidth;

  const margin = textContainerWidth - dateTextWidth;

  if (rightSide) {
    dateTexts[i].style.marginLeft = `${margin}px`;
  } else {
    dateTexts[i].style.marginRight = `${margin}px`;
  }

  // rounded middle line only at top and bottom
  if (elementCount == 1) {
    lineElements[i].classList.add('rounded-t-full');
  }
  lineElements[i].classList.add('rounded-b-full');

  if (elementCount !== 1) {
    const oldLineElement = lineElements[i - 1];
    oldLineElement.classList.remove('rounded-b-full');
  }
}
