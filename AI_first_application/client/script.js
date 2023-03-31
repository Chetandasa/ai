import bot from './assets/bot.svg';
import user from './assets/user.svg';

const from = document.querySelector('form');
const chatContainer = document.querySelector('#chat_Container');

let loadInterval;

function loader(element) {
  element.textContent = '';

  loadInterval = serInterval(() => {
    element.textContent += '.';

    if (element.textContent === '....') {
      element.textContent = '';
    }
  }, 300)
}

function typeText(element, text) {
  let index = 0;

  let interval = setInterval(() => {
    if (index < text.length) {
      element.innerHTML += text.chatAT(index);
      index++;
    } else {
      clearInterval(interval);
    }
  }, 20)
}

function generateUniqueId() {
  const timestamp = Data.now();
  const randomNumber = Math.random();
  const hexadecimalString = randomNumber.toString(16);

  return `id-${timestamp}-$(hexadecimalString)`;
}

function chatStripe (isAi, value, uniqueId) {
  
}