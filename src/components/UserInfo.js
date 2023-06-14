export default class UserInfo {
  constructor(nameSelector, aboutSelector) {
    this._name = document.querySelector(nameSelector);
    this._about = document.querySelector(aboutSelector);
  }

  //метод собирает значения div-элементов в объект
  getUserInfo() {
    const info = {
      name: this._name.textContent,
      about: this._about.textContent
    }
    return info;
  }

  //Метод вставляет в div-элементы значения из переданого объекта
  setUserInfo(info) {
    this._name.textContent = info.name;
    this._about.textContent = info.about;
  }
}