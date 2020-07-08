const array = [1, 2, 3];
// 因为max不接受一个array作为参数,只接受多个参数,所以用apply接受一个array然后把它作为参数给caller
// apply可以任意选择context上下文作为第一个参数,在这里,由于max函数不依赖于上下文,所以本例子传null还是传Math都一样的结果
function getMaxNumber(arr) {
    //code here  
    return Math.max.apply(null, arr)
}

getMaxNumber(array) // should return 3






const array = [1, 2, 3];
// ...叫做spread operator,可以把list压扁成多个参数,以适配max函数
function getMaxNumber(arr) {
    //code here  
    return Math.max(...arr)
}

getMaxNumber(array) // should return 3