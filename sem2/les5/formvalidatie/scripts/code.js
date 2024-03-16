const setup = () => {
    let btnValideer= document.getElementById("btnValideer");
    btnValideer.addEventListener("click", valideer);
}

const valideer = () => {
    valideerVoornaam();
    valideerAchternaam();
    valideerDatum();
    valideerEmail();
    valideerKinderen();
    if(valideerVoornaam() && valideerAchternaam() && valideerDatum() && valideerEmail() && valideerKinderen())
    {
        window.alert("proficiat!")
    }
}

const valideerVoornaam = () => {
    let txtVoornaam = document.getElementById("txtVoornaam");
    let errVoornaam = document.getElementById("errVoornaam");
    let voornaam = txtVoornaam.value.trim();
    if (voornaam.length > 30) {
        reportError(txtVoornaam, errVoornaam, "max. 30 karakters");

    } else {
        clearError(txtVoornaam, errVoornaam);
        return true;
    }
}

const valideerAchternaam = () => {
    let txtAchternaam = document.getElementById("txtAchternaam");
    let errAchternaam = document.getElementById("errAchternaam");
    let achternaam = txtAchternaam.value.trim();
    if (achternaam === "") {
        reportError(txtAchternaam, errAchternaam, "verplicht veld");
    } else if (achternaam.length > 50) {
        reportError(txtAchternaam, errAchternaam, "max. 50 karakters");

    } else {
        clearError(txtAchternaam, errAchternaam);
        return true;
    }
}

const valideerDatum = () => {
    let txtDatum = document.getElementById("txtDatum");
    let errDatum = document.getElementById("errDatum");
    let datum = txtDatum.value.trim();
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (datum === "") {
        reportError(txtDatum, errDatum, "verplicht veld");
    } else if (!dateRegex.test(txtDatum.value)) {
        reportError(txtDatum, errDatum, "formaat is niet jjjj-mm-dd");
    } else {
        clearError(txtDatum, errDatum);
        return true;
    }
}

const valideerEmail = () => {
    let txtEmail = document.getElementById("txtEmail");
    let errEmail = document.getElementById("errEmail");
    let email = txtEmail.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        reportError(txtEmail, errEmail, "verplicht veld");
    } else if (!emailRegex.test(txtEmail.value)){
        reportError(txtEmail, errEmail, "geen geldige email adres");
    } else {
        clearError(txtEmail, errEmail);
        return true;
    }
}

const valideerKinderen = () => {
    let txtKinderen = document.getElementById("txtKinderen");
    let errKinderen = document.getElementById("errKinderen");
    let kinderen = parseInt(txtKinderen.value.trim());
    if (kinderen < 0 || isNaN(kinderen)) {
        reportError(txtKinderen, errKinderen, "is geen positief getal");
    } else if (kinderen > 99) {
        reportError(txtKinderen, errKinderen, "is te vruchtbaar");
    } else {
        clearError(txtKinderen, errKinderen);
        return true;
    }
}


const reportError = (element, errElement, message) => {
    element.className="invalid";
    errElement.innerHTML = message;
}

const clearError = (element, errElement) => {
    element.className="";
    errElement.innerHTML = "";
}

window.addEventListener("load", setup);