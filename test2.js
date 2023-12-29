class Stack {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        if (this.isEmpty()) return "Empty stack";
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
}

function evaluatePostfix(expression) {
    const stack = new Stack();
    const variables = {};

    for (let token of expression.split(' ')) {
        if (!isNaN(token)) {
            stack.push(Number(token));
        } else if (isLetter(token)) {
            stack.push(token); 
        } else {
            // Handle operators
            const operand2 = stack.pop();
            const operand1 = stack.pop();

            switch (token) {
                case '+':
                    stack.push(operand1 + operand2);
                    break;
                case '-':
                    stack.push(operand1 - operand2);
                    break;
                case '*':
                    stack.push(operand1 * operand2);
                    break;
                case '/':
                    stack.push(operand1 / operand2);
                    break;
                case '=':
                    Object.assign(variables, {operand1: operand2});
                    break;
                default:
                    return "Invalid operator";
            }
        }
    }

    return stack.pop();
}

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function startInteractiveSession() {
    rl.question('Enter a postfix expression (or type "exit" to quit): ', (expression) => {
        if (expression === 'exit') {
            rl.close();
        } else {
            const result = evaluatePostfix(expression);
            console.log(`Result: ${result}`);
            startInteractiveSession();
        }
    });
}

startInteractiveSession();
