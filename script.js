var buttons = document.querySelectorAll(".case");

console.log(buttons);

function handleCase() {
    this.textContent = "x";
};

for (let button of buttons) {
    button.addEventListener("click", handleCase);
};
