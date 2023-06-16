class Card {
  constructor (userId, cardData, cardTemplate, handleCardClick, openPopupDelete, handleLikeClick) {
    this._userId = userId; //id пользователя на странице
    this._cardData = cardData; //данные карточки
    this._cardTemplate = cardTemplate; //тег template
    this._handleCardClick = handleCardClick; // коллбек-функция для открытия попапа большой картинки
    this._openPopupDelete = openPopupDelete; //метод для открытия попапа перед удалением карточки
    this._handleLikeClick = handleLikeClick; //коллбек-функция, которая исполняется при нажатии на ЛАЙК

    this._cardElement = this._cardTemplate.content.querySelector('.card').cloneNode(true);
    this._buttonLike = this._cardElement.querySelector('.card__like');
    this._likes = this._cardData.likes; //массив лайков
    this._cardLikeCount = this._cardElement.querySelector('.card__like-number');




    this.handleDelete = this.handleDelete.bind(this);

  }

  //Метод для передачи нужных названий и ссылки для создания карточки
  _generateCardElement () {
    this._cardElement.querySelector('.card__text').textContent = this._cardData.name;
    this._cardImage = this._cardElement.querySelector('.card__image');
    this._cardImage.src = this._cardData.link;
    this._cardImage.alt = this._cardData.name;
  }

  //Метод удаления карточки
  handleDelete () {
    this._cardElement.remove();
  }

  //Метод лайка карточки
  // _handleLike () {
  //   this._buttonLike.classList.toggle('card__like_active');
  // }

  // setLikeNumber(card) {
  //   const likeNumber = this._cardElement.querySelector('.card__like-number');
  //   likeNumber.textContent = card.likes.length;

  // }

  //Метод для определения есть ли мой лайк на карточке
  isLiked() {
    console.log(this._likes)
    return this._likes.some((like) => {
      return like._id === this._userId})

    // const likesArray = Object.values(this._cardData.likes)
    //   likesArray.forEach((item) =>{
    //     if (Object.values(item).includes(this._userId)) {
    //       this._handleLike();
    //     }
    //    })
  }

  //в этом методе собирается функционал с _handleLike и setLikeNumber
  _updateLikesView() {
    // console.log(this._likes)
    this._cardLikeCount.textContent = this._likes.length;
    this._buttonLike.classList.toggle('card__like_active', this.isLiked());
  } 

  updateLikes(likes) {
    this._likes = likes;
    this._updateLikesView();
  }

  //Всех слушатели, которые есть у карточки
  _setListeners () {
    const buttonDelete = this._cardElement.querySelector('.card__delete');

    if (this._userId == this._cardData.owner._id) {
      console.log('мой пост')
      buttonDelete.addEventListener('click', () => {
        this._openPopupDelete()});
    } else {
      buttonDelete.remove();
    }

    this._buttonLike.addEventListener('click', () => {
      this._handleLikeClick();
      // this._handleLike();
      // this._handleLike(this._buttonLike);

      // this.setLikeNumber(this._cardData);
    });
    
    //Слушатель нажатия на картинку и открытия зуум попапа
    this._cardImage.addEventListener('click', () => {this._handleCardClick(this._cardData);});

  }

  //метод для возврата карточки
  createCardElement () {
    this._generateCardElement();
    this._setListeners();
    // this.setLikeNumber(this._cardData);
    // this.isLiked();
    this.updateLikes(this._likes);
    return this._cardElement;
  }

}

export default Card;

