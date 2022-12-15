var buttons = document.querySelectorAll(".case");

console.log(buttons);

var turn = true;

function handleCase() {
    if (this.classList.contains("blocked")) {
        console.log("Vous ne pouvez pas cliquer sur cette case.");
    } else {
    (turn) ? this.innerHTML = "X" : this.innerHTML = "O";
    turn = !turn;
    this.classList.replace("case", "blocked");
    };  
};

for (let button of buttons) {
    button.addEventListener("click", handleCase);
};

