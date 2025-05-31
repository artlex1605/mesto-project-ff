import './pages/index.css';
import { initialCards } from './scripts/cards';
import { createCard, removeCard } from './components/card';
import {openModal, closeModal, profile} from './components/modal';

const cardsContainer = document.querySelector('.places__list');
const content = document.querySelector('.content');

initialCards.forEach((cardData) => {
  const cardElement = createCard(cardData, removeCard);
  cardsContainer.append(cardElement);
});

content.addEventListener('click', openModal);
window.addEventListener('keydown', function(evt) {
  if (evt.key === 'Escape') {
    closeModal();
  }
});