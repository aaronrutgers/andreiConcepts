// catch可以抓住错误
const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve('Stuff Works', 'abc', 'def')
    } else {
        reject('Error, it broke')
    }
});

promise
    .then(result0 => result0 + '!!!')
    .then(result1 => console.log(result1))
    .then(result2 => console.log(result2, '2'))
    .then(result3 => {
        throw Error
    })
    .catch(() => console.log('error!'))






// promise.all是怎么个返回法?
const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve('Stuff Worked')
    } else {
        reject('Error, it broke')
    }
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'Hi')
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'POOKIE')
});

const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 5000, 'Is it me you are waiting for?')
});

Promise.all([promise, promise2, promise3, promise4])
    .then(values => {
        console.log(values);
    })






// https://jsonplaceholder.typicode.com/的一个示范
const urls = [
    'https://mistake.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

Promise.all(urls.map(url => {
    return fetch(url).then(resp => resp.json())
})).then(results => {
    console.log(results[0]);
    console.log(results[1]);
    console.log(results[2]);
}).catch(() => console.log('error'))







// Async Await是如何基于promise,把fetch函数包起来构造出一个新的异步函数的
// 本来是这样:
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(resp => resp.json())
    .then(console.log)
// 变成了这样:
async function fetchUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    console.log(data);
}
fetchUsers()