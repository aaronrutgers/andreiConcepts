function createElf(name, weapon) {
    return {
        name,
        weapon,
        attack() {
            return name + " attack with " + weapon
        }
    }
}

const peter = createElf("peter", "stones")
peter.attack()

const sally = createElf("sally", "fire")
sally.attack()
