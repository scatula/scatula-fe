import addIcon from "../images/add.svg";
import drive from "../images/MyDrive.svg";
import recent from "../images/Recent.svg";
import starred from "../images/Starred.svg";
import music from "../images/Music.svg";
import img from "../images/Images.svg";
import trash from "../images/Trash.svg";
import video from "../images/Video.svg";
import doc from "../images/Documents.svg";

export const menuConfig = [
  {
    text: "Add new",
    type: "Filled",
    icon: addIcon,
  },
  {
    text: "My Drive",
    type: "Outlined",
    icon: drive,
  },
  {
    text: "Recent",
    type: "Outlined",
    icon: recent,
  },
  {
    text: "Starred",
    type: "Outlined",
    icon: starred,
  },
  {
    text: "Trash",
    type: "Outlined",
    icon: trash,
  },
  {
    text: "Documents",
    type: "Outlined",
    icon: doc,
  },
  {
    text: "Images",
    type: "Outlined",
    icon: img,
  },
  {
    text: "Video",
    type: "Outlined",
    icon: video,
  },
  {
    text: "Music",
    type: "Outlined",
    icon: music,
  },
];
