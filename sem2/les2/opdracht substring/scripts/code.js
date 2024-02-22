const setup = () => {
    let btnSubstring=document.getElementById("btnSubstring");
    btnSubstring.addEventListener("click", substring);
}

const substring = () => {
    let txtInput=document.getElementById("txtInput").value;
    let beginNum=document.getElementById("beginNum").value;
    let endNum=document.getElementById("endNum").value;
    let txtOutput=document.getElementById("txtOutput");
    txtOutput.innerHTML = txtInput.substring(beginNum, endNum);
}

window.addEventListener("load", setup);
