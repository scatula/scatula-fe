export const renderFolder = (item) => {
  const folderElement = document.createElement("div");
  folderElement.innerHTML = item.displayName;
  folderElement.classList.add("folder");
  document.body.appendChild(folderElement);
};

export const renderFile = (item) => {
  const fileElement = document.createElement("div");
  fileElement.innerHTML = item.displayName;
  fileElement.classList.add("file");
  document.body.appendChild(fileElement);
};

export const renderTitle = () => {
  const div = document.createElement("div");
  div.innerHTML = "<h1> K-BOX </h1>";
  // TODO: move css to css files
  div.style.textAlign = "center";
  div.style.fontWeight = "bold";
  div.style.color = "#4C566A";
  document.body.appendChild(div);
};

export const initiateTable = (config) => {
  let gridTemplate = "";
  const mainTableWrapper = document.createElement("div");
  mainTableWrapper.classList.add("listTable");
  const tableHeader = document.createElement("div");
  tableHeader.classList.add("listTableHeader");
  config.forEach((column) => {
    const headerItem = document.createElement("div");
    headerItem.classList.add("headerItem");
    headerItem.innerHTML = column.title;
    gridTemplate = gridTemplate + column.length + " ";
    tableHeader.appendChild(headerItem);
  });
  tableHeader.style.gridTemplateColumns = gridTemplate;
  mainTableWrapper.appendChild(tableHeader);

  return mainTableWrapper;
};
