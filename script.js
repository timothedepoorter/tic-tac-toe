var buttons = document.querySelectorAll(".case");

console.log(buttons);

var turn = true;
var i = 1;

function handleCase() {
    if (i>9) {
        buttons = buttons.disabled;
    } else {
        (turn) ? this.textContent = "X" : this.textContent = "O";
        (turn) ? turn=false : turn = true;
        console.log(turn);
        i++;
    };
};

for (let button of buttons) {
    button.addEventListener("click", handleCase);
};

