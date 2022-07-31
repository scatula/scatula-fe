import { Entity } from "../Entity";
import mock from "../images/mock.svg";
import Points from "../images/Points.svg";

export class FileManager extends Entity {
  constructor(fileManagerTableConfig, fileData) {
    super();

    this.fileManagerTableConfig = fileManagerTableConfig;
    this.entity.classList.add("file-manager");
    this.entity.appendChild(
      new TableHeader(fileManagerTableConfig).getEntity()
    );

    this.fileData = fileData;
    this.renderTableData();
  }

  renderTableData() {
    this.fileData.forEach(
      ({ fileType, originalName, updatedAt, size, member }) => {
        const item = new TableData(
          originalName,
          fileType,
          updatedAt,
          size,
          member
        );

        this.entity.appendChild(item.getEntity());
      }
    );
  }
}

export class TableHeader extends Entity {
  constructor(fileManagerTableConfig) {
    super();

    this.fileManagerTableConfig = fileManagerTableConfig;
    this.entity.classList.add("file-manager-header");

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
  constructor(originalName, type, updatedAt, size, members, moreInfo) {
    super();
    this.entity.classList.add("file-manager-item");
    this.entity.addEventListener("click", () => {
      console.log("CLICK");
    });

    this.originalName = originalName;
    this.type = type;
    this.updatedAt = updatedAt;
    this.size = size;
    this.members = members;
    this.moreInfo = moreInfo;

    this.renderCell();
  }

  getFileDate() {
    const today = new Date();

    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const incomingDate = new Date(this.updatedAt);

    let resultString;

    const isToday =
      today.getDate() - incomingDate.getDate() === 0 &&
      today.getMonth() === incomingDate.getMonth() &&
      today.getFullYear() === incomingDate.getFullYear();
    const isYesterday =
      today.getDate() - incomingDate.getDate() === 1 &&
      today.getMonth() === incomingDate.getMonth() &&
      today.getFullYear() === incomingDate.getFullYear();

    if (isYesterday) {
      resultString = "yesterday";
    } else if (isToday) {
      resultString = "today";
    } else {
      resultString = `${incomingDate.getDate()} ${
        monthNames[incomingDate.getMonth()]
      } ${
        today.getFullYear() !== incomingDate.getFullYear()
          ? incomingDate.getFullYear()
          : ""
      }`;
    }

    return resultString;
  }

  renderCell() {
    const name = document.createElement("div");
    name.classList.add("name-cell");
    const nameSplit = this.originalName.split(".");
    const nameSlice = nameSplit.slice(0, -1);
    const nameJoin = nameSlice.join(".");

    name.innerHTML = `
    <img src='${mock}' class="svg-icon-table"/>
    <p>${nameJoin}</p>
  `;
    const type = document.createElement("div");
    type.classList.add("file-type-cell");

    type.innerHTML = `.${nameSplit[nameSplit.length - 1]}`;

    const uploaded = document.createElement("div");
    uploaded.classList.add("uploaded-cell");
    uploaded.innerHTML = this.getFileDate(this.updatedAt);

    const size = document.createElement("div");
    size.classList.add("size-cell");
    if (this.size < 1000) {
      size.innerHTML = `${this.size} B`;
    } else if (this.size >= 1000 && this.size < 1000000) {
      let getSize = this.size / 1000;
      let getSizeMB = Math.round(getSize);
      size.innerHTML = `${getSizeMB} KB`;
    } else if (this.size >= 1000000 && this.size < 1000000000) {
      let getSize = this.size / 1000000;
      let getSizeMB = Math.round(getSize);
      size.innerHTML = `${getSizeMB} MB`;
    } else if (this.size >= 1000000000 && this.size < 1000000000000) {
      let getSize = this.size / 1000000000;
      let getSizeMB = Math.round(getSize);
      size.innerHTML = `${getSizeMB} GB`;
    }

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
