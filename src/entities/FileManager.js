import { Entity } from "../Entity";

export class FileManager extends Entity {
  constructor(fileManagerTableConfig) {
    super();
    this.fileManagerTableConfig = fileManagerTableConfig;
    this.entity.classList.add("file-manager");
    this.entity.appendChild(
      new TableHeader(fileManagerTableConfig).getEntity()
    );
  }
}

export class TableHeader extends Entity {
  constructor(fileManagerTableConfig) {
    super();
    this.fileManagerTableConfig = fileManagerTableConfig;

    this.entity.classList.add(["file-manager-item"]);

    this.renderFileManagerTable();
  }

  renderFileManagerTable() {
    this.fileManagerTableConfig.forEach((fileManagerTableItem) => {
      const { text, id } = fileManagerTableItem;

      const headerItem = document.createElement("div");
      headerItem.innerHTML = text;
      this.entity.appendChild(headerItem);
    });
  }
}
