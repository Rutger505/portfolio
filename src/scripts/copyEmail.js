const copyToClipboard = () => {
  navigator.clipboard.writeText(emailAdress);

  emailMessage.classList.remove('opacity-0');
  emailMessage.classList.remove('-translate-y-5');
  emailMessage.classList.add('translate-y-0');

  setTimeout(() => {
    emailMessage.classList.add('opacity-0');
    emailMessage.classList.add('-translate-y-5');
    emailMessage.classList.remove('translate-y-0');
  }, 1500);
};

const emailButton = document.querySelector('#copy-email');
const emailAdress = document.querySelector('#copy-email-address').innerHTML;
const emailMessage = document.querySelector('#copy-mail-succes');

emailButton.addEventListener('click', copyToClipboard);
