// How would you be able to create your own .bind() method using call or apply?
// Hint:
Function.prototype.bind = function () {
}




// SOLUTION 多练习几遍
Function.prototype.bind = function (whoIsCallingMe) {
    const self = this
    return function () {
        return self.apply(whoIsCallingMe, arguments)
    }
}

const num = 1
var mockedToString = function () {
    return "abc"
}
const bindedToString = mockedToString.bind(num)
console.log(bindedToString());


