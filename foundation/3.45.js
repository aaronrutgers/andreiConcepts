//Exercise:
const a = function () {
    console.log(this)
    const b = function () {
        console.log(this)
        const c = {
            hi: function () {
                console.log(this)
            }
        }
        c.hi()
    }
    b()
}

a()

//JS is weird:
const obj = {
    name: 'Billy',
    sing: function () {
        console.log('a', this) // in this case, it's a method on an object.
        var anotherFunc = function () {
            console.log('b', this)// this points to windows!
        }
        anotherFunc()
    }
}
obj.sing()

// 更正上面weird的部分
const obj = {
    name: 'Billy',
    sing: function () {
        console.log('a', this) // in this case, it's a method on an object.
        var anotherFunc = () => {
            console.log('b', this)// this points to windows!
        }
        anotherFunc()
    }
}
obj.sing()


// 使用bind传递this,也就是anotherFunc这个函数:
const obj = {
    name: 'Billy',
    sing: function () {
        console.log('a', this) // in this case, it's a method on an object.
        var anotherFunc = () => {
            console.log('b', this)// this points to windows!
        }
        return anotherFunc.bind(this)
    }
}
obj.sing()
