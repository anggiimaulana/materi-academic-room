let display = document.getElementById('display');
let currentInput = '';

function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}

function appendOperator(operator) {
    currentInput += ' ' + operator + ' ';
    display.value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.value = currentInput;
}

function calculateResult() {
    try {
        let result = eval(currentInput); // Hati-hati dengan eval()!
        display.value = result;
        currentInput = result.toString();
    } catch (error) {
        display.value = 'Error';
        currentInput = '';
    }
}
