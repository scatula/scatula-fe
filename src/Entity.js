export class Entity {
  constructor(type = "div") {
    this.entity = document.createElement(type);
  }

  getEntity() {
    return this.entity;
  }
}
