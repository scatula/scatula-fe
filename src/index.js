// import { data } from "./mock/mock";
import { App } from "./App";
import { Menu } from "./entities/Menu";
import { FileManager } from "./entities/FileManager";
import { Header } from "./entities/Header";

//1 Get app
const app = new App(FileManager, Menu, Header);
app.renderApp();
