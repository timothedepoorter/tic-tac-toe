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

function verifyEnd() {
    if (((buttons[0].innerHTML == buttons[1].innerHTML) && (buttons[0].innerHTML == buttons[2].innerHTML)) && (buttons[0].innerHTML == "X" || buttons[0].innerHTML == "O")) {
        alert(`Le joueur ${buttons[0].innerHTML} remporte la partie`);
    } else if (((buttons[3].innerHTML == buttons[4].innerHTML) && (buttons[3].innerHTML == buttons[5].innerHTML)) && (buttons[3].innerHTML == "X" || buttons[3].innerHTML == "O")) {
        alert(`Le joueur ${buttons[3].innerHTML} remporte la partie`);
    } else if (((buttons[6].innerHTML == buttons[7].innerHTML) && (buttons[6].innerHTML == buttons[8].innerHTML)) && (buttons[6].innerHTML == "X" || buttons[6].innerHTML == "O")) {
        alert(`Le joueur ${buttons[6].innerHTML} remporte la partie`);
    } else if (((buttons[0].innerHTML == buttons[3].innerHTML) && (buttons[0].innerHTML == buttons[6].innerHTML)) && (buttons[0].innerHTML == "X" || buttons[0].innerHTML == "O")) {
        alert(`Le joueur ${buttons[0].innerHTML} remporte la partie`);
    } else if (((buttons[1].innerHTML == buttons[4].innerHTML) && (buttons[1].innerHTML == buttons[7].innerHTML)) && (buttons[1].innerHTML == "X" || buttons[1].innerHTML == "O")) {
        alert(`Le joueur ${buttons[1].innerHTML} remporte la partie`);
    } else if (((buttons[2].innerHTML == buttons[5].innerHTML) && (buttons[2].innerHTML == buttons[8].innerHTML)) && (buttons[2].innerHTML == "X" || buttons[8].innerHTML == "O")) {
        alert(`Le joueur ${buttons[2].innerHTML} remporte la partie`);
    } else if (((buttons[0].innerHTML == buttons[4].innerHTML) && (buttons[0].innerHTML == buttons[8].innerHTML)) && (buttons[0].innerHTML == "X" || buttons[0].innerHTML == "O")) {
        alert(`Le joueur ${buttons[0].innerHTML} remporte la partie`);
    } else if (((buttons[2].innerHTML == buttons[4].innerHTML) && (buttons[2].innerHTML == buttons[6].innerHTML)) && (buttons[2].innerHTML == "X" || buttons[2].innerHTML == "O")) {
        alert(`Le joueur ${buttons[2].innerHTML} remporte la partie`);
    } else if ((buttons[0].innerHTML == "X" || buttons[0].innerHTML == "O") &&
               (buttons[1].innerHTML == "X" || buttons[1].innerHTML == "O") &&
               (buttons[2].innerHTML == "X" || buttons[2].innerHTML == "O") &&
               (buttons[3].innerHTML == "X" || buttons[3].innerHTML == "O") &&
               (buttons[4].innerHTML == "X" || buttons[4].innerHTML == "O") &&
               (buttons[5].innerHTML == "X" || buttons[5].innerHTML == "O") && 
               (buttons[6].innerHTML == "X" || buttons[6].innerHTML == "O") &&
               (buttons[7].innerHTML == "X" || buttons[7].innerHTML == "O") &&
               (buttons[8].innerHTML == "X" || buttons[8].innerHTML == "O")) {
               alert("Egalité entre les deux joueurs !")
    };
};

for (let button of buttons) {
    button.addEventListener("click", handleCase);
    button.addEventListener("click", verifyEnd); 
};