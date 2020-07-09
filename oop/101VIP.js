// ogre将不会有attack方法,这是因为ogre和fiona是两个object这也是必须要使用继承的原因
class Elf {
    constructor(name, weapon) {
        this.name = name
        this.weapon = weapon
    }
    attack() {
        return 'attack with ' + this.weapon
    }
}

const fiona = new Elf('Fiona', 'ninja stars');
const ogre = { ...fiona }
ogre === fiona
ogre.attack()




// 这是解决方法
class Character {
    constructor(name, weapon) {
        this.name = name
        this.weapon = weapon
    }
    attack() {
        return 'attack with ' + this.weapon
    }
}
class Elf extends Character {
    constructor(name, weapon, type) {
        super(name, weapon)
        this.type = type
    }
}
class Ogre extends Character {
    constructor(name, weapon, color) {
        super(name, weapon)
        this.color = color
    }
    makeFort() {
        return 'strongest fort in the world made'
    }
}
const dolby = new Elf('Dolby', 'cloth', 'house');
dolby
const shrek = new Ogre('Shrek', 'club', 'house');
shrek

// 注意以下关系
console.log(Ogre.isPrototypeOf(shrek));
console.log(Ogre.prototype.isPrototypeOf(shrek));

// 由于上述的混乱关系,请使用instanceof
console.log(shrek instanceof Ogre);
console.log(shrek instanceof Character);

