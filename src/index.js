// import { data } from "./mock/mock";
import { App } from "./App";
import { Menu } from "./entities/Menu";
import { FileManager } from "./entities/FileManager";

//1 Get app
const app = new App(FileManager, Menu);
app.renderApp();
