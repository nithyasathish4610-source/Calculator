
let display = document.getElementById("display");

// Function to add numbers and operators
function appendValue(value) {

    if (display.value === "Error") {
        display.value = "";
    }

    display.value += value;
}

// Function to clear the screen
function clearDisplay() {
    display.value = "";
}

// Function to delete the last character
function deleteLast() {

    if (display.value === "Error") {
        display.value = "";
    } else {
        display.value = display.value.slice(0, -1);
    }
}

// Function to calculate the result
function calculate() {

    try {

        let expression = display.value;

        if (expression.trim() === "") {
            return;
        }

        // Check for valid mathematical characters
        if (!/^[0-9+\-*/.() ]+$/.test(expression)) {
            throw new Error("Invalid input");
        }

        // Evaluate the expression
        let result = Function(
            '"use strict"; return (' + expression + ')'
        )();

        // Check invalid results
        if (!Number.isFinite(result)) {
            throw new Error("Invalid calculation");
        }

        // Display the answer
        display.value = result;

    } catch (error) {

        display.value = "Error";

    }
}
