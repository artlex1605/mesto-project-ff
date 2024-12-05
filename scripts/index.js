const cardTemplate = document.querySelector('#card-template').content;
const cardsContainer = document.querySelector('.places__list');

function createCard({ name, link }) {
  const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);

  cardElement.querySelector('.card__image').src = link;
  cardElement.querySelector('.card__title').textContent = name;

  return cardElement;
}

function removeCard(event) {
  const cardItem = event.target.closest('.places__item');
  if (cardItem) {
    cardItem.remove();
  }
}

initialCards.forEach((cardData) => {
  const cardElement = createCard(cardData);
  cardElement.querySelector('.card__delete-button').addEventListener('click', removeCard);
  cardsContainer.append(cardElement);
});