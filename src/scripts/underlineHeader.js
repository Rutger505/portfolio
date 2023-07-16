const getSectionScrollPositions = () => {
  const sections = document.querySelectorAll('section');
  const sectionScrollPositions = [];
  sections.forEach((section) => {
    const sectionScrollPosition = section.offsetTop - 5;
    sectionScrollPositions.push(sectionScrollPosition);
  });
  return sectionScrollPositions;
};

const getCurrentSection = (scrollSections, currentScroll) => {
  let currentSection = -1;
  for (let i = 0; i < scrollSections.length; i++) {
    if (currentScroll > scrollSections[i]) {
      currentSection = i;
    }
  }
  return currentSection;
};

const hideUnderlines = (underlines) => {
  underlines.forEach((underline) => {
    underline.classList.add(hideUnderlineClass);
    underline.classList.add(hoverUnderlineClass);
    underline.classList.remove(showUnderlineClass);
  });
};

const showUnderline = (underline) => {
  underline.classList.add(showUnderlineClass);
  underline.classList.remove(hoverUnderlineClass);
  underline.classList.remove(hideUnderlineClass);
};

const underlineHeaderMain = () => {
  const currentScroll = window.scrollY;
  const currentSection = getCurrentSection(scrollSections, currentScroll);
  if (currentSection === -1) {
    hideUnderlines(underlines);
    return;
  }
  const currentUnderline = underlines[currentSection];

  hideUnderlines(underlines);
  showUnderline(currentUnderline);
};

window.addEventListener('scroll', underlineHeaderMain);

const hideUnderlineClass = 'translate-x-[-101%]';
const showUnderlineClass = 'translate-x-0';
const hoverUnderlineClass = 'group-hover:translate-x-[-50%]';

const underlines = document.querySelectorAll('.header-underline');
const scrollSections = getSectionScrollPositions();

underlineHeaderMain();
