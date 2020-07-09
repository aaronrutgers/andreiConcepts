// 下面输出什么?如果想要输出1,2,3,4,怎么解决?
const array = [1, 2, 3, 4];
for (var i = 0; i < array.length; i++) {
    setTimeout(function () {
        console.log('I am at index ' + i)
    }, 3000)
}



// 最简单的办法,为每个i创建一个scope
const array = [1, 2, 3, 4];
for (let i = 0; i < array.length; i++) {
    setTimeout(function () {
        console.log('I am at index ' + i)
    }, 3000)
}

// 第二种办法把setTimeout包在一个函数里面产生作用域,并且把i变量传进去,注意function必须打括号,不打不给过
const array = [1, 2, 3, 4];
for (var i = 0; i < array.length; i++) {
    (function (closureI) {
        setTimeout(function () {
            console.log('I am at index ' + array[closureI])
        }, 3000)
    })(i)
}
