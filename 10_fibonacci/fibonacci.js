const fibonacci = function (n) {
    if (typeof n === "string") {
        n = parseInt(n);
    }

    if (n < 0) {
        return "OOPS"
    }
    else if (n === 0) {
        return 0
    }
    else if (n === 1) {
        return 1
    }
    else if (n > 1) {
        return fibonacci(n - 2) + fibonacci(n - 1)
    }

};

const fib = fibonacci("1")
console.log(fib)

// Do not edit below this line
module.exports = fibonacci;
