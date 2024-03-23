const setup = () => {
    let nodeList = document.querySelectorAll("li");
    for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].classList.add("listitem");
    }

    let img = document.createElement("img");
    img.setAttribute("src", "./otter.jpg")
    document.body.appendChild(img);
}
window.addEventListener("load", setup);