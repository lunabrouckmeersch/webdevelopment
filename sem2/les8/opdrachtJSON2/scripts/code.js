const setup = () => {
    let student2 = JSON.parse('{"voornaam":"Luna","familienaam":"Brouckmeersch","geboorteDatum":"2005-10-07T22:00:00.000Z","adres":{"straat":"Tarwelaan 47","postcode":"8500","gemeente":"Kortrijk"},"heeftRijbewijs":true,"familieleden":["Nicolas","Tibo","Lore","Imani"],"aantalHuisdieren":2}')
    console.log(student2.familieleden);
    console.log(student2.adres.gemeente);
}
window.addEventListener("load", setup);