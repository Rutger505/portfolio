const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  },
  {
    threshold: 0.5,
  }
);

const elements = document.querySelectorAll('.animate-on-scroll, .animate-top, .animate-bottom, .animate-left, .animate-right');

elements.forEach((element) => observer.observe(element));
