const menuIcon = document.querySelector('#dropdown-button');

const toggleMenuIcon = () => {
    const menuIconBars = menuIcon.children;
    menuIconBars[0].classList.toggle('rotate-45');
    menuIconBars[0].classList.toggle('translate-y-[9px]');

    menuIconBars[1].classList.toggle('opacity-0');

    menuIconBars[2].classList.toggle('-rotate-45');
    menuIconBars[2].classList.toggle('-translate-y-[9px]');
};

const toggleNavigation = () => {
    const dropdownMenu = document.querySelector('#responsive-nav');
    dropdownMenu.classList.toggle('max-h-0');
    dropdownMenu.classList.toggle('max-h-[250px]');
};


// show and hide dropdown with button
menuIcon.addEventListener('click', () => {
    toggleMenuIcon();
    toggleNavigation();
});

// close nav on button click 
const navLinks = document.querySelectorAll('#responsive-nav ul li a');
navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        toggleMenuIcon();
        toggleNavigation();
    });
});
