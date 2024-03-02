const setup = () => {
    const btnBereken = document.getElementById("btnBerekenen");
    btnBereken.addEventListener("click", herberekenen);
}

const herberekenen = () => {
    let prijs = document.getElementsByClassName("prijs");
    let aantal = document.getElementsByClassName("aantal");
    let btw = document.getElementsByClassName("btw");
    let subtotaal = document.getElementsByClassName("subtotaal");
    let totaal = document.getElementsByClassName("totaal");

    let eindTotaal = 0;
    let arrayPrijs = [];
    let arrayBtw = [];

    for (let i = 0; i < prijs.length; i++) {
        arrayPrijs[i] = parseInt(prijs[i].textContent, 10);
        arrayBtw[i] = parseInt(btw[i].textContent,10);

        let uitkomst = ((arrayPrijs[i] * aantal[i].value) * (arrayBtw[i] / 100 + 1));
        eindTotaal += uitkomst;
        subtotaal[i].innerHTML = uitkomst.toFixed(2) + " EUR";

    }
    totaal.innerHTML = eindTotaal.toFixed(2) + " EUR";
}

window.addEventListener("load", setup);