//Constructor Functions
function Elf(name, weapon) {
    this.name = name;
    this.weapon = weapon;
}

Elf.prototype.attack = function () {
    return 'attack with ' + this.weapon
}

// 箭头函数不能成功给Elf安装attack方法,因为它是lexical scoped,它里面的this指向globalObject也就是web api的window
Elf.prototype.attack = () => {
    return 'attack with ' + this.weapon
}
const sam = new Elf('Sam', 'bow');
const peter = new Elf('Peter', 'sword');
sam.attack()
peter.attack()