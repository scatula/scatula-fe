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
  div.innerHTML = "<h1> FREE FILE SHARING </h1>";
  div.style.textAlign = "center";
  div.style.fontWeight = "bold";
  div.style.color = "white";
  document.body.appendChild(div);
};
