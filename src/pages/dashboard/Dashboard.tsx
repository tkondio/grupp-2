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
  deleteCartItem,
  getProductList,
  getCartItems,
  /* emptyCart */
} from "../../api/controller/productController";
import { AuthUser } from "../../models/AuthUser";
import { getCurrentUser } from "../../api/controller/authController";

const useStyles = createUseStyles({
  container: {
    height: "100vh",
  },
  background: {
    backgroundImage: "url(images/grass.jpeg)",
    backgroundSize: theme.backgroundImage.backgroundSize,
    backgroundRepeat: "repeat",
    height: "100%",
    fontFamily: theme.font.fontFamily,
    overflowY: "auto",
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
    marginTop: 20,
    marginBottom: 80,
    borderRadius: 12,
  },
  gridItem: {
    display: "grid",
    gridTemplateColumns: "auto auto",
    gap: 10,
  },
  welcome: {
    display: "flex",
    justifyContent: "center",
    marginTop: 90,
    color: theme.colors.white,
  },
});

type DashboardProps = {
  productList: CartItemType[];
  onAdd: (product: Product) => void;
  onRemove: (product: Product) => void;
};

const Dashboard = () => {
  const [productList, setProductList] = useState<Product[] | null>(null);
  const [cartItemList, setCartItemList] = useState<CartItemType[]>([]);
  const [currentUser, setCurrentUser] = useState<AuthUser | null>(null);

  const classes = useStyles();

  const onAdd = (product: CartItemType) => {
    const exist = cartItemList.find((x) => x.id === product.id);
    if (exist) {
      setCartItemList(
        cartItemList.map((x) =>
          x.id === product.id
            ? { ...exist, qty: exist.qty && exist.qty + 1 }
            : x
        )
      );
    } else {
      setCartItemList([...cartItemList, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product: CartItemType) => {
    const exist = cartItemList.find((x) => x.id === product.id);
    if (exist?.qty && exist.qty === 1) {
      setCartItemList(cartItemList.filter((x) => x.id !== product.id));
    } else {
      setCartItemList(
        cartItemList.map((x) => {
          if (product.id === x.id && exist?.qty) {
            return { ...x, qty: exist.qty - 1 };
          }
          return x;
        })
      );
    }
  };

  useEffectAsync(async () => {
    const response = await getProductList();
    if (response.isSuccess === true) {
      setProductList(response.body);
    }
  }, []);
  useEffectAsync(async () => {
    const response = await getCartItems();
    if (response.isSuccess === true) {
      setCartItemList(response.body);
    }
  }, []);

  useEffectAsync(async () => {
    const response = await getCartItems();
    if (response.isSuccess === true) {
      setCartItemList(response.body);
    }
  }, []);

  useEffectAsync(async () => {
    const response = await getCartItems();
    if (response.isSuccess === true) {
      setCartItemList(response.body);
    }
  }, []);

  useEffectAsync(async () => {
    const response = await getCurrentUser();
    if (response.isSuccess === true) {
      setCurrentUser(response.body);
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
      setCartItemList([...cartItemList, { ...response.body, qty: 1 }]);
    }
  };

  const deleteItem = async (product: CartItemType) => {
    const response = await deleteCartItem(product);
    if (response.isSuccess === true) {
      const filterItems = cartItemList.filter((el) => product.id !== el.id);
      setCartItemList(filterItems);
    } else {
      alert("ebaõnn");
    }
  };

  const deleteAll = async () => {
    cartItemList.map(async (item) => {
      await deleteCartItem(item);
    });
    setCartItemList([]);
  };

  return (
    <div className={classes.container}>
      <div className={classes.background}>
        <Header />
        <div className={classes.welcome}>
          <h1>Tere, {`${currentUser?.firstName} ${currentUser?.lastName}`}!</h1>
        </div>
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
          <Cart
            deleteItem={deleteItem}
            productList={cartItemList}
            addToCart={addToCart}
            deleteAll={deleteAll}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
