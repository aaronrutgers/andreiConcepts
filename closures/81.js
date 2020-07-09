let dragon = {
    name: 'Tanya',
    fire: true,
    fight() {
        return 5
    },
    sing() {
        if (this.fire) {
            return `I am ${this.name}, the breather of fire`
        }
    }
}

let lizard = {
    name: 'Kiki',
    fight() {
        return 1
    }
}

// 当有this.fire检查时,bind是不好使的,难道我们真要给lizard也加上fire属性?
const singLizard = dragon.sing.bind(lizard)
console.log(singLizard());


// 不需要加
lizard.__proto__ = dragon;
dragon.isPrototypeOf(lizard);
console.log(lizard.fire)
console.log(lizard.sing())
const lizardFire = dragon.sing.bind(lizard)
console.log(lizardFire())