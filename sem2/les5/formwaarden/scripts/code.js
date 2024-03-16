const setup = () => {
    const btnResultaat = document.getElementById("btnResultaat");
    btnResultaat.addEventListener("click", toonResultaat);
}

const toonResultaat = () => {
    const isRoker = document.getElementById("cbRoker");
    const moedertaal = document.querySelector('input[name="moedertaal"]:checked');
    const buurland = document.getElementById("listBuurland");
    const bestelling = document.getElementById("listBestelling");

    if (isRoker.checked){
        console.log("is een roker");
    } else {
        console.log("is geen roker");
    }

    console.log("moedertaal is " + moedertaal.value);
    console.log("favoriete buurland is " + buurland.value);

    let bestellingOptions = bestelling.options;
    let tekst = "";
    for (let i = 0; i < bestellingOptions.length; i++) {
        if (bestellingOptions[i].selected){
            tekst += bestellingOptions[i].text + " ";
        }
    }
    console.log("bestelling bestaat uit " + tekst)
}
window.addEventListener("load", setup);