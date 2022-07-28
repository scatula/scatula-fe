import { Entity } from "../Entity";
import { data } from "../mock/mock";
import mock from "../images/mock.svg";
import Points from "../images/Points.svg";

export class FileManager extends Entity {
  constructor(fileManagerTableConfig) {
    super();

    this.fileManagerTableConfig = fileManagerTableConfig;
    this.entity.classList.add("file-manager");
    this.entity.appendChild(
      new TableHeader(fileManagerTableConfig).getEntity()
    );

    this.renderTableData();
  }

  renderTableData() {
    data.forEach(({ fileType, displayName, uploadTime, size, member }) => {
      const item = new TableData(
        displayName,
        fileType,
        uploadTime,
        size,
        member
      );

      this.entity.appendChild(item.getEntity());
    });
  }
}

export class TableHeader extends Entity {
  constructor(fileManagerTableConfig) {
    super();

    this.fileManagerTableConfig = fileManagerTableConfig;
    this.entity.classList.add("file-manager-item");

    this.renderFileManagerTable();
  }

  renderFileManagerTable() {
    this.fileManagerTableConfig.forEach((fileManagerTableItem) => {
      const { text } = fileManagerTableItem;

      const headerItem = document.createElement("div");
      headerItem.innerHTML = text;

      this.entity.appendChild(headerItem);
    });
  }
}

export class TableData extends Entity {
  constructor(name, type, uploaded, size, members, moreInfo) {
    super();
    this.entity.classList.add("file-manager-item");

    this.name = name;
    this.type = type;
    this.uploaded = uploaded;
    this.size = size;
    this.members = members;
    this.moreInfo = moreInfo;

    this.renderCell();
  }

  renderCell() {
    const name = document.createElement("div");
    name.classList.add("name-cell");
    name.innerHTML = `
    <img src='${mock}' class="svg-icon-table"/>
    <p>${this.name}</p>
  `;
    const type = document.createElement("div");
    type.classList.add("file-type-cell");
    type.innerHTML = this.type;

    const uploaded = document.createElement("div");
    uploaded.classList.add("uploaded-cell");
    uploaded.innerHTML = this.uploaded;

    const size = document.createElement("div");
    size.classList.add("size-cell");
    size.innerHTML = this.size;

    const members = document.createElement("div");
    members.classList.add("member-cell");
    members.innerHTML = this.members;

    const moreInfo = document.createElement("div");
    moreInfo.innerHTML = `<img src='${Points}' class="svg-icon-dots"/>`;

    this.entity.appendChild(name);
    this.entity.appendChild(type);
    this.entity.appendChild(uploaded);
    this.entity.appendChild(size);
    this.entity.appendChild(members);
    this.entity.appendChild(moreInfo);
  }
}
