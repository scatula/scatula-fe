import { Entity } from "../Entity";
import { Button } from "./Button";

export class Menu extends Entity {
  constructor(menuConfig) {
    super();
    this.entity.classList.add("menu");
    this.menuConfig = menuConfig;
    this.Button = Button;
    this.horizontalLine = document.createElement("div");
    this.horizontalLine.classList.add("menu-line");
    this.horizontalLine2 = document.createElement("div");
    this.horizontalLine2.classList.add("menu-line");

    this.fillMenu();
  }

  fillMenu() {
    this.menuConfig.forEach((menuItem, index) => {
      const { icon, type, text } = menuItem;
      this.entity.appendChild(new this.Button(icon, text, type).getEntity());
      if (index === 4) {
        this.entity.appendChild(this.horizontalLine);
      } else if (index === 8) {
        this.entity.appendChild(this.horizontalLine2);
      }
    });
  }
}
