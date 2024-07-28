function clearDisplay() {
    document.getElementById('display').innerText = '';
}

function appendCharacter(character) {
    document.getElementById('display').innerText += character;
}

function removeLastCharacter() {
    let displayElement = document.getElementById('display');
    displayElement.innerText = displayElement.innerText.slice(0, -1);
}

function evaluateExpression() {
    let displayElement = document.getElementById('display');
    try {
        displayElement.innerText = eval(displayElement.innerText);
    } catch (error) {
        displayElement.innerText = 'Error';
    }
}
