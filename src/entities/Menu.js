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

  fillMenu() {
    this.menuConfig.forEach((menuItem, index) => {
      const { icon, type, text } = menuItem;
      this.entity.appendChild(new this.Button(icon, text, type).getEntity());
      if (index === 4 || index === 8) {
        const horizontalLine = document.createElement("div");
        horizontalLine.classList.add("menu-line");
        this.entity.appendChild(horizontalLine);
      }
    });
  }
}
