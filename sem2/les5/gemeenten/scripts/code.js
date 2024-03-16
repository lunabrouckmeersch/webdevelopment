const setup = () => {
    let gemeentenList = document.getElementById('gemeentenList');
    let gemeenten = [];
    let stop = false;

    do {
        let opgegevenGemeenten = window.prompt("Geef gemeente op", "onbekend");
        if (opgegevenGemeenten === 'stop' || opgegevenGemeenten === 'Stop'){
            stop = true;
        } else {
            gemeenten.push(opgegevenGemeenten);
        }
    } while (stop === false)
    gemeenten.sort(compare);

    for (let i = 0; i < gemeenten.length; i++) {
        const optie = document.createElement("option");
        optie.text = gemeenten[i];
        gemeentenList.add(optie);
    }
}

const compare = (a, b) => {
    return a.localeCompare(b);
}

window.addEventListener("load", setup);