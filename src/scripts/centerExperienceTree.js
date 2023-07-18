const totalExperiencesElements = document.querySelectorAll('work-experience');

const setArrowSize = (experience, i) => {
  const borderElement = experience.querySelector('.experience-border');
  const textElement = experience.querySelector('.experience-text');
  const textOnRight = (i + 1) % 2 == 0;

  const textHeight = textElement.clientHeight;
  const borderSize = textHeight / 2;
  borderElement.style.borderWidth = `${borderSize}px`;

  // remove space from transparent border
  if (textOnRight) {
    borderElement.style.marginLeft = `-${borderSize}px`;
  } else {
    borderElement.style.marginRight = `-${borderSize}px`;
  }
};

const setCenteringMargin = (experience, i) => {
  const textContainer = experience.querySelector('.experience-text-container');
  const dateText = experience.querySelector('.experience-date');
  const textOnRight = (i + 1) % 2 == 0;

  const textContainerWidth = textContainer.clientWidth;
  const dateTextWidth = dateText.clientWidth;

  const marginNeeded = textContainerWidth - dateTextWidth;

  if (textOnRight) {
    dateText.style.marginLeft = `${marginNeeded}px`;
  } else {
    dateText.style.marginRight = `${marginNeeded}px`;
  }
};

const setLineBorderRadious = (experience, i) => {
  const lineElement = experience.querySelector('.experience-line');
  if (i === 0) {
    lineElement.classList.add('rounded-t-full');
  }
  lineElement.classList.add('rounded-b-full');

  if (i !== 0) {
    const oldExperience = totalExperiencesElements[i - 1];
    const oldLineElement = oldExperience.querySelector('.experience-line');
    oldLineElement.classList.remove('rounded-b-full');
  }
};

const centerExperienceTree = (experience, i) => {
  setArrowSize(experience, i);

  setCenteringMargin(experience, i);

  setLineBorderRadious(experience, i);
};

totalExperiencesElements.forEach((experience, i) => {
  centerExperienceTree(experience, i);
  window.addEventListener('resize', () => centerExperienceTree(experience, i));
});
