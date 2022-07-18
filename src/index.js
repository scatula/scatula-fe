// import { data } from "./mock/mock";
import { renderFile, renderFolder, renderTitle } from "./app";
import { initiateTable } from "./app";
import { tableConfig } from "./config/index";
// 1 Renders Title
renderTitle();

document.body.appendChild(initiateTable(tableConfig));

//2 Get data from server
// const localData = data;

//3 Render files and folders on screen
