export default class UserInfo {
  constructor(nameSelector, jodSelector) {
    this._name = document.querySelector(nameSelector);
    this._job = document.querySelector(jodSelector);
  }

  //метод собирает значения div-элементов в объект
  getUserInfo() {
    const info = {
      name: this._name.textContent,
      jod: this._job.textContent
    }
    return info;
  }

  //Метод вставляет в div-элементы значения из переданого объекта
  setUserInfo(info) {
    this._name.textContent = info.name;
    this._job.textContent = info.job;
  }
}