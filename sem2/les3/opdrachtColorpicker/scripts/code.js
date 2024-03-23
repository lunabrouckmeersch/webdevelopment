const setup = () => {
	let rood = document.getElementById("redText");
	let groen = document.getElementById("greenText");
	let blauw = document.getElementById("blueText");
	let kleurdoos = document.getElementById("kleur");

	rood[0].addEventListener("change", update)
	rood[0].addEventListener("input", update)

	groen[0].addEventListener("change", update)
	groen[0].addEventListener("input", update)

	blauw[0].addEventListener("change", update)
	blauw[0].addEventListener("input", update)

	kleurdoos[0].style.backgroundColor="rgb(0,0,0)";
}

const update = () => {
	let rood = document.getElementsByClassName("red");
	let groen = document.getElementsByClassName("green");
	let blauw = document.getElementsByClassName("blue");
	let kleurdoos = document.getElementsByClassName("kleur");
	let roodtxt = document.getElementsByClassName("redText");
	let greentxt = document.getElementsByClassName("greenText");
	let bluetxt = document.getElementsByClassName("blueText");

	roodtxt[0].innerHTML = rood[0].value
	greentxt[0].innerHTML = groen[0].value
	bluetxt[0].innerHTML = blauw[0].value
	kleurdoos[0].style.backgroundColor=`rgb(${rood[0].value},${groen[0].value},${blauw[0].value}`;
}

window.addEventListener("load", setup);