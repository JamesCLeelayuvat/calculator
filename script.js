function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return
}

function divide(a, b) {
    return a / b;
}

function operate() {
    operandArray.push(parseInt(currentOperand));
    currentOperand = "";
    let results = 0;
    switch (operationsArray[0]) {
        case "+":
            results = operandArray[0] + operandArray[1];
            break;

        case "-":
            results = operandArray[0] - operandArray[1];
            break;

        case "*":
            results = operandArray[0] * operandArray[1];
            break;

        case "/":
            results = operandArray[0] / operandArray[1];
            break;

    }
    if (operandArray.length > 2) {
        for (let i = 2; i < operandArray.length; i++) {
            switch (operationsArray[i - 1]) {
                case "+":
                    results = results + operandArray[i];
                    break;

                case "-":
                    results = operandArray[0] - operandArray[1];
                    break;

                case "*":
                    results = operandArray[0] * operandArray[1];
                    break;

                case "/":
                    results = operandArray[0] / operandArray[1];
                    break;

            }
        }
    }
    clearAll();
    if (results !== results) {
        alert("Invalid Input");
        clearAll();
    } else if (!Number.isFinite(results)) {
        alert("Evaluates to infinity");
        clearAll();
    } else {
        display.textContent = results;
        currentOperand = results;
    }
}
document.addEventListener("keydown", (event) => {
    console.log(event.key);
});

function populateDisplay(a) {

    display.textContent = display.textContent + a;
    console.log(display);
}
let display = document.querySelector("p");
let currentOperand = "";
let operandArray = [];
let operationsArray = [];
let digits = document.querySelectorAll("#digit");
for (let i = 0; i < digits.length; i++) {
    digits[i].addEventListener("click", () => {
        let digit = digits[i].textContent;
        currentOperand = currentOperand + digit;
        populateDisplay(digit);
    });
    // digits[i].addEventListener("keydown", (event) => {
    //     console.log(event.key);
    //     if (event.key === `${digits[i].textContent}`) {
    //         let digit = digits[i].textContent;
    //         currentOperand = currentOperand + digit;
    //         populateDisplay(digit);
    //     }

    // });
}
let operations = document.querySelectorAll("#operation");
for (let i = 0; i < operations.length; i++) {
    operations[i].addEventListener("click", () => {
        operandArray.push(parseInt(currentOperand));
        operationsArray.push(operations[i].textContent);
        currentOperand = "";
        populateDisplay(operations[i].textContent);
    });
}
let operateOn = document.querySelector("#operate-on");
operateOn.addEventListener("click", () => {
    operate();
})
let clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
    clearAll();
})

function clearAll() {
    operandArray = [];
    operationsArray = [];
    currentOperand = "";
    display.textContent = "";
}