
function add(a, b) {
    return a + b
}
function multiplyFunc(...args) {
    return args.reduce(add, 0)
}

multiplyFunc(5, 6, 7, 8)