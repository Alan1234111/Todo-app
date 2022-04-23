/** @format */

import { UI } from "./UI.js";

export class Task extends UI {
  init() {
    this.#addTask();
    this.#updateItems();
    this.getElement(this.UiSelectors.clearTask).addEventListener(
      "click",
      this.#clearSelectedTask.bind(this)
    );
    Sortable.create(this.getElement(this.UiSelectors.taskContainer));
  }

  #addTask() {
    this.taskForm = this.getElement(this.UiSelectors.taskForm);
    this.inputTask = this.getElement(this.UiSelectors.inputTask);
    this.taskContainer = this.getElement(this.UiSelectors.taskContainer);

    this.taskForm.addEventListener("submit", (e) => {
      e.preventDefault();
      if (this.inputTask.value === "") {
        return;
      }
      const li = document.createElement("li");
      this.taskContainer.appendChild(li);
      li.classList.add("tasks__list-task");
      li.setAttribute("draggable", "true");

      const status = document.createElement("button");
      const text = document.createElement("p");
      const deleteBtn = document.createElement("button");

      li.appendChild(status);
      status.classList.add("tasks__list-task-circle");
      status.classList.add("circle");

      li.appendChild(text);
      text.classList.add("tasks__list-task-text");
      text.textContent = this.inputTask.value;

      li.appendChild(deleteBtn);
      deleteBtn.classList.add("tasks__list-task-delete");

      let numberOfTask = this.getElements(this.UiSelectors.tasks).length;

      this.inputTask.value = "";

      this.#deleteTask(deleteBtn, numberOfTask);
      this.#updateItems();
      this.#setCompletedTask(text, status);
    });
  }

  #deleteTask(btn) {
    btn.addEventListener("click", (e) => {
      e.target.parentNode.remove();
      this.#updateItems();
    });
  }

  #setCompletedTask(text, status) {
    text.addEventListener("click", (e) => {
      e.target.classList.toggle("tasks__list-task-text--completed");

      status.classList.toggle("tasks__list-task-circle--completed");
      this.#updateItems();
    });

    status.addEventListener("click", (e) => {
      e.target.classList.toggle("tasks__list-task-circle--completed");

      text.classList.toggle("tasks__list-task-text--completed");
      this.#updateItems();
    });
  }

  #clearSelectedTask() {
    this.completedTask = this.getElements(this.UiSelectors.completedTask);

    this.completedTask.forEach((task) => {
      task.parentNode.remove();
    });
    this.#updateItems();
  }

  #updateItems() {
    this.itemsLeft = this.getElement(this.UiSelectors.itemsLeft);
    this.numberItemsLeft =
      document.getElementsByClassName("tasks__list-task").length;
    this.itemsCompleted = this.getElements(
      this.UiSelectors.completedTask
    ).length;

    this.itemsLeft.textContent = this.numberItemsLeft - this.itemsCompleted;
  }
}
