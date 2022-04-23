/** @format */

import { UI } from "./UI.js";
import { Theme } from "./Theme.js";
import { Task } from "./Task.js";

class Main extends UI {
	init() {
		this.task = new Task();
		this.theme = new Theme();
		this.task.init();
		this.#sortTask();
		this.theme.init();
	}

	#sortTask() {
		this.sortButtons = this.getElements(this.UiSelectors.sortButtons);

		this.sortButtons.forEach((button) => {
			button.addEventListener("click", () => {
				this.sortButtons.forEach((button) => {
					button.classList.remove("sort__button--active");
				});
				button.classList.add("sort__button--active");

				this.tasks = this.getElements(this.UiSelectors.tasks);
				this.tasksCompleted = this.getElements(this.UiSelectors.completedTask);

				if (this.sortButtons[0].classList.contains("sort__button--active")) {
					this.tasks.forEach((task) => {
						task.style.display = "flex";
					});
				} else if (
					this.sortButtons[1].classList.contains("sort__button--active")
				) {
					this.tasks.forEach((task) => {
						task.style.display = "flex";
					});
					this.tasksCompleted.forEach((task) => {
						task.parentNode.style.display = "none";
					});
				} else if (
					this.sortButtons[2].classList.contains("sort__button--active")
				) {
					this.tasks.forEach((task) => {
						task.style.display = "none";
					});

					this.tasksCompleted.forEach((task) => {
						task.parentNode.style.display = "flex";
					});
				}
			});
		});

		this.getElement(this.UiSelectors.taskForm).addEventListener(
			"submit",
			() => {
				this.sortButtons.forEach((button) => {
					button.classList.remove("sort__button--active");
					this.sortButtons[0].classList.add("sort__button--active");
				});

				this.tasks = this.getElements(this.UiSelectors.tasks);
				this.tasks.forEach((task) => {
					task.style.display = "flex";
				});
			}
		);
	}
}

window.onload = () => {
	const main = new Main();
	main.init();
};
