// Get the display element
const display = document.getElementById("display");

// Function to append characters to the display
function appendToDisplay(input) {
    display.value += input;
}

// Function to clear the display
function clearDisplay() {
    display.value = "";
}

// Function to calculate the expression
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

// Function to delete the last character (backspace)
function backspace() {
    display.value = display.value.slice(0, -1);
}

// Listen for keydown events to handle keyboard input
document.addEventListener('keydown', function(event) {
    const key = event.key;

    // Number keys and operator keys
    if (key >= '0' && key <= '9') {
        appendToDisplay(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        appendToDisplay(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Backspace') {
        backspace();
    } else if (key === 'Escape') {  // Escape key to clear the display
        clearDisplay();
    } else if (key === '.') {
        appendToDisplay(key);
    }
});
