export default class Api {
  constructor(config){
    this._url = config.url;
    this._headers = config.headers; 
    this._authorization = config.headers.authorization; //token
  }

  //Метод загрузки информации о пользователе с сервера
  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      headers: {
        authorization: this._authorization,
        'Content-Type': 'application/json',
      }
    })
    .then(this._handleResponse)
  }

  //Метод загрузки карточек с сервера
  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      headers: {
        authorization: this._authorization,
        'Content-Type': 'application/json',
      }
    })
    .then(this._handleResponse)
    // .catch((err) => {console.log(err)})
  }

  //Редактирование профиля с запросом patch
  editProfile(userInfo) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: this._authorization,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: userInfo.name,
        about: userInfo.about
      })
    })
    .then(this._handleResponse)
  }

  //Обновление аватара пользователя
  setNewAvatar(info) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: this._authorization,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        avatar: info.avatar,
      })
    })
    // .then((res) => {  Я передаю json, а не ссылку, поэтому этот then  выдает ошибку
    //   if (res.url) {
    //   return res.json()
    // } else {
    //   return Promise.reject(`Ошибка: ${res.status}`)
    // }})
    .then(this._handleResponse)
  }

  //Добавление новой карточки
  generateCardElement(card) {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: {
        authorization: this._authorization,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: card.name,
        link: card.link
      })
    })
    .then(this._handleResponse)
  }


  _handleResponse(res) {
    if (res.ok) {
      return res.json()
    } else {
      return Promise.reject(`Ошибка: ${res.status}`)
    }
  }
}