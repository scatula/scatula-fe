import { data } from "./mock/mock";

// export const renderFolder = (item) => {
//   const folderElement = document.createElement("div");
//   folderElement.innerHTML = item.displayName;
//   folderElement.classList.add("folder");
//   document.body.appendChild(folderElement);
// };

// export const renderFile = (item) => {
//   const fileElement = document.createElement("div");
//   fileElement.innerHTML = item.displayName;
//   fileElement.classList.add("file");
//   document.body.appendChild(fileElement);
// };

export const renderTitle = () => {
  const mainTitle = document.createElement("div");
  mainTitle.innerHTML = "<h1> K-BOX </h1>";
  // TODO: move css to css files
  mainTitle.style.textAlign = "center";
  mainTitle.style.fontWeight = "bold";
  mainTitle.style.color = "#4C566A";
  document.body.appendChild(mainTitle);
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

  initiateTableData(mainTableWrapper, data, gridTemplate, config);

  return mainTableWrapper;
};

export const initiateTableData = (table, tableData, gridTemplate, config) => {
  const columnTitle = config.map((column) => column.title);

  tableData.forEach((data) => {
    const tableRow = document.createElement("div");
    tableRow.classList.add("listTableRow");
    tableRow.style.gridTemplateColumns = gridTemplate;

    columnTitle.forEach((column) => {
      if (column === "Name") {
        const rowItem = document.createElement("div");
        rowItem.innerText = data.displayName;
        tableRow.appendChild(rowItem);
      } else if (column === "File Type") {
        const rowItem = document.createElement("div");
        rowItem.innerText = data.fileType;
        tableRow.appendChild(rowItem);
      } else if (column === "Last Uploaded") {
        const rowItem = document.createElement("div");
        rowItem.innerText = data.lastUploaded;
        tableRow.appendChild(rowItem);
      } else if (column === "Size") {
        const rowItem = document.createElement("div");
        rowItem.innerText = data.size;
        tableRow.appendChild(rowItem);
      } else if (column === "Members") {
        const rowItem = document.createElement("div");
        rowItem.innerText = data.members;
        tableRow.appendChild(rowItem);
      } else if (column === "") {
        const rowItem = document.createElement("div");
        rowItem.innerText = "...";
        tableRow.appendChild(rowItem);
      }
    });

    table.appendChild(tableRow);
  });
};

export const renderRow = (config, rowType) => {
  let gridTemplate = "";
  const columnQuantity = config.length;

  const mainTableWrapper = document.createElement("div");
  mainTableWrapper.classList.add("listTable");
  const row = document.createElement("div");
};
