import React from "react";

import { createUseStyles } from "react-jss";
import theme from "../../common/theme";
import Cart from "./components/Cart";
import Header from "../../components/Header";
import Main from "./components/Main";
//import data from "../components/data";

const useStyles = createUseStyles({
  background: {
    //backgroundPosition: theme.backgroundImage.backgroundPosition,
    //backgroundSize: theme.backgroundImage.backgroundSize,
    // backgroundRepeat: theme.backgroundImage.backgroundRepeat,
    // width: theme.backgroundImage.width,
    // height: theme.backgroundImage.height,
    //backgroundAttachment: theme.backgroundImage.backgroundAttachment,
    backgroundImage: "url(images/grass.jpeg)",
    backgroundColor: theme.colors.middleGreen,
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
  },
  col2: {
    flex: 2,
    color: "white",
  },
  block: {
    backgroundColor: theme.colors.lightGrey,
    padding: 100,
    margin: 50,
    borderRadius: 12,
  },
});

const CartDemo = () => {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <Header />
      <div className={classes.row}>
        <Main />
        <Cart />
      </div>
    </div>
  );
};

export default CartDemo;
