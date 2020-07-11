const array = [1, 2, 3]
const array2 = [1, 2, 3]
const array3 = [1, 2, 3]

function removeLastItem(arr) {
    const newArray = [].concat(arr)
    newArray.pop()
    return newArray
}
function mutateArray(arr) {
    arr.forEach(item => {
        arr.push(1)
    });
}
function multiplyBy2(arr) {
    return arr.map(item => item * 2)
}

// 这个方法有没有副作用?
mutateArray(array)
console.log(array);


// 这个方法有没有呢?
removeLastItem(array2)
console.log(array2);

// 这个方法有没有呢?
multiplyBy2(array3)
console.log(array3);
