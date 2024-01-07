// Define Stack class   
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

    isEmpty() {
        return this.items.length === 0;
    }
}

// Define the Dictionary class
class Dictionary {
    constructor() {
        this.dictionary = []; // Using an array to store keys
        this.variables = []; // Using an array to store values
    }

    // Method to add a key-value pair
    add(key, value) {
        if (!this.isValidKey(key)) {
            console.log("Invalid key! Please use keys from A-Z.");
            return;
        }
        //   check if key already exists
        else if (this.getIndex(key) === false) {
            this.dictionary.push(key); // Add key to array
            const index = this.getIndex(key);
            this.variables[index] = value; // Add value to array
        }
        //  if key exists, replace value
        else {
            const index = this.getIndex(key);
            this.variables[index] = value; // Add value to array
        }
    };

    // Method to get a value by key
    get(key) {
        if (!this.isValidKey(key)) {
            console.log("Invalid key! Please use keys from A-Z.");
            return;
        }
        const index = this.getIndex(key);
        if (index !== -1) {
            return this.variables[index]; // Return value if key exists
        }
        return undefined; // Return undefined if key does not exist
    };

    // Helper method to get index of a key
    getIndex(key) {
        if (!this.isValidKey(key)) {
            console.log("Invalid key! Please use keys from A-Z.");
            return;
        }
        for (let i = 0; i < this.dictionary.length; i++) {
            if (this.dictionary[i] === key) {
                return i; // Return index if key exists
            }
        }
        return false; // Return false if key does not exist
    };

    //   check if key is between A and Z
    isValidKey(key) {
        return /^[A-Z]$/.test(key);
    };

}

function isLetter(str) {
    return str.length === 1 && str.match(/[A-Z]/i);
}

dict = new Dictionary();

function evaluatePostfix(expression) {
    let stack = new Stack();

    for (let token of expression.split(' ')) {
        if (!isNaN(token)) {
            stack.push(Number(token)); // Push numbers to stack
        } else if (isLetter(token)) {
            if (dict.get(token)) {
                stack.push(dict.get(token));
            }
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
    return stack.pop(); // Result will be at the top of the stack
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
            const tokens = expression.split(' ');
            if (tokens.length === 3 && tokens[2] === '=') {
                const variable = tokens[0];
                const value = Number(tokens[1]);
                dict.add(variable, value);
                startInteractiveSession();
            } else {
                const result = evaluatePostfix(expression);
                console.log(`Result: ${result}`);
                startInteractiveSession();
            }
        }
    });
}

startInteractiveSession();