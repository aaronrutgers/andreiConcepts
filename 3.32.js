// hoisting在每一个context都有执行

var favouriteFood = "grapes"

var foodThoughts = function () {
    console.log("Original favourite food: ", favouriteFood);

    var favouriteFood = "sushi"

    console.log("New favourite food: ", favouriteFood);

}

foodThoughts()





// 所以要用const

const favouriteFood = "grapes"

const foodThoughts = function () {
    console.log("Original favourite food: ", favouriteFood);

    const favouriteFood = "sushi"

    console.log("New favourite food: ", favouriteFood);

}

foodThoughts()