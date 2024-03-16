const setup = () => {
    let zin = "Gisteren zat de jongen op de stoep en at de helft van de appel";
    zin.trim();
    deNaarHet(zin);
}

const deNaarHet = (zin) => {
    let woorden = zin.split(" ");
    for (let i = 0; i < woorden.length; i++) {
        if (woorden[i] === "de"){
            woorden[i] = "het";
        }
        else if (woorden[i] === "De"){
            woorden[i] = "Het";
        }
    }
    console.log(woorden.join(" "));
}
window.addEventListener("load", setup);