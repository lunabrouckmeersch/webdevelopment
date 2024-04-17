const setup = () => {
    let student1 = {
        voornaam : "Luna",
        familienaam : "Brouckmeersch",
        geboorteDatum : new Date("2005-10-8"),
        adres : {
            straat : "Tarwelaan 47",
            postcode : "8500",
            gemeente : "Kortrijk"
        },
        heeftRijbewijs : true,
        familieleden : ["Nicolas" , "Tibo", "Lore", "Imani"],
        aantalHuisdieren : 2
    }

    let tekst = JSON.stringify(student1);
    console.log(tekst);
}
window.addEventListener("load", setup);