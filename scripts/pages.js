import { data } from "./data.js";
const middleC = data.components.middlecontainer;

function changePage() {
    setTimeout(() => {
        middleC.innerHTML = "";
        middleC.style.opacity = "1";
        data.pageNumber++;
    }, 2000);
}

export { changePage };
