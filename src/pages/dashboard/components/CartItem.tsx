import React from "react";
import { createUseStyles } from "react-jss";
import theme from "../../../common/theme";
import { CartItemType } from "../../../models/Cart";

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
  },
  img: {
    width: 100,
  },
});

const CartItem: React.FC<CartItemType> = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.block}>
      <div className={classes.row}>
        <div className={`${classes.col2} ${classes.img}`}>
          <img src={props.imageUrl} alt="Toote pilt" />
        </div>
        <div className={classes.col2}>{props.name}</div>
        <div className={classes.col2}>{`Suurus: ${props.size}`}</div>
        <div className={classes.col2}>{`Hind: ${props.price}€`}</div>
        <div className={classes.col2}>
          <button>+</button>
          <button>-</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
