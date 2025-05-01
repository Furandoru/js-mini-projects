const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        // Safely evaluate the expression using Function constructor
        display.value = new Function('return ' + display.value)();
    } catch (error) {
        display.value = "Error";
    }
}
