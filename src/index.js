import './pages/index.css';
import { initialCards } from './scripts/cards';
import { createCard, removeCard } from './components/card';
import {openModal, closeModal, profile} from './components/modal';

const cardsContainer = document.querySelector('.places__list');
const content = document.querySelector('.content');

const localProfile = JSON.parse(localStorage.getItem('my-mesto-profile'));
if (localProfile) {
  document.querySelector('.profile__title').textContent = localProfile.name;
  document.querySelector('.profile__description').textContent = localProfile.job;
}

let cardsToRender = [];
const localCards = localStorage.getItem('my-mesto-cards');

if (localCards) {
  cardsToRender = JSON.parse(localCards);
} else {
  cardsToRender = initialCards;
  localStorage.setItem('my-mesto-cards', JSON.stringify(initialCards));
}

cardsToRender.forEach((cardData) => {
  const cardElement = createCard(cardData, removeCard);
  cardsContainer.append(cardElement);
});

content.addEventListener('click', openModal);
window.addEventListener('keydown', function(evt) {
  if (evt.key === 'Escape') {
    closeModal();
  }
});