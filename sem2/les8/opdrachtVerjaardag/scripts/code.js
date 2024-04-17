const setup = () => {
    let huidigeDate = new Date();
    let verjaardag = new Date(2005, 10, 8);

    let dagenVerschil = Math.floor((huidigeDate - verjaardag) / (1000*3600*24));
    console.log('aantal dagenl: ' + dagenVerschil);


}
window.addEventListener("load", setup);