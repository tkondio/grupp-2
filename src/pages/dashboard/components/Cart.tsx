import React, { useState } from "react";
//import CartItem from "./CartItem";
import { createUseStyles } from "react-jss";
import {
  addCartItem,
  deleteCartItem,
  getCartItems,
} from "../../../api/controller/productController";
import theme from "../../../common/theme";
import useEffectAsync from "../../../common/useEffectAsync";
import CartHelpers from "../../../helpers/cartHelpers";
import { CartItemType } from "../../../models/Cart";
import { Product } from "../../../models/Product";
import CartItem from "./CartItem";

const useStyles = createUseStyles({
  row: {
    display: "flex",
    justifyContent: "space-between",
  },
  col1: {
    flex: 1,
    color: theme.colors.white,
  },
  col2: {
    flex: 2,
    color: "white",
  },
  block: {
    backgroundColor: theme.colors.lightGrey,
    padding: 20,
    margin: 20,
    marginTop: 170,
    marginBottom: 80,
    borderRadius: 12,
  },
});

type CartProps = {
  deleteItem: (productList: CartItemType) => Promise<void>;
  productList: CartItemType[];
  addToCart: (product: Product) => void;
  onAdd: (product: CartItemType) => void;
  onRemove: (product: CartItemType) => void;
};

const Cart: React.FC<CartProps> = ({
  productList,
  onAdd,
  onRemove,
  deleteItem,
}) => {
  const classes = useStyles();
  const cartTotal = CartHelpers.calculateCartTotal(productList);
  const shippingPrice = cartTotal > 50 ? 0 : 5;
  const taxPrice = cartTotal * 0.2;
  const totalPrice = cartTotal + taxPrice + shippingPrice;

  return (
    <aside className={`${classes.block} ${classes.col1}`}>
      <h2>Ostukorvi sisu</h2>
      <div>
        {productList.length === 0 && <p>Ostukorv on tühi.</p>}
        <div>
          {productList?.map((el) => (
            <CartItem
              product={el}
              onAdd={onAdd}
              onRemove={onRemove}
              deleteItem={deleteItem}
            />
          ))}
        </div>
      </div>

      <>
        <hr></hr>
        <div className={classes.row}>
          <div className={classes.col2}>Summa</div>
          <div className={classes.col1}>€{cartTotal.toFixed(2)}</div>
        </div>
        <div className={classes.row}>
          <div className={classes.col2}>Käibemaks</div>
          <div className={classes.col1}>€{taxPrice.toFixed(2)}</div>
        </div>
        <div className={classes.row}>
          <div className={classes.col2}>Transport</div>
          <div className={classes.col1}>€{shippingPrice.toFixed(2)}</div>
        </div>
        <div className={classes.row}>
          <div className={classes.col2}>
            <strong>KOKKU</strong>
          </div>
          <div className={classes.col1}>
            {productList.length > 0 && <strong>{`${totalPrice} €`} </strong>}
          </div>
        </div>
        <hr />
        <div className={classes.row}>
          <button onClick={() => alert("Ost on sooritatud!")}>
            Soorita ost!
          </button>
        </div>
      </>
    </aside>
  );
};

export default Cart;
