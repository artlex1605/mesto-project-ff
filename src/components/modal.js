import '../blocks/popup/_is-animated/popup_is-animated.css';
import '../blocks/popup/_is-opened/popup_is-opened.css';
import { createCard } from '../components/card.js';
import { removeCard } from '../components/card.js';

export const profile = document.querySelector('.profile');

// Функция для открытия модального окна
export function openModal(evt) {
  if (evt.target.classList.contains('profile__edit-button')) {
    const popup = document.querySelector('.popup_type_edit');
    popup.classList.add('popup-visible');

    const profileTitle = document.querySelector('.profile__title');
    const profileDescription = document.querySelector('.profile__description');

    document.querySelector('.popup__input_type_name').value =
      profileTitle.textContent;
    document.querySelector('.popup__input_type_description').value =
      profileDescription.textContent;
  }

  if (evt.target.classList.contains('profile__add-button')) {
    const popup = document.querySelector('.popup_type_new-card');
    popup.classList.add('popup-visible');
  }

  if (evt.target.classList.contains('card__image')) {
    const popup = document.querySelector('.popup_type_image');
    popup.classList.add('popup-visible');

    popup.querySelector('.popup__image').src = evt.target.src;
  }
}

// Функция для закрытия модального окна
export function closeModal() {
  const popup = document.querySelectorAll('.popup');
  popup.forEach((el) => {
    el.classList.remove('popup-visible');
  });

  // Сброс значений полей формы после закрытия модального окна
  document.querySelector('.popup__input_type_name').value = '';
  document.querySelector('.popup__input_type_description').value = '';
}

const closeButtons = document.querySelectorAll('.popup__close');
closeButtons.forEach((button) => {
  button.addEventListener('click', closeModal);
});

// Элементы формы
const formEdit = document.querySelector('.popup_type_edit');
const nameInput = formEdit.querySelector('.popup__input_type_name');
const jobInput = formEdit.querySelector('.popup__input_type_description');

// Выбранные элементы на странице для обновления
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');

// Обработчик события отправки формы
  function handleFormSubmit(evt) {
  evt.preventDefault(); // Отменяем стандартное поведение отправки формы

  // Получаем значения полей
  const nameValue = nameInput.value;
  const descriptionValue = jobInput.value;

  // Вставьте новые значения с помощью textContent
  profileTitle.textContent = nameValue;
  profileDescription.textContent = descriptionValue;

  // Сброс значений полей формы после отправки
  nameInput.value = '';
  jobInput.value = '';

  // Закрываем модальное окно
  closeModal();
}

formEdit.addEventListener('submit', handleFormSubmit); 

// -------------------------------------------------------

// Элементы формы для добавления новой карточки
const formNewCard = document.querySelector('.popup_type_new-card');
const cardNameInput = formNewCard.querySelector('.popup__input_type_card-name');
const cardLinkInput = formNewCard.querySelector('.popup__input_type_url');

// Обработчик события отправки формы для добавления новой карточки
formNewCard.addEventListener('submit', function (evt) {
  evt.preventDefault(); // Отменяем стандартное поведение отправки формы

  // Получаем значения полей
  const cardName = cardNameInput.value;
  const cardLink = cardLinkInput.value;

  // Создаем новую карточку и добавляем ее в начало контейнера
  if (cardName && cardLink) {
    const newCardElement = createCard({ name: cardName, link: cardLink }, removeCard);
    const cardsContainer = document.querySelector('.places__list');
    cardsContainer.insertBefore(newCardElement, cardsContainer.firstChild);

    // Сброс значений полей формы после отправки
    cardNameInput.value = '';
    cardLinkInput.value = '';

    // Закрываем модальное окно
    closeModal();
  }
});

