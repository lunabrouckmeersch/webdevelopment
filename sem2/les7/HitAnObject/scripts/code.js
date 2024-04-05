let global = {
    IMAGE_COUNT: 5, //aantal figuren
    IMAGE_SIZE: 48, //grootte van de figuur
    IMAGE_PATH_PREFIX: "images/", //map van de figuren
    IMAGE_PATH_SUFFIX: ".png", //extensie van de figuren

    MOVE_DELAY: 3000, //aantal milliseconden voor een nieuwe afbeelding verschijnt

    score: 0, //aantal hits
    timeoutid: 0 //id van de timeout, zodat we die kunnen annuleren
}


const setup = () => {
    let startBtn = document.getElementById("startBtn");
    startBtn.addEventListener("click", startGame);
};

const startGame = () => {
    let startBtn = document.getElementById("startBtn");
    startBtn.remove();

    let target = document.getElementById("target");
    target.addEventListener("click", clicked);
    moveImage();
}

const moveImage = () => {
    let target = document.getElementById("target");
    let speelveld = document.getElementById("playField");

    let maxLeft = speelveld.clientWidth - global.IMAGE_SIZE;
    let maxHeight = speelveld.clientHeight - global.IMAGE_SIZE;

    let left = Math.floor(Math.random()*maxLeft);
    let top = Math.floor(Math.random()*maxHeight);
    target.style.left=left+"px";
    target.style.top=top+"px";

    let nieuwImage = Math.floor(Math.random()*global.IMAGE_COUNT);
    target.setAttribute("src", global.IMAGE_PATH_PREFIX+ nieuwImage + global.IMAGE_PATH_SUFFIX);

    global.timeoutid = setTimeout(moveImage, global.MOVE_DELAY);
}

const clicked = () => {
    if(document.getElementById("target").getAttribute("src")===global.IMAGE_PATH_PREFIX + 0 + global.IMAGE_PATH_SUFFIX){
        gameOver();
    } else {
        global.score++;
        document.getElementById("score").innerText = global.score;
        clearTimeout(global.timeoutid);
        moveImage();
    }
}
/*
const hit = () => {
    let scoreVeld = document.getElementById("score");
    global.score++;
    clearTimeout(global.timeoutid);
    for (let i = 0; i < scoreVeld.length; i++) {
        scoreVeld[i].innerText = global.score;
    }
    moveImage();
}*/
const gameOver = () => {
    clearTimeout(global.timeoutid);
    alert("GAME OVER");
}



window.addEventListener("load", setup);


