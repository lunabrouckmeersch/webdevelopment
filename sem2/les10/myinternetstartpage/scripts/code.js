let global = {
    history: []
}

const setup = () => {
    let btn = document.getElementById("btnGo");
    btn.addEventListener("click", proces);
    if (localStorage.getItem("history") !== null) {
        restoreHistory();
    }
}

const proces = () => {
    //substringen om enkel het nodige uit te komen
    let input = document.getElementById("Zoekopdracht").value.toString();
    let command = input.substring(0,3);
    let prefix = command.substring(1,2);
    let zoek = input.substring(3);

    //controle op command
    if(command.startsWith("/") && command.charAt(2) === ' ') {
        if (prefix === "g") {
            const urlGoogle = "https://www.google.com/search?q=" + zoek;
            window.open(urlGoogle);
            createCard("Google", urlGoogle, zoek);
            historyAdd("Google", urlGoogle, zoek);
        } else if (prefix === "y") {
            const urlYoutube = "https://www.youtube.com/results?search_query=" + zoek;
            window.open(urlYoutube);
            createCard("YouTube", urlYoutube, zoek);
            historyAdd("YouTube", urlYoutube, zoek);
        } else if (prefix === "t") {
            const urlTwitter = "https://twitter.com/hashtag/" + zoek;
            window.open(urlTwitter);
            createCard("Twitter", urlTwitter, zoek);
            historyAdd("Twitter", urlTwitter, zoek);
        } else if (prefix === "i") {
            const urlInstagram = "https://www.instagram.com/explore/tags/" + zoek;
            window.open(urlInstagram);
            createCard("Instagram", urlInstagram, zoek);
            historyAdd("Instagram", urlInstagram, zoek);
        } else {
            alert("Unknown command prefix");
        }
    } else {
        alert("invalid command");
    }
}

const historyAdd = (site, url, zoek) => {
    global.history.push({
        titel: site,
        url: url,
        text: zoek,
    })
    createCard(site, zoek, url);
    localStorage.setItem("history", JSON.stringify(global.history));
}

const createCard = (site, url, zoek) => {
    //card aanmaken en opmaak
    let card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("text-white");
    card.classList.add("col-3");
    card.classList.add("container");

    //card site
    let cardTitle = document.createElement("h3");
    cardTitle.textContent = site;

    //card zoekopdracht
    let cardText = document.createElement("p");
    cardText.textContent = zoek;

    //url
    let link = document.createElement("a");
    link.href = url;
    link.classList.add("btn");
    link.target = "_blank";
    link.appendChild(document.createTextNode("Go!"));

    //kleuren
    switch (site) {
        case "Google":
            link.classList.add("btn-dark");
            card.classList.add("bg-danger");
            break;
        case "YouTube":
            link.classList.add("btn-warning");
            card.classList.add("bg-danger");
            break;
        case "Twitter":
            link.classList.add("btn-dark");
            card.classList.add("bg-info");
            break;
        case "Instagram":
            link.classList.add("btn-danger");
            card.classList.add("bg-warning");
            break;
    }

    card.appendChild(cardTitle);
    card.appendChild(cardText);
    card.appendChild(link);

    let history = document.getElementById("history");
    history.appendChild(card);
}

const restoreHistory = () => {
    global.history = JSON.parse(localStorage.getItem("history"));
    for(let i = 0; i < global.history.length; i ++) {
        createCard(global.history[i].titel, global.history[i].url, global.history[i].text);
    }
}

window.addEventListener("load", setup);