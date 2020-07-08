// Make a generic multiplyBy HOF that can make other functions like: multiplyByTwo, multiplyByTen and so on...

const multiplyBy = (multer) => (multee) => multee * multer

// function multiplyBy(multer) {
//     return (multee) => multee * multer
// }

// You should be able to do:
const multiplyByTwo = multiplyBy(2);
multiplyByTwo(4) // 8