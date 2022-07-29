/* eslint-disable no-undef */
import { Entity } from "../Entity";

// import addIcon from "../images/add.svg";
import drive from "../images/MyDrive.svg";
import recent from "../images/Recent.svg";
import starred from "../images/Starred.svg";
import music from "../images/Music.svg";
import img from "../images/Images.svg";
import trash from "../images/Trash.svg";
import video from "../images/Video.svg";
import doc from "../images/Documents.svg";

export class Menu extends Entity {
  constructor() {
    super();
    this.entity.classList.add("menu");

    this.fillMenu();
  }

  pickFile(event) {
    const formData = new FormData();
    console.log(event);
    formData.append("file", event.target.files[0]);

    fetch(`${process.env.BACKEND_URL}/files/upload`, {
      method: "POST",
      body: formData,
    }).then(() => {
      // тут мы будем обновлять список файлов
    });
  }

  fillMenu() {
    this.addButton = document.createElement("div");
    this.addButton.classList.add("button-filled");
    this.addButtonLabel = document.createElement("label");
    this.addButtonLabel.setAttribute("for", "file-upload");
    this.addButtonLabel.innerHTML = "Add File";
    this.addButton.appendChild(this.addButtonLabel);
    this.addButton.innerHTML =
      "<input type='file' class='input' id ='file-upload'>";

    this.addButton.addEventListener("click", () => {
      console.log("CLICK");
    });

    this.driveButton = document.createElement("div");
    this.driveButton.classList.add("button-outlined");
    this.driveButton.innerHTML = `<img src=${drive} class='svg-icon-add-button'/> <div> My Drive </div>`;

    this.recentButton = document.createElement("div");
    this.recentButton.classList.add("button-outlined");
    this.recentButton.innerHTML = `<img src=${recent} class='svg-icon-add-button'/> <div> Recent </div>`;

    this.starredButton = document.createElement("div");
    this.starredButton.classList.add("button-outlined");
    this.starredButton.innerHTML = `<img src=${starred} class='svg-icon-add-button'/> <div> Starred </div>`;

    this.trashButton = document.createElement("div");
    this.trashButton.classList.add("button-outlined");
    this.trashButton.innerHTML = `<img src=${trash} class='svg-icon-add-button'/> <div> Trash </div>`;

    this.horizontalLine1 = document.createElement("div");
    this.horizontalLine1.classList.add("menu-line");

    this.documentsButton = document.createElement("div");
    this.documentsButton.classList.add("button-outlined");
    this.documentsButton.innerHTML = `<img src=${doc} class='svg-icon-add-button'/> <div> Documents </div>`;

    this.imagesButton = document.createElement("div");
    this.imagesButton.classList.add("button-outlined");
    this.imagesButton.innerHTML = `<img src=${img} class='svg-icon-add-button'/> <div> Images </div>`;

    this.videoButton = document.createElement("div");
    this.videoButton.classList.add("button-outlined");
    this.videoButton.innerHTML = `<img src=${video} class='svg-icon-add-button'/> <div> Video </div>`;

    this.musicButton = document.createElement("div");
    this.musicButton.classList.add("button-outlined");
    this.musicButton.innerHTML = `<img src=${music} class='svg-icon-add-button'/> <div> Music </div>`;

    this.horizontalLine2 = document.createElement("div");
    this.horizontalLine2.classList.add("menu-line");

    this.addButton.addEventListener("change", this.pickFile);

    this.entity.appendChild(this.addButton);
    this.entity.appendChild(this.driveButton);
    this.entity.appendChild(this.recentButton);
    this.entity.appendChild(this.starredButton);
    this.entity.appendChild(this.trashButton);
    this.entity.appendChild(this.horizontalLine1);
    this.entity.appendChild(this.documentsButton);
    this.entity.appendChild(this.imagesButton);
    this.entity.appendChild(this.videoButton);
    this.entity.appendChild(this.musicButton);
    this.entity.appendChild(this.horizontalLine2);
  }
}
