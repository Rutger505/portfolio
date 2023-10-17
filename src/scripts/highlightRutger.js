const textElement = document.querySelector('#home-text');

const originalText = textElement.innerHTML;
const newText = originalText.replace('Rutger', '<span class="text-accent">Rutger</span>');

textElement.innerHTML = newText;
