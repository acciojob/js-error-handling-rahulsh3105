//your code here
class OutOfRangeError extends Error {
  constructor(msg) {
    super(msg);
    this.name = "OutOfRangeError";
  }
}

class InvalidExprError extends Error {
  constructor(msg) {
    super(msg);
    this.name = "InvalidExprError";
  }
}

function evalString(expr) {
  // check for invalid operators
  if (expr.match(/[\+\-\*\/]{2,}/)) {
    throw new InvalidExprError("Expression should not have an invalid combination of operators");
  }

  // check for invalid starting operator
  if (expr.match(/^[\+\*\/]/)) {
    throw new SyntaxError("Expression should not start with invalid operator");
  }

  // check for invalid ending operator
  if (expr.match(/[\+\*\/\-]$/)) {
    throw new SyntaxError("Expression should not end with invalid operator");
  }

  // check for invalid characters
  if (!expr.match(/^[\d\s\+\-\*\/]*$/)) {
    throw new OutOfRangeError("Expression should only consist of integers and +-/* characters");
  }

  // evaluate the expression
  return eval(expr);
}

try {
  const expr = "1 + 2 - 3 * 4 / -5";
  console.log(evalString(expr));
} catch (error) {
  console.log(error.name + ": " + error.message);
}
