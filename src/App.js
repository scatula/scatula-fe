import { fileManagerTableConfig } from "./config/fileManagerTableConfig";
import { menuConfig } from "./config/menuConfig";

export class App {
  constructor(FileManagerClass, MenuClass, HeaderClass) {
    this.initiateApp(FileManagerClass, MenuClass, HeaderClass);
  }

  initiateApp(FileManagerClass, MenuClass, HeaderClass) {
    this.fileManager = new FileManagerClass(fileManagerTableConfig);
    this.menu = new MenuClass(menuConfig);
    this.header = new HeaderClass();

    this.rootDiv = document.createElement("div");
    this.mainDiv = document.createElement("div");

    this.mainDiv.classList.add("main");
    this.rootDiv.classList.add("root");
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

  renderHeader() {
    this.rootDiv.appendChild(this.header.getEntity());
  }

  renderApp() {
    this.renderRootDiv();
  }
}
