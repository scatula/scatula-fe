import { Entity } from "../Entity";
export class Button extends Entity {
  constructor(icon, text, type) {
    super();
    this.icon = icon;
    this.text = text;
    this.type = type;
    this.entity.classList.add("menu-button");

    if (this.type === "Filled") {
      this.entity.classList.add("button-outlined");
    }

    this.entity.innerHTML = `
      <img src="${this.icon}" class="svg-icon"/>
      <div>${this.text}</div>
    `;
  }
}
