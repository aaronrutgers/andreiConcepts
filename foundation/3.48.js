function multiply(a, b) {
    return a * b
}

let multiplyByTwo = multiply.bind(this, 2)
console.log(multiplyByTwo);

multiplyByTwo(5)