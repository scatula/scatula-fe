import { renderTitle } from "./app";
import { initiateTable } from "./app";
import { tableConfig } from "./config/index";
// 1 Renders Title
renderTitle();

const mainTable = initiateTable(tableConfig);
document.body.appendChild(mainTable);

//2 Get data from server
// const localData = data;

//3 Render files and folders on screen
