import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import { getProductList } from "../../../api/controller/productController";
import theme from "../../../common/theme";
import useEffectAsync from "../../../common/useEffectAsync";
import { Product } from "../../../models/Product";
import ItemCard from "./ItemCard";

const useStyles = createUseStyles({
  col2: {
    flex: 2,
    color: "white",
  },
  block: {
    backgroundColor: theme.colors.lightGrey,
    padding: 20,
    margin: 20,
    marginTop: 170,
    borderRadius: 12,
  },
  gridItem: {
    display: "grid",
    gridTemplateColumns: "auto auto",
    gap: 10,
  },
});

const Main = () => {
  const classes = useStyles();
  const [productList, setProductList] = useState<Product[] | null>(null);

  useEffectAsync(async () => {
    const response = await getProductList();
    if (response.isSuccess === true) {
      setProductList(response.body);
    }
  }, []);

  return (
    <main className={`${classes.block} ${classes.col2}`}>
      <h2>Tooted</h2>
      <div>
        <div className={classes.gridItem}>
          {productList?.map((product) => (
            <ItemCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Main;
