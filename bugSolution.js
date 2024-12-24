function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

function calculate(a, b, operation) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Invalid input: Operands must be numbers.');
  }

  switch (operation) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
    default:
      throw new Error(`Invalid operation: '${operation}'`);
  }
}

console.log(calculate(10, 2, '+')); // 12
console.log(calculate(10, 2, '-')); // 8
console.log(calculate(10, 2, '*')); // 20
console.log(calculate(10, 2, '/')); // 5
console.log(calculate(10, 0, '/')); // throws an error
console.log(calculate(10, 2, '%')); // throws a more informative error
console.log(calculate('ten',2,'+')); // throws an error