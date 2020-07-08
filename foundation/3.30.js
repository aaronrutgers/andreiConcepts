// functions 是完全hoisted但是变量不是

console.log(teddy);
console.log(sing());
console.log(sing2());


var teddy = 'bear'

var sing2 = function() {
    console.log('uhhh la la');
    
}

function sing() {
    console.log('la la la ');

}
