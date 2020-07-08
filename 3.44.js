function importantPerson() {
    console.log(this.name + '!')
}

const name = 'sunny'
const obj1 = {
    name: 'Cassy',
    importantPerson: importantPerson
}
const obj2 = {
    name: 'Jacob',
    importantPerson: importantPerson
}



obj1.importantPerson()
obj2.importantPerson()