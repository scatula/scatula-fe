import { data } from "./mock/mock";

console.log("hello");

const div = document.createElement("div");

div.innerHTML = "<h1> FREE FILE SHARING </h1>";
div.style.textAlign = "center";
div.style.fontWeight = "bold";
div.style.color = "white";

console.log(data);

document.body.appendChild(div);
