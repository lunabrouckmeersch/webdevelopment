const setup = () => {
    let btnSpaties=document.getElementById("btnSpaties");
    btnSpaties.addEventListener("click", spatiesConsole);
    btnSpaties.addEventListener("click", maakMetSpaties);
}

const spatiesConsole = () => {
    let tekst = document.getElementById("inputVeld").value.replaceAll(' ', '');
    let uitvoer = "";
    for (let i = 0; i < tekst.length; i++) {
        uitvoer += tekst.charAt(i) + " ";
    }
    console.log(uitvoer);
}

const maakMetSpaties = (inputText) => {
    let result= "";
    for (let i = 0; i < inputText.length; i++) {
        result += inputText.charAt(i) + " ";
    }
    return result;
}
window.addEventListener("load", setup);