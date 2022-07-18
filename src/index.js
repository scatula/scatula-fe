import { data } from "./mock/mock";
import { renderFile, renderFolder, renderTitle } from "./app";

// 1 Renders Title
renderTitle();

//2 Get data from server
const localData = data;

//3 Render files and folders on screen
data.forEach((item) => {
  if (item.type === "folder") {
    renderFolder(item);
  } else {
    renderFile(item);
  }
});
