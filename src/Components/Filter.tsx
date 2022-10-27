import React from "react";
import { createUseStyles } from "react-jss";
import theme from "../common/theme";

const useStyles = createUseStyles({
  gridContainer: {
    display: "grid",
    backgroundColor: theme.colors.lightGrey,
    padding: 20,
  },
  gridItem: {
    padding: 20,
    border: "1px solid",
    borderColor: theme.colors.darkGreen,
    fontSize: 30,
    textAlign: "center",
  },
});

const Filter = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.gridContainer}>
        <div className={classes.gridItem}>Sorteeri</div>
        <div className={classes.gridItem}>Filtreeri</div>
      </div>
    </div>
  );
};

export default Filter;
