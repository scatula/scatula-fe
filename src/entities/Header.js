import { Entity } from "../Entity";
import search from "../images/search.svg";
import close from "../images/close.svg";
import notifications from "../images/notifications.svg";
import help from "../images/help.svg";
import settings from "../images/settings.svg";

export class Header extends Entity {
  constructor() {
    super();
    this.entity.classList.add("header");

    this.renderHeader();
  }

  renderHeader() {
    const placeholderWrapper = document.createElement("div");
    const placeholderLogo = document.createElement("div");
    const title = document.createElement("h1");

    const searchBar = document.createElement("div");
    const searchBarMainIcon = document.createElement("div");
    const searchBarCloseIcon = document.createElement("div");
    const searchBarInput = document.createElement("input");

    const headerButtons = document.createElement("div");
    const userProfile = document.createElement("div");

    placeholderWrapper.classList.add("title");
    placeholderLogo.classList.add("logo-placeholder");
    title.classList.add("title");
    title.innerHTML = "Scatula";

    searchBar.classList.add("search-bar");
    searchBarMainIcon.classList.add("search-bar-main-icon");
    searchBarCloseIcon.classList.add("search-bar-close-icon");
    searchBarInput.classList.add("search-input");
    searchBarInput.setAttribute("placeholder", "Search");
    searchBarMainIcon.innerHTML = `<img src='${search}' />`;
    searchBarCloseIcon.innerHTML = `<img src='${close}' />`;

    headerButtons.classList.add("header-buttons");
    userProfile.classList.add("user-profile-header");
    headerButtons.innerHTML = `<img src='${notifications}' class='header-button-icon'/> <img src='${help}' class='header-button-icon'/><img src='${settings}' class='header-button-icon'/>`;

    placeholderWrapper.appendChild(placeholderLogo);
    placeholderWrapper.appendChild(title);
    this.entity.appendChild(placeholderWrapper);

    searchBar.appendChild(searchBarMainIcon);
    searchBar.appendChild(searchBarInput);
    searchBar.appendChild(searchBarCloseIcon);
    this.entity.appendChild(searchBar);

    headerButtons.appendChild(userProfile);
    this.entity.appendChild(headerButtons);
  }
}
