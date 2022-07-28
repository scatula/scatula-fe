import { Entity } from "../Entity";
import { Button } from "./Button";

export class Menu extends Entity {
  constructor(menuConfig) {
    super();
    this.entity.classList.add("menu");
    this.menuConfig = menuConfig;
    this.Button = Button;

    this.fillMenu();
  }

  pickFile(event) {
    const formData = new FormData();
    console.log(event);
    formData.append("file", event.target.files[0]);

    fetch("http://localhost:3000/files/upload", {
      method: "POST",
      body: formData,
    }).then(() => {
      // тут мы будем обновлять список файлов
    });
  }

  fillMenu() {
    this.addButton = document.createElement("input");
    this.addButton.setAttribute("type", "file");
    this.addButton.innerText = "HUj";
    this.menuConfig.forEach((menuItem, index) => {
      const { icon, type, text } = menuItem;
      const button = new this.Button(icon, text, type).getEntity();

      if (text === "Add new") {
        button.addEventListener("click", () => {
          console.log("CLICK");
        });
      }

      this.entity.appendChild(button);
      if (index === 4 || index === 8) {
        const horizontalLine = document.createElement("div");
        horizontalLine.classList.add("menu-line");
        this.entity.appendChild(horizontalLine);
      }
    });

    this.addButton.addEventListener("change", this.pickFile);

    this.entity.appendChild(this.addButton);
  }
}
