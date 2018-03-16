
for(let i = 0;i<66;i++){
	const container = document.querySelector('.grid-container');
	const content = document.createElement('div');
	content.classList.add('grid-cell');
	container.appendChild(content);
}

var cells = document.querySelectorAll(".grid-cell");
console.log(cells);

function changeColor(){
	var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
	this.style.backgroundColor = hue;
};

for (var i=0;i<cells.length; i++){
	cells[i].addEventListener("mouseenter", changeColor, false);

}







