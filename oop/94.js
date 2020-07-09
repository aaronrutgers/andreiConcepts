const elfFunctions = {
    attack: function () {
        return 'atack with ' + this.weapon
    }
}
function createElf(name, weapon) {
    //Object.create creates __proto__ link
    newElf = Object.create(elfFunctions)
    // 这一行输出什么呢?会不会有attack函数?
    console.log(newElf);
    
    newElf.name = name;
    newElf.weapon = weapon
    return newElf
}


const sam = createElf('Sam', 'bow');
const peter = createElf('Peter', 'bow');
sam.attack()