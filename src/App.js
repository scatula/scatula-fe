import { fileManagerTableConfig } from "./config/fileManagerTableConfig";
import { menuConfig } from "./config/menuConfig";

export class App {
  constructor(FileManagerClass, MenuClass, HeaderClass) {
    this.FileManager = FileManagerClass;
    this.initiateApp(MenuClass, HeaderClass);
  }

  getFiles() {
    return fetch("http://localhost:3000/files");
  }

  initiateApp(MenuClass, HeaderClass) {
    this.menu = new MenuClass(menuConfig);
    this.header = new HeaderClass();

    this.rootDiv = document.createElement("div");
    this.mainDiv = document.createElement("div");

    this.mainDiv.classList.add("main");
    this.rootDiv.classList.add("root");
  }

  renderRootDiv(fileData) {
    this.fileManager = new this.FileManager(fileManagerTableConfig, fileData);
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

  async renderApp() {
    this.getFiles()
      .then((response) => {
        console.log({ response });
        return response.json();
      })
      .then((res) => {
        console.log({ res });
        this.files = res;
        this.renderRootDiv(this.files);
        document.body.removeChild(loaderWrapper);
      })
      .catch((e) => console.log(e));

    const loaderWrapper = document.createElement("div");
    loaderWrapper.classList.add("loader-wrapper");

    const loader = document.createElement("div");
    loader.classList.add("loader");

    loaderWrapper.appendChild(loader);
    document.body.appendChild(loaderWrapper);
  }
}
