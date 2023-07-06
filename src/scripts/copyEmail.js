const copyToClipboard = (Event) => {
    const target = Event.target;
    const email = target.textContent;

    navigator.clipboard.writeText(email);

    emailMessage.classList.remove('hidden');

    setTimeout(() => {
        emailMessage.classList.add('hidden');
    }, 1500);
};

const emailButton = document.querySelector('#copy-email');
const emailMessage = document.querySelector('#copy-mail-succes');
emailButton.addEventListener('click', copyToClipboard);