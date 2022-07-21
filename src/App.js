import { menuConfig } from "./config/menuConfig";
export class App {
  constructor(FileManagerClass, MenuClass) {
    this.initiateApp(FileManagerClass, MenuClass);
  }

  initiateApp(FileManagerClass, MenuClass) {
    this.fileManager = new FileManagerClass();
    this.menu = new MenuClass(menuConfig);
    this.rootDiv = document.createElement("div");
    this.mainDiv = document.createElement("div");

    this.mainDiv.classList.add("main");
    this.rootDiv.classList.add("root");
  }

  renderHeader() {
    const header = document.createElement("div");
    const placeholderLogo = document.createElement("div");
    const title = document.createElement("h1");

    placeholderLogo.classList.add("logo-placeholder");
    title.innerHTML = "KBOX";
    title.classList.add("title");

    header.appendChild(placeholderLogo);
    header.appendChild(title);
    header.classList.add("header");

    this.rootDiv.appendChild(header);
  }

  renderRootDiv() {
    this.renderHeader();
    this.renderMainDiv();
    document.body.appendChild(this.rootDiv);
  }

  renderMainDiv() {
    this.rootDiv.appendChild(this.mainDiv);
    this.mainDiv.appendChild(this.menu.getEntity());
    this.mainDiv.appendChild(this.fileManager.getEntity());
  }

  renderApp() {
    this.renderRootDiv();
  }
}
