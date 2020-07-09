// new binding 相当于工厂模式
function Person(name, age) {
    this.name = name;
    this.age = age;
    console.log(this);
}
const person1 = new Person('Xavier', 55)



//implicit binding
const person = {
    name: 'Karen',
    age: 40,
    hi() {
        console.log('hi' + this.name)
    }
}
person.hi()



//explicit binding
// 这里本来是动态scope,但是我们把this指定成了window
const person3 = {
    name: 'Karen',
    age: 40,
    hi: function () {
        console.log('hi' + this.setTimeout)
    }.bind(window)
}
person3.hi()



// arrow functions
// 箭头函数是lexical scope,所以这里this指向是person4,如果用普通的function来写,则为动态scope,this会指向window
const person4 = {
    name: 'Karen',
    age: 40,
    hi: function () {
        var inner = () => {
            console.log('hi ' + this.name)
        }
        return inner()
    }
}
person4.hi()
