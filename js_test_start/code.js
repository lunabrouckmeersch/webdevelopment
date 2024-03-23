const setup = () => {
    let txtInput = document.getElementById("txtInput");
    let indexIndexOf = 0;
    let totaalIndex = 0;
    let keuze = document.getElementById("keuzeLijst");
 //   keuze.addEventListener("change", )
    let note = document.getElementById("note");
    let img = document.getElementById("img");
    let index = 0;

    for (let i = 0; i < keuze.length; i++) {
        index = keuze.selectedIndex;
    }
    if (index === 1) {
        note.innerText += "Hierboven, een kip met een ei";
        img.classList.remove("hidden");
        img.classList.add("img.with-egg");
    } else {
        note.innerText += "Hierboven, een kip zonder ei";
        img.className = "img";
    }


    while(note.indexOf(txtInput, indexIndexOf) !== -1){
        indexIndexOf = note.indexOf(txtInput, indexIndexOf) + 1;
        totaalIndex++;
    }
    note.innerText += `Letter ${txtInput} komt ${totaalIndex} keer voor in bovenstaande zin.`;
}
window.addEventListener("load", setup);