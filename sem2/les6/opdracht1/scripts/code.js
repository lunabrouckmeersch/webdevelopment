const setup = () => {
    let pList = document.querySelectorAll("p");
    for (let i = 0; i < pList.length; i++) {
        pList[i].removeChild(pList[i].firstChild);
        pList[i].appendChild(document.createTextNode("Good Job!"));
    }


}
window.addEventListener("load", setup);