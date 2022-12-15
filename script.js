var buttons = document.querySelectorAll(".case");

console.log(buttons);

var turn = true;

function handleCase() {
    (turn) ? this.textContent = "X" : this.textContent = "O";
    (turn) ? turn=false : turn = true;
    console.log(turn)
};

for (let button of buttons) {
    button.addEventListener("click", handleCase);
};