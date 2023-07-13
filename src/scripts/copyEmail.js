const copyToClipboard = (Event) => {
    const target = Event.target;
    const email = target.textContent;

    navigator.clipboard.writeText(email);

    emailHover.classList.remove('group-hover:block');
    emailMessage.classList.remove('hidden');

    setTimeout(() => {
        emailMessage.classList.add('hidden');
        emailHover.classList.add('group-hover:block');
    }, 1500);
};

const emailButton = document.querySelector('#copy-email');
const emailMessage = document.querySelector('#copy-mail-succes');
const emailHover = document.querySelector('#copy-mail-hover');

emailButton.addEventListener('click', copyToClipboard);