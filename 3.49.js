var b = {
    name: 'jay',
    say() {
        console.log('b', this);
    }
}

var c = {
    name: 'jay',
    say() {
        return function () { console.log('c', this) };
    }
}

var d = {
    name: 'jay',
    say() { return () => console.log('d', this) }
}

b.say()
c.say()()
d.say()()