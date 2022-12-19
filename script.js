'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

for (let i = 0; i < btnsOpenModal.length; i++) btnsOpenModal[i];

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Creating and inserting elements
// insertadjacenthtml;

const header = document.querySelector('.header');
console.log(header);
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'we use cookie to improve functionality and analytics.';
message.innerHTML =
  'we use cookie to improve functionality and analytics. <button class="btn btn--close-cookie">Got It!</button>';

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';
message.style.backgroundColor = 'pink';

console.log(getComputedStyle(message));
console.log(getComputedStyle(message).height);
header.prepend(message);

document.documentElement.style.setProperty('--color-primary', 'orangered');
