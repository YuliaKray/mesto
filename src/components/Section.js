export default class Section {
  constructor({ renderer }, sectionSelector) {
    this._renderer = renderer; //функция, которая отвечает за создание и отрисовку данных на странице
    this._section = document.querySelector(sectionSelector);
  }

  //Метод создает все элементы массива, который в него передается
  //Используется для изначального массива картинок
  renderItems(items) {
    items.forEach((card) => {
      this._renderer(card);
    })
  }

  //Метод, котрый принимает изначальную картинку и добовляет их
  addInitialCard(item) {
    this._section.append(item);
  }

  //Метод, который принимает новую картинку и добавляет ее в начало контейнера.
  addItem(item) {
    this._section.prepend(item);
  }
}