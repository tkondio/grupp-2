import { CartItemType } from "../models/Cart";

const CartHelpers = {
  calculateCartTotal: (cartItems: CartItemType[]) =>
    cartItems.reduce((a, c) => {
      if (c.qty) {
        return a + c.price * c.qty;
      }
      return a + c.price;
    }, 0),
};

export default CartHelpers;
