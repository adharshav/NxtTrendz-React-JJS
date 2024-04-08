import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      cartList.forEach(cartItem => {
        total += cartItem.price * cartItem.quantity
      })
      return (
        <div className="cart-summary-container">
          <div className="summary-details-container">
            <h1 className="order-total">
              Order Total: <span className="amount">{total}/-</span>
            </h1>
            <p className="no-of-items">{cartList.length} items in cart</p>
            <button type="button" className=" check-out-btn desktop-display">
              Checkout
            </button>
          </div>
          <button type="button" className="check-out-btn mobile-display">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
