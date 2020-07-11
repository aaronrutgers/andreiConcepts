// Amazon shopping
const user = {
    name: 'Kim',
    active: true,
    cart: [],
    purchases: []
}
let amazonHistory = []
// compose作为累加器,就是简单地对数据先后应用g和f两个函数
const compose = (f, g) => (...args) => f(g(...args))

// 如果有一个新的环节直接在这里加一个就好了
purchaseItem(
    emptyCart,
    buyItem,
    applyTaxToItems,
    addItemToCart
)(user, { name: 'laptop', price: 200 })

function purchaseItem(...fns) {
    // 给reduce传入想要的累加器
    return fns.reduce(compose)
}

function addItemToCart(user, item) {
    amazonHistory.push(user)
    const updateCart = user.cart.concat(item)
    return Object.assign({}, user, { cart: updateCart })
}

function applyTaxToItems(user) {
    const { cart } = user;
    const taxRate = 1.3;
    const updatedCart = cart.map(item => {
        return {
            name: item.name,
            price: item.price * taxRate
        }
    })
    return Object.assign({}, user, { cart: updatedCart })
}

function buyItem(user) {
    amazonHistory.push(user)
    return Object.assign({}, user, { purchases: user.cart })
}

function emptyCart(user) {
    amazonHistory.push(user)
    return Object.assign({}, user, { cart: [] })
}

amazonHistory


  //Implement a cart feature:
  // 1. Add items to cart.
  // 2. Add 3% tax to item in cart
  // 3. Buy item: cart --> purchases
  // 4. Empty cart

  //Bonus:
  // accept refunds.
  // Track user history.