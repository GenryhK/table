function getRandomArbitrary(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
};



function createTable(size1, size2) {
	let k;
	let n;

	const table = document.createElement('table');
	for (let i = 0; i < size1; i++) {
		var tr = (i === 0) ? document.createElement('thead') : document.createElement('tr');
		for (let j = 0; j < size2; j++) {
			var td = (i === 0 || j === 0) ? document.createElement('th') : document.createElement('td');
			k = getRandomArbitrary(100000, 999999);
			n = getRandomArbitrary(0, 99);

			td.textContent = `${n}`;
			td.style.border = '1px solid black';
			td.setAttribute(`class`, `td`);


			tr.appendChild(td);

		}
		table.appendChild(tr);
		//table.insertBefore(th, table.children[0])
table.setAttribute(`onselectstart`,`return false`);
document.body.setAttribute(`onselectstart`,`return false`);
	}


	document.body.insertBefore(table, document.body.children[3]);
	table.setAttribute(`id`, `table`);



}
let inputTr = document.createElement(`input`);

function changeFocusColor() {
	inputTr.style.borderColor = `blue`
};

function changeFocusColor1() {
	inputTr.style.borderColor = ``
};

inputTr.addEventListener(`focus`, changeFocusColor);
inputTr.addEventListener(`blur`, changeFocusColor1);

let form = document.createElement(`form`); // спросить почему не работает тег форм

form.setAttribute(`onsubmit`, `return false`);

form.setAttribute(`name`,`firstform`);

let br = document.createElement(`br`);

let br2 = document.createElement(`br`);

let inputTd = document.createElement(`input`);

function changeFocusColor2() {
	inputTd.style.borderColor = `blue`
};

function changeFocusColor3() {
	inputTd.style.borderColor = ``
};

inputTd.addEventListener(`focus`, changeFocusColor2);
inputTd.addEventListener(`blur`, changeFocusColor3);

let button = document.createElement(`button`);

let buttonRemove = document.createElement(`button`)

buttonRemove.textContent = `remove table`;

let ledelString = document.createElement(`label`);

ledelString.textContent = `entre the number of rows :`;

button.textContent = `OK`;

let ledelColums = document.createElement(`label`);

ledelColums.textContent = `entre the number of colums :`;

ledelString.appendChild(inputTr);

inputTr.setAttribute(`autofocus`,``);

form.appendChild(ledelString);

form.appendChild(br);

form.appendChild(br2);

ledelColums.appendChild(inputTd);

form.appendChild(ledelColums);

form.appendChild(button);

form.appendChild(buttonRemove);


document.body.appendChild(form, document.body.children[0]);



let arr = []; // в массиве хранятся данные которые введены в поля, на всякий случай
function getNumbersAndCreateTable() {
	let input1 = inputTr.value;
	let input2 = inputTd.value;
	if(isNaN(input1)){alert(new Error(`please enter the number`));inputTr.focus()};
	if(isNaN(input2)){alert(new Error(`please enter the number `));inputTd.focus()};//сделаем провереку на число, если ис нан будет фолс, то ьудет алерт а метод фокус вернет фокусировку на элемент в котором введено не число
	createTable(input1, input2);
	nexStep();
	arr.push(input1, input2);
};

var table = document.body.querySelector(`#table`);

function removeTable() {
	document.body.removeChild(document.body.querySelector(`#table`))
};
button.addEventListener(`click`, getNumbersAndCreateTable);
buttonRemove.addEventListener(`click`, removeTable);

function nexStep() {

	let table = document.body.querySelector(`#table`);

	function duble(event) {
		let eventTarget = event.target;
		let line = eventTarget.parentElement;
		if (eventTarget.tagName == `TD`) {
			let returnC = confirm(` you want  delete this line?`);
			if (returnC === true) {
				table.removeChild(line)
			}

		}


	};



	function ev(event) {
		if (event.type == `mouseover` && event.target.className == `td`) { //можно устроит проверку не на клас а на тег event.target.tagName == `TD` обратим внимание , что название тега пишется капслоком

			event.target.parentElement.style.backgroundColor = `green`;
			let cellIndex = event.target.cellIndex;


			for (let o = 0; o != table.rows.length; o++) {
				let p = table.rows[o].cells[cellIndex];
				p.style.backgroundColor = `green`
			};
			event.target.style.backgroundColor = `red`;

		}



	};

	function en(event) {
		if (event.type == `mouseout` && event.target.className == `td`) {
			event.target.style.backgroundColor = ``;
			event.target.parentNode.style.backgroundColor = ``;
			let cellIndex = event.target.cellIndex;
			for (let o = 0; o != table.rows.length; o++) {
				let p = table.rows[o].cells[cellIndex];
				p.style.backgroundColor = ``
			};

		}



	};
	table.addEventListener(`mouseover`, ev);
	table.addEventListener(`mouseout`, en);
	table.addEventListener(`dblclick`, duble);

}