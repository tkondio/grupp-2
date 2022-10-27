import React from "react";
import Navbar from "../components/Navbar";
import { createUseStyles } from "react-jss";
import theme from "../common/theme";
import ProductList from "../components/ProductList";
import Filter from "../components/Filter";

const useStyles = createUseStyles({
  background: {
    backgroundPosition: theme.backgroundImage.backgroundPosition,
    backgroundSize: theme.backgroundImage.backgroundSize,
    backgroundRepeat: theme.backgroundImage.backgroundRepeat,
    //width: theme.backgroundImage.width,
    height: theme.backgroundImage.width,
    backgroundAttachment: theme.backgroundImage.backgroundAttachment,
  },
  header: {
    color: theme.colors.white,
    textAlign: "center",
  },
  page: {
    padding: 20,
    display: "flex",
    justifyContent: "space-evenly",
    color: theme.colors.white,
    gap: 30,
  },
  sidepanel: {
    backgroundColor: theme.colors.lightGrey,
    opacity: 0.8,
  },
  productArea: {
    display: "flex",
    padding: 20,
    color: theme.colors.white,
  },
  toShop: {
    display: "flex",
    alignSelf: "flex-end",
    marginBottom: 200,
    marginleft: 700,
    paddingTop: 30,
    color: theme.colors.white,
  },

  recommendedBox: {
    display: "flex",
    width: 990,
    paddingTop: 30,
    justifyContent: "space-between",
  },
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "auto auto auto",
    backgroundColor: theme.colors.lightGrey,
    padding: 50,
  },
  gridContainer2: {
    display: "grid",
    backgroundColor: theme.colors.lightGrey,
    padding: 50,
  },
  gridItem: {
    padding: 50,
  },
  filterAndProducts: {
    display: "flex",
    flexDirection: "row",
  },
});

const Shop: React.FC = () => {
  const classes = useStyles();
  return (
    <div
      className={classes.background}
      style={{
        backgroundImage: "url(/images/grass.jpeg)",
      }}
    >
      <Navbar />
      <div className={classes.header}>
        <h1>Tasuta transport!</h1>
      </div>
      <div className={classes.page}>
        <Filter />
        <ProductList />
      </div>
    </div>
  );
};

export default Shop;
