const setup = () => {
    let familieLeden = ['Koen','Jef','Bea','Furby','Bob'];
    console.log(familieLeden.length);
    console.log(familieLeden[0]);
    console.log(familieLeden[2]);
    console.log(familieLeden[4]);

    let nieuweNaam = window.prompt("Geef een extra naam:");
    const voegNaamToe = (familieLeden, nieuweNaam) => {
        familieLeden.push(nieuweNaam);
        console.log(familieLeden);
    }

    let familieString = familieLeden.join(', ');
    console.log(familieString);
}
window.addEventListener("load", setup);



