// Function to calculate the sum of two numbers
function add(a, b) {
    return a + b;
}

// Function to calculate the difference between two numbers
function subtract(a, b) {
    return a - b;
}

// Function to calculate the product of two numbers
function multiply(a, b) {
    return a * b;
}

// Function to calculate the quotient of two numbers
function divide(a, b) {
    return a / b;
}

// Function to calculate the square of a number
function square(a) {
    return a * a;
}

// Function to calculate the factorial of a number
function factorial(a) {
    if (a === 0 || a === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= a; i++) {
        result *= i;
    }
    return result;
}

// Function to check if a number is prime
function isPrime(a) {
    if (a <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(a); i++) {
        if (a % i === 0) {
            return false;
        }
    }
    return true;
}

// Function to calculate the n-th Fibonacci number
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Function to calculate the square root of a number
function squareRoot(a) {
    return Math.sqrt(a);
}

// Example usage
console.log(add(5, 3)); // Output: 8
console.log(subtract(5, 3)); // Output: 2
console.log(multiply(5, 3)); // Output: 15
console.log(divide(5, 3)); // Output: 1.6666666666666667
console.log(square(5)); // Output: 25
console.log(factorial(5)); // Output: 120
console.log(isPrime(7)); // Output: true
console.log(fibonacci(5)); // Output: 5
console.log(squareRoot(25)); // Output: 5