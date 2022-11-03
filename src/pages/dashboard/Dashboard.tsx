import React, { useState } from "react";

import { createUseStyles } from "react-jss";
import theme from "../../common/theme";
import Cart from "./components/Cart";
import Header from "../../components/Header";
import ItemCard from "./components/ItemCard";
import { Product } from "../../models/Product";
import useEffectAsync from "../../common/useEffectAsync";
import { CartItemType } from "../../models/Cart";
import {
  addCartItem,
  getProductList,
} from "../../api/controller/productController";

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
  block2: {
    backgroundColor: theme.colors.lightGrey,
    padding: 20,
    margin: 20,
    marginTop: 170,
    marginBottom: 80,
    borderRadius: 12,
  },
  gridItem: {
    display: "grid",
    gridTemplateColumns: "auto auto",
    gap: 10,
  },
});

const Dashboard = () => {
  const [productList, setProductList] = useState<Product[] | null>(null);
  const [cartItemList, setCartItemList] = useState<CartItemType[]>([]);
  const classes = useStyles();

  useEffectAsync(async () => {
    const response = await getProductList();
    if (response.isSuccess === true) {
      setProductList(response.body);
    }
  }, []);

  const addToCart = async (product: Product) => {
    const cartItem = {
      name: product.name,
      price: product.price,
      size: product.size,
      imageUrl: product.imageUrl,
    };

    const response = await addCartItem(cartItem);
    if (response.isSuccess === true) {
      setCartItemList([...cartItemList, response.body]);
    }
  };

  return (
    <div className={classes.background}>
      <Header />

      <div className={classes.row}>
        <main className={`${classes.block2} ${classes.col2}`}>
          <h2>Tooted</h2>
          <div>
            <div className={classes.gridItem}>
              {productList?.map((el) => (
                <ItemCard product={el} addToCart={addToCart} />
              ))}
            </div>
          </div>
        </main>
        <Cart productList={cartItemList} addToCart={addToCart} />
      </div>
    </div>
  );
};

export default Dashboard;
