import { CartItemType } from "../models/Cart";

const CartHelpers = {
  calculateCartTotal: (cartItems: CartItemType[]) =>
    cartItems.reduce((a, c) => a + c.price, 0),
};

export default CartHelpers;
