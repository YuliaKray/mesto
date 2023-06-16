export default class UserInfo {
  constructor(nameSelector, aboutSelector, avatarSelector) {
    this._name = document.querySelector(nameSelector);
    this._about = document.querySelector(aboutSelector);
    this._avatar = document.querySelector(avatarSelector);
  }

  //метод собирает значения div-элементов в объект
  getUserInfo() {
    const info = {
      name: this._name.textContent,
      about: this._about.textContent,
      avatar: this._avatar
    }
    return info;
  }

  //Метод вставляет в div-элементы значения из переданого объекта
  setUserInfo(info) {
    this._name.textContent = info.name;
    this._about.textContent = info.about;
    this._avatar.src = info.avatar;
  }
}