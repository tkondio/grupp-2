import React from "react";
import { createUseStyles } from "react-jss";
import theme from "../common/theme";
import ItemCard from "./ItemCard";

const useStyles = createUseStyles({
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "auto auto",
    backgroundColor: theme.colors.lightGrey,
    padding: 20,
  },
  gridItem: {
    padding: 20,
  },
});

const ProductList: React.FC = () => {
  const classes = useStyles();

  return (
    <div>
      {" "}
      <div className={classes.gridContainer}>
        <div className={classes.gridItem}>
          <ItemCard />
        </div>
        <div className={classes.gridItem}>
          <ItemCard />
        </div>
        <div className={classes.gridItem}>
          <ItemCard />
        </div>
        <div className={classes.gridItem}>
          <ItemCard />
        </div>
        <div className={classes.gridItem}>
          <ItemCard />
        </div>
        <div className={classes.gridItem}>
          <ItemCard />
        </div>
      </div>
    </div>
  );
};

export default ProductList;
