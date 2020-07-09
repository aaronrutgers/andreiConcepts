function callMeMaybe() {

    setTimeout(() => {
        console.log(callme);

    }, 4000);

    // 虽然const不会被hoisted,但是仍然可以访问到callme这个变量! 因为只要被函数console.log捕捉到闭包盒子里面去了之后,就在那个闭包盒子里面无所谓提升了!!!
    const callme = "Hi! I am now here!"

}

callMeMaybe()