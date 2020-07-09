// Amazon shopping
const user = {
    name: 'Kim',
    active: true,
    cart: [],
    purchases: []
}
function add(item) {
    this.cart.add(item)
}
add.bind(user)
user.add('abc')
console.log(user);


  //Implement a cart feature:
  // 1. Add items to cart.
  // 2. Add 3% tax to item in cart
  // 3. Buy item: cart --> purchases
  // 4. Empty cart

  //Bonus:
  // accept refunds.
  // Track user history.