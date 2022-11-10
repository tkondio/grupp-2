import { hover } from "@testing-library/user-event/dist/hover";
import React from "react";
import { createUseStyles } from "react-jss";
import theme from "../../../common/theme";
import CartHelpers from "../../../helpers/cartHelpers";
import { CartItemType } from "../../../models/Cart";
import { Product } from "../../../models/Product";
import CartItem from "./CartItem";
import {} from "react-transition-group";

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
    marginTop: 20,
    marginBottom: 80,
    borderRadius: 12,
  },

  buyButton: {
    boxSizing: "border-box",
    appearance: "none",
    backgroundColor: "transparent",
    border: "2px solid white",
    borderRadius: "0.6em",
    color: theme.colors.white,
    cursor: "pointer",
    display: "flex",
    alignSelf: "center",
    fontSize: "1rem",
    fontWeight: "400",
    lineHeight: "1",
    margin: "20px",
    padding: "1.2em 2.8em",
    textDecoration: "none",
    textAlign: "center",
    textTransform: "uppercase",
    fontFamily: "Montserrat",
    transition: "box-shadow 300ms ease-in-out, color 300ms ease-in-out",
    "&:hover": {
      color: "#fff",
      outline: 0,
      boxShadow: "0 0 40px 40px #6C7E65 inset",
    },
  },
});

type CartProps = {
  productList: CartItemType[];
  addToCart: (product: Product) => void;
  deleteAll: () => Promise<void>;
  deleteItem: (productList: CartItemType) => Promise<void>;
};

const Cart: React.FC<CartProps> = ({ productList, deleteItem, deleteAll }) => {
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
              deleteItem={deleteItem}
              product={el}
              key={el.id}
            />
          ))}
        </div>
      </div>


      <>
        <hr></hr>
        <div className={classes.row}>
          <div className={classes.col2}>Summa</div>
          <div className={classes.col1}>{cartTotal.toFixed(2)}€</div>
        </div>
        <div className={classes.row}>
          <div className={classes.col2}>Käibemaks</div>
          <div className={classes.col1}>{taxPrice.toFixed(2)}€</div>
        </div>
        <div className={classes.row}>
          <div className={classes.col2}>Transport</div>
          <div className={classes.col1}>{shippingPrice.toFixed(2)}€</div>
        </div>
        <div className={classes.row}>
          <div className={classes.col2}>
            <strong>KOKKU</strong>
          </div>
          <div className={classes.col1}>
            {productList.length > 0 && <strong>{`${totalPrice}€`} </strong>}
          </div>
        </div>
        <hr />
        <div className={classes.row}>
          <button
            className={classes.buyButton}
            onClick={() => {
              deleteAll();
              alert(
                "Kas oled kindel, et tahad ostu sooritada? (Valikut nagunii ei ole, vajuta OK ja tasu sularahas Aia 7.)"
              );
            }}
          >
            Soorita ost!
          </button>
          <button
            className={classes.buyButton}
            onClick={deleteAll}
            disabled={productList.length === 0}
          >
            Tühjenda ostukorv!
          </button>
        </div>
      </>
    </aside>
  );
};

export default Cart;