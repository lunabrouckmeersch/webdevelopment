let global = {
    AANTAL_HORIZONTAAL: 4,
    AANTAL_VERTICAAL: 3,
    AANTAL_KAARTEN: 6,
    IMG_PREFIX: "images/kaart",
    IMG_SUFFIX: ".png",
    KAARTEN: [],
    GEKOZEN: [],
    GEKOZEN_ID: []
}
const setup = () => {
    vulKaarten();

}

const vulKaarten = () => {
    for (let i = 0; i < global.AANTAL_KAARTEN; i++) {
        global.KAARTEN.push(global.IMG_PREFIX + (i+1) + global.IMG_SUFFIX);
        global.KAARTEN.push(global.IMG_PREFIX + (i+1) + global.IMG_SUFFIX);
    }
    global.KAARTEN.sort(() => 0.5 - Math.random());

    console.log(global.KAARTEN);
    vulGrid();
}
const vulGrid = (qualifiedName, value) => {
    const grid = document.querySelector("#speelveld");
    console.log(grid);
    for (let i = 0; i < global.AANTAL_KAARTEN * 2; i++) {
        const kaart = document.createElement("img");
        kaart.setAttribute("src", "images/achtergrond" + global.IMG_SUFFIX);
        kaart.setAttribute("data-id", i);
        kaart.addEventListener('click', draaiKaart);
        grid.appendChild(kaart);
    }
}

const draaiKaart = (event) => {
    let kaartId= event.target.getAttribute("data-id");
    global.GEKOZEN.push(global.KAARTEN[kaartId]);
    global.GEKOZEN_ID.push(kaartId);
    event.target.setAttribute("src", global.KAARTEN[kaartId]);
    if(global.GEKOZEN.length === 2) {
        setTimeout(checkMatch, 500);
    }
}

const checkMatch = () => {
    const cards = document.querySelectorAll("img");
    if (global.KAARTEN[global.GEKOZEN_ID[0]] === global.KAARTEN[global.GEKOZEN_ID[1]]) {
        cards[global.GEKOZEN_ID[0]].removeEventListener("click", draaiKaart);
        cards[global.GEKOZEN_ID[1]].removeEventListener("click", draaiKaart);
    } else {
        cards[global.GEKOZEN_ID[0]].setAttribute("src", "images/achtergrond" + global.IMG_SUFFIX);
        cards[global.GEKOZEN_ID[1]].setAttribute("src", "images/achtergrond" + global.IMG_SUFFIX);
    }
    global.GEKOZEN = [];
    global.GEKOZEN_ID = [];
};

window.addEventListener("load", setup);