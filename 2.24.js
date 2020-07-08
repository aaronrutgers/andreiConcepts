setTimeout(() => {
    console.log('1', 'is the loneliest number');
}, 0);

Promise.resolve('hi').then(() => console.log('2'))

console.log('3', 'is a crowd');
