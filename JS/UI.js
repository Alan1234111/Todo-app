/** @format */

export class UI {
  UiSelectors = {
    root: ":root",
    buttonTheme: ".header__information-theme",
    inputTask: ".header__section-add-task",
    tasks: ".tasks__list-task",
    taskContainer: ".tasks__list",
    taskForm: ".header__section-form",
    taskText: "p.tasks__list-task-text",
    taskCircle: ".tasks__list-task-circle",
    clearTask: ".tasks__number-button",
    completedTask: ".tasks__list-task-circle--completed",
    itemsLeft: "span.tasks__number-quantity",
    sortButtons: ".sort__button",
  };

  getElement(selector) {
    return document.querySelector(selector);
  }

  getElements(selector) {
    return document.querySelectorAll(selector);
  }
}
