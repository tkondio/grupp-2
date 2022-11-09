import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import { createUseStyles } from "react-jss";
import { deleteCartItem } from "../../../api/controller/productController";
import theme from "../../../common/theme";
import { CartItemType } from "../../../models/Cart";
import { Product } from "../../../models/Product";

const useStyles = createUseStyles({
  row: {
    display: "flex",
    justifyContent: "space-between",
    gap: 10,
    alignItems: "center",
    alignContent: "center",
  },
  col2: {
    flex: 2,
    color: "white",
    textAlign: "center",
  },
  block: {
    backgroundColor: theme.colors.lightGrey,
    padding: 20,
    //margin: 10,
    borderRadius: 12,
    margin: 10,
  },
  img: {
    width: 100,
  },

  plusMinus: {
    fontFamily: "Montserrat",
    fontSize: 14,
    fontWeight: 500,
    borderRadius: "0.6em",
    boxSizing: "border-box",
    margin: "2px",
    width: "25px",
    border: "2px solid white",
    cursor: "pointer",
    backgroundColor: "transparent",
    textAlign: "center",
    color: theme.colors.white,
    "&:hover": {
      color: "#6C7E65",
    },
  },
  buyButton: {
    boxSizing: "border-box",
    appearance: "none",
    backgroundColor: "transparent",
    border: "1px solid white",
    borderRadius: "0.6em",
    color: theme.colors.white,
    cursor: "pointer",
    display: "flex",
    alignSelf: "center",
    //fontSize: "1rem",
    fontWeight: "400",
    lineHeight: "1",
    margin: "20px",
    padding: "5px",
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
type CartItemProps = {
  product: CartItemType;

  /*   addToCart: (product: Product) => void; */
  deleteItem: (productList: CartItemType) => Promise<void>;
};

const CartItem: React.FC<CartItemProps> = ({ product, deleteItem }) => {
  const classes = useStyles();
  const handleDelete = async () => {
    await deleteItem(product);
  };

  return (
    <div className={classes.block}>
      <div className={classes.row}>
        <div className={`${classes.col2} ${classes.img}`}>
          <img
            className={classes.img}
            src={product.imageUrl}
            alt="Toote pilt"
            height="70px"
          />
        </div>
        <div className={classes.col2}>{product.name}</div>
        {/* <div className={classes.col2}>{`Kogus: ${product.qty}`}</div> */}
        <div className={classes.col2}>{`Suurus: ${product.size}`}</div>
        <div className={classes.col2}>{`Hind: ${product.price}€`}</div>
        <div className={classes.col2}>
          <button
            className={classes.buyButton}
            onClick={() => {
              handleDelete();
            }}
          >
            Kustuta
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
