const wizard = {
    name: "Merlin",
    health: 50,
    heal() {
        return this.health = 100
    }
}

const archer = {
    name: 'Robin Hood',
    health: 30,
}

console.log('1', archer);
wizard.heal.call(archer)
console.log('2', archer);



// 使用bind则要先赋值再call,传参数则不用再传,赋值时已传好
const wizard = {
    name: "Merlin",
    health: 50,
    heal() {
        return this.health = 100
    }
}

const archer = {
    name: 'Robin Hood',
    health: 30,
}

console.log('1', archer);
const healArcher = wizard.heal.bind(archer)
healArcher()
console.log('2', archer);
