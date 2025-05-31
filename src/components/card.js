const cardTemplate = document.querySelector('#card-template').content;

function cardToggle(evt) {
  if (evt.target.classList.contains('card__like-button')) {
    evt.target.classList.toggle('card__like-button_is-active');
  }
}

export function createCard({ name, link }, removeCard) {
  const cardElement = cardTemplate
    .querySelector('.places__item')
    .cloneNode(true);
  const cardImage = cardElement.querySelector('.card__image');
  const cardName = cardElement.querySelector('.card__title');
  const cardButton = cardElement.querySelector('.card__delete-button');

  cardImage.src = link;
  cardImage.alt = name;
  cardName.textContent = name;

  cardButton.addEventListener('click', removeCard);
  
  // Добавляем обработчик события для кнопки лайка внутри createCard
  const likeButtons = cardElement.querySelectorAll('.card__like-button');
  
  likeButtons.forEach(button => {
    button.addEventListener('click', cardToggle);
  });

  return cardElement;
}

export function removeCard(event) {
  const cardItem = event.target.closest('.places__item');
  if (cardItem) {
    cardItem.remove();
  }
}