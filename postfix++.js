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

function evaluatePostfix(expression) {
  const stack = new Stack();

  for (let token of expression.split(' ')) {
      if (!isNaN(token)) {
          stack.push(Number(token)); // Push numbers to stack
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
          const result = evaluatePostfix(expression);
          console.log(`Result: ${result}`);
          startInteractiveSession();
      }
  });
}

startInteractiveSession();
