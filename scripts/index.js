const cardTemplate = document.querySelector('#card-template').content;
const cardsContainer = document.querySelector('.places__list');

function createCard({ name, link }, removeCard) {
  const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
  const cardImage = cardElement.querySelector('.card__image');
  const cardName = cardElement.querySelector('.card__title');
  const cardButton = cardElement.querySelector('.card__delete-button');

  cardImage.src = link;
  cardImage.alt = name;
  cardName.textContent = name;

  cardButton.addEventListener('click', removeCard);

  return cardElement;
}

function removeCard(event) {
  const cardItem = event.target.closest('.places__item');
  if (cardItem) {
    cardItem.remove();
  }
}

initialCards.forEach((cardData) => {
  const cardElement = createCard(cardData, removeCard);
  cardsContainer.append(cardElement);
});