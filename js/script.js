/*
Creare in JavaScript una griglia 8x8.
Ogni cella della griglia contiene un numero casuale da 1 a 64. I numeri presenti nelle celle non devono essere ripetuti (ovvero la griglia contiene tutti i numeri da 1 a 64).

Ogni volta che clicco su un quadrato questo si colora di verde se il numero contenuto e pari e in rosso se dispari (e si decolora al secondo click se uso `.toggle()` al posto di `.add()`).
*/

const eleGrid = document.querySelector('.grid');

// TODO: mergare il for con il while
const arrRandoms = [];
for (let i = 1; i <= 64; i++) {
	// generare un numero random univoco
	let randomNumber;
	do {
		randomNumber = getRandomInteger(1, 64); // attenzione a non mettere un range minore delle iterazioni del ciclo for
	} while (arrRandoms.includes(randomNumber))
	arrRandoms.push(randomNumber);

	const eleCell = document.createElement('div');
	eleCell.classList.add('cell');
	if (isEven(randomNumber)) {
		eleCell.classList.add('even');
	} else {
		eleCell.classList.add('odd');
	}
	eleCell.innerHTML = randomNumber;
	eleGrid.append(eleCell);

	eleCell.addEventListener('click', function () {
		this.classList.toggle('active');
	});
}
console.log(arrRandoms);

function getRandomInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function isEven(number) {
	if (number % 2) { // number % 2 != 0
		return false;
	} else {
		return true;
	}
}


document.body.addEventListener('click', saluta)

document.body.removeEventListener('click', saluta)

function saluta() {
	alert('ciao');
}