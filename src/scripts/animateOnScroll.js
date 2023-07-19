const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  },
  {
    rootMargin: '-80px',
  }
);

// prettier-ignore
const animateClasses = [
  '.animate-on-scroll',
  
  '.-animate-x-sm',
  '.-animate-x',
  '.-animate-x-md',
  '.-animate-x-lg',
    
  '.animate-x-sm',
  '.animate-x',
  '.animate-x-md',
  '.animate-x-lg',

  '.-animate-y-sm',
  '.-animate-y',
  '.-animate-y-md',
  '.-animate-y-lg',

  '.animate-y-sm',
  '.animate-y',
  '.animate-y-md',
  '.animate-y-lg',
];

const elements = document.querySelectorAll(`${animateClasses}`);

elements.forEach((element) => observer.observe(element));
