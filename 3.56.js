let obj = { a: 'a', b: 'b', c: 'c' }
let clone = Object.assign({}, obj)
let clone2 = { ...obj }

obj.c = 5
console.log(obj);
console.log(clone);
console.log(clone2);



// 由于是object是引用传递,浅克隆只能克隆一层
let obj = {
    a: 'a',
    b: 'b',
    c: {
        deep: 'try and copy me'
    }
}
let clone = Object.assign({}, obj)
let clone2 = { ...obj }
let superClone = JSON.parse(JSON.stringify(obj))

obj.c.deep = 'hahaha'
console.log(obj);
console.log(clone);
console.log(clone2);
console.log(superClone);
