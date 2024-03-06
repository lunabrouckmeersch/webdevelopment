const setup = () => {
    let tekst = "De man van An geeft geen hand aan ambetante verwanten";
    let uitvoerIndexOf = document.getElementById("tot1");
    let uitvoerLastIndexOf = document.getElementById("tot2");
    let zoek = "an";
    let totaalIndex = 0;
    let totaalLast = 0;
    let indexIndexOf = 0;
    let indexLastIndex = tekst.length;

    while(tekst.indexOf(zoek, indexIndexOf) !== -1){
        indexIndexOf = tekst.indexOf(zoek, indexIndexOf) + 1;
        totaalIndex++;
    }
    uitvoerIndexOf.innerText = totaalIndex;

    while(tekst.lastIndexOf(zoek, indexLastIndex) !== -1){
        indexLastIndex = tekst.lastIndexOf(zoek, indexLastIndex) - 1;
        totaalLast++;
    }
    uitvoerLastIndexOf.innerText = totaalLast;
}
window.addEventListener("load", setup);