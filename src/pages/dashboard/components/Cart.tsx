import React from "react";
//import CartItem from "./CartItem";
import { createUseStyles } from "react-jss";
import theme from "../../../common/theme";
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

const Cart: React.FC = (props) => {
  const classes = useStyles();
  return (
    <aside className={`${classes.block} ${classes.col1}`}>
      <h2>Ostukorvi sisu</h2>
      <div>
        <CartItem />
      </div>

      <>
        <hr></hr>
        <div className={classes.row}>
          <div className={classes.col2}>Summa</div>
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
            <strong>€</strong>
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