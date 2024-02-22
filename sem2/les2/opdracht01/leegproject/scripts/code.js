const setup = () => {
    window.alert("Dit is een mededeling");
    console.log(window.confirm("weet u het zeker?"));
    console.log(window.prompt("wat is uw naam", "onbekend"));
}
window.addEventListener("load", setup);