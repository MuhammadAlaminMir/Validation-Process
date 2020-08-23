const randomNumber = document.getElementById("generated-value");
document
    .getElementById("generator-btn")
    .addEventListener("click", function validationCode() {
        const newNumber = Math.round(1000 + Math.random() * 9000);

        randomNumber.value = newNumber;
    });
const userInput = document.getElementById("user-input");
const button = document.getElementsByClassName("button");
for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function () {
        if (this.id == "clear") {
            userInput.value = "";
        } else if (this.id == "backspace") {
            const currentNumber = userInput.value.toString();
            const newNumber = currentNumber.substr(0, currentNumber.length - 1);
            userInput.value = newNumber;
        } else if (
            this.id != "backspace" &&
            this.id != "clear" &&
            userInput.value.length < 4
        ) {
            const currentNumber = userInput.value;
            userInput.value = currentNumber + this.id;
        }
    });

    document.getElementById("submit").addEventListener("click", function () {
        if (randomNumber.value == userInput.value) {
            userInput.value = "";
            randomNumber.value = "";
            document.getElementById("notify-success").style.display = "block";
            setTimeout(() => {
                document.getElementById("notify-success").style.display =
                    "none";
            }, 5000);
        }

        if (randomNumber.value != userInput.value) {
            userInput.value = "";
            document.getElementById("notify-invalid").style.display = "block";
            setTimeout(() => {
                document.getElementById("notify-invalid").style.display =
                    "none";
            }, 3000);
        }
    });
}
