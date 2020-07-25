function fibonacci(n) {
    if (n < 0 || !Number.isInteger(n)) {
        return 'kvo praish lud?'
    }
    if (n <= 1) {
        return 1;
    }

    return fibonacci(n - 2) + fibonacci(n - 1)
}

console.log(fibonacci(8));