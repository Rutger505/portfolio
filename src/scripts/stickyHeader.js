let prevScrollPos = window.pageYOffset;

window.addEventListener('scroll', () => {
    const currentScrollPos = window.pageYOffset;
    const header = document.querySelector('header');
    console.log(header);


    if (prevScrollPos > currentScrollPos) {
        // Scrolling up, show the header
        header.classList.remove('translate-y-[-100%]');
        header.classList.add('translate-y-0');
    } else {
        // Scrolling down, hide the header
        header.classList.remove('translate-y-0');
        header.classList.add('translate-y-[-100%]');
    }

    prevScrollPos = currentScrollPos;
});
