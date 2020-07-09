//Exercise - extend the functionality of a built in object

//#1
//Date object => to have new method .lastYear() which shows you last year 'YYYY' format.

new Date('1900-10-10').lastYear()
//'1899'


//#Bonus
// Mofify .map() to print '🗺' at the end of each item.
console.log([1, 2, 3].map())
//1🗺, 2🗺, 3🗺


// SOLUTION
// 不能用箭头=>函数,因为箭头函数里面的this被限定在了箭头函数的scope里面
Date.prototype.lastYear = function () {
    return this.getFullYear() - 1
}





//#Bonus SOLUTION
// 这里的this指代的是调用map的那个object,即[1,2,3]
Array.prototype.map = function () {
    let arr = []
    for (let i = 0; i < this.length; i++) {
        arr.push((this[i] + '🗺'))
    }
    return arr
}
console.log([1, 2, 3].map())
//1🗺, 2🗺, 3🗺