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
    return str.length === 1 && str.match(/[A-Z]/i);
}

function evaluatePostfix(expression) {
    const stack = new Stack();

    for (let token of expression.split(' ')) {
        if (!isNaN(token)) {
            stack.push(Number(token));
        } else if (isLetter(token)) {
            if (variables[token]) {
                stack.push(variables[token]);
            } else {
                stack.push(token);
            }
        } else if (token === '=') {
            const value = stack.pop();
            const variable = stack.pop();
            variables[variable] = value;
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
    rl.question('Enter a postfix expression or variable assignment (or type "exit" to quit): ', (input) => {
        if (input === 'exit') {
            rl.close();
        } else {
            const tokens = input.split(' ');
            if (tokens.length === 3 && tokens[2] === '=') {
                const variable = tokens[0];
                const value = Number(tokens[2]);
                variables[variable] = value;
            } else {
                const result = evaluatePostfix(input);
                console.log(`Result: ${result}`);
            }
            startInteractiveSession();
        }
    });
}

startInteractiveSession();