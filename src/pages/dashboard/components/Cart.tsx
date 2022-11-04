import React from "react";
//import CartItem from "./CartItem";
import { createUseStyles } from "react-jss";
import { addCartItem } from "../../../api/controller/productController";
import theme from "../../../common/theme";
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
    cursor: "progress",
  },
});

type CartProps = {
  productList: CartItemType[];
  addToCart: (product: Product) => void;
};

const Cart: React.FC<CartProps> = ({ productList }) => {
  const classes = useStyles();
  const cartTotal = CartHelpers.calculateCartTotal(productList);

  return (
    <aside className={`${classes.block} ${classes.col1}`}>
      <h2>Ostukorvi sisu</h2>
      <div>
        {productList.length === 0 && <p>Ostukorv on tühi.</p>}
        <div>
          {productList?.map((el) => (
            <CartItem product={el} addToCart={addCartItem} />
          ))}
        </div>
      </div>

      <>
        <hr></hr>
        <div className={classes.row}>
          <div className={classes.col2}></div>
          <div className={classes.col1}>€</div>
        </div>
        <div className={classes.row}>
          <div className={classes.col2}>Käibemaks</div>
          <div className={classes.col1}>€ </div>
        </div>
        <div className={classes.row}>
          <div className={classes.col2}>Transport</div>
          <div className={classes.col1}>€</div>
        </div>
        <div className={classes.row}>
          <div className={classes.col2}>
            <strong>KOKKU</strong>
          </div>
          <div className={classes.col1}>
            {productList.length > 0 && <strong>{`${cartTotal} €`} </strong>}
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
