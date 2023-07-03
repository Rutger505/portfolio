const smoothScroll = (target, duration) => {
    const element = document.querySelector(target);
    const targetPosition = element.offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    const animation = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const scrollAmount = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, scrollAmount);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    requestAnimationFrame(animation);
};

const ease = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
};

const clickEvent = (event, link) => {
    event.preventDefault();
    const target = link.getAttribute('href');
    const duration = 1000; // Adjust the duration (in milliseconds) as needed
    smoothScroll(target, duration);
};


const anchorLinks = document.querySelectorAll('.navigation-button');
anchorLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        clickEvent(event, link);
    });
});