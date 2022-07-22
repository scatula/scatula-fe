import { Entity } from "../Entity";

export class Header extends Entity {
  constructor(icon, type) {
    super();
    this.icon = icon;
    this.type = type;
    this.entity.classList.add("header");

    if (this.type === "Search") {
      this.entity.classList.add("search-bar");
      this.entity.innerHTML = `
      <img src="${this.icon}" class="svg-icon-search"/>
      <div>${this.text}</div>
    `;
    }
  }
}
