const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    }
  });
});

const elements = document.querySelectorAll('.animate-on-scroll');

elements.forEach((element) => observer.observe(element));
