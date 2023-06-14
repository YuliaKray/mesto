class Card {
  constructor (cardData, cardTemplate, handleCardClick, handleLikeClick, openPopupDelete) {
    this._cardData = cardData; //данные карточки
    this._cardTemplate = cardTemplate; //тег template
    this._handleCardClick = handleCardClick; // коллбек-функция для открытия попапа большой картинки
    this._handleLikeClick = handleLikeClick //коллбек-функция, которая исполняется при нажатии на ЛАЙК
    this._openPopupDelete = openPopupDelete; //метод для открытия попапа перед удалением карточки
  
    this.handleDelete = this.handleDelete.bind(this);

  }

  //Метод для передачи нужных названий и ссылки для создания карточки
  _generateCardElement () {
    this._cardElement = this._cardTemplate.content.querySelector('.card').cloneNode(true);
    this._cardElement.querySelector('.card__text').textContent = this._cardData.name;
    this._cardImage = this._cardElement.querySelector('.card__image');
    this._cardImage.src = this._cardData.link;
    this._cardImage.alt = this._cardData.name;
    // this._handleLikeClick;
    // this._handleDelete = this._handleDelete.bind(this);
  }

  //Метод удаления карточки
  handleDelete () {
    this._cardElement.remove();
  }

  //Метод лайка карточки
  _handleLike (button) {
    button.classList.toggle('card__like_active');
  }

  //Всех слушатели, которые есть у карточки
  _setListeners () {
    const buttonDelete = this._cardElement.querySelector('.card__delete');
    const buttonLike = this._cardElement.querySelector('.card__like');

    // buttonDelete.addEventListener('click', this._handleDelete);
    buttonDelete.addEventListener('click', () => {this._openPopupDelete()});
    buttonLike.addEventListener('click', () => {this._handleLike(buttonLike)});
    
    //Слушатель нажатия на картинку и открытия зуум попапа
    this._cardImage.addEventListener('click', () => {this._handleCardClick(this._cardData);});

  }

  //метод для возврата карточки
  createCardElement () {
    this._generateCardElement();
    this._setListeners();
    return this._cardElement;
  }

}

export default Card;

