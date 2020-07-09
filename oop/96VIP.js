//Constructor Functions
function Elf(name, weapon) {
    this.name = name;
    this.weapon = weapon;
}

// Elf.prototype.attack = function () {
//     return 'atack with ' + this.weapon
// }

// const sam = new Elf('Sam', 'bow');
// sam.attack()



// 有两种方法解决返回的building函数的this上下文问题,以下是第一种:
Elf.prototype.build = function () {
    function building() {
        return this.name + ' build with ' + this.weapon
    }
    return building.bind(this)
}
const peter = new Elf('Peter', 'axe');
console.log(peter.build()());

// 以下是第二种
Elf.prototype.build = function () {
    const self = this
    function building() {
        return self.name + ' build with ' + self.weapon
    }
    return building
}
const peter = new Elf('Peter', 'axe');
console.log(peter.build()());