/** @format */

import { UI } from "./UI.js";

export class Theme extends UI {
  init() {
    this.btnTheme = this.getElement(this.UiSelectors.buttonTheme);
    this.root = document.documentElement;
    let theme = localStorage.getItem("theme") || "dark";

    let dark = () => {
      this.btnTheme.src = "images/icon-sun.svg";

      this.root.style.setProperty(
        "--mobile-image",
        `url("/images/bg-mobile-dark.jpg")`
      );
      this.root.style.setProperty(
        "--desktop-image",
        `url("/images/bg-desktop-dark.jpg")`
      );

      this.root.style.setProperty("--task-background", "hsl(235, 24%, 19%)");
      this.root.style.setProperty("--font-input-color", "hsl(221, 46%, 83%)");
      this.root.style.setProperty(
        "--font-input-color-hover",
        "hsl(241, 66%, 93%)"
      );
      this.root.style.setProperty("--main-body-color", "hsl(240, 19%, 11%)");
      this.root.style.setProperty("--font-color-hover", "hsl(0, 0%, 98%)");
    };

    let light = () => {
      this.btnTheme.src = "images/icon-moon.svg";

      this.root.style.setProperty(
        "--mobile-image",
        `url("/images/bg-mobile-light.jpg")`
      );
      this.root.style.setProperty(
        "--desktop-image",
        `url("/images/bg-desktop-light.jpg")`
      );

      this.root.style.setProperty("--task-background", "hsl(0, 0%, 98%)");
      this.root.style.setProperty("--font-input-color", "hsl(235, 19%, 35%)");
      this.root.style.setProperty(
        "--font-input-color-hover",
        "hsl(236, 9%, 61%)"
      );
      this.root.style.setProperty("--main-body-color", "hsl(236, 33%, 92%)");
      this.root.style.setProperty("--font-color-hover", "hsl(236, 9%, 61%)");
    };

    if (theme === "light") {
      light();
    } else {
      dark();
    }

    this.btnTheme.addEventListener("click", () => {
      if (theme === "light") {
        theme = "dark";
        dark();
      } else {
        theme = "light";
        light();
      }

      localStorage.setItem("theme", theme);
    });
  }
}
