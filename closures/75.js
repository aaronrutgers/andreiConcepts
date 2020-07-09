// Make it so that the initialize function can only be called once!
let view;
function initialize() {
    view = '🏔';
    console.log('view has been set!')
}

initialize();
initialize();
initialize();

console.log(view)




// 用传统的init方式解决
let view;
function initialize() {
    let called = 0
    return function () {
        if (called > 0) {
            return
        } else {
            called++
            view = '🏔';
            console.log('view has been set!')
        }
    }

}
const startOnce = initialize()
startOnce();
startOnce();
startOnce();

console.log(view)
