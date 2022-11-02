import React from "react";
import { createUseStyles } from "react-jss";
import theme from "../common/theme";
import { Product } from "../models/Product";
import ItemCard from "./ItemCard";
//import Product from "./Product";

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

  const products: Product[] = [
    {
      id: "1",
      name: "Hall Suss",
      description: "Lorem Ipsum Parim Suss: üks suurus sobib kõigile!",
      price: 29,
      size: 36,
      imageUrl: "http://localhost:8000/images/shoe-01.jpg",
    },
    {
      id: "2",
      name: "Hall Suss",
      description: "Lorem Ipsum Parim Suss: üks suurus sobib kõigile!",
      price: 29,
      size: 36,
      imageUrl: "http://localhost:8000/images/shoe-01.jpg",
    },
    {
      id: "3",
      name: "Hall Suss",
      description: "Lorem Ipsum Parim Suss: üks suurus sobib kõigile!",
      price: 29,
      size: 36,
      imageUrl: "http://localhost:8000/images/shoe-01.jpg",
    },
    {
      id: "4",
      name: "Hall Suss",
      description: "Lorem Ipsum Parim Suss: üks suurus sobib kõigile!",
      price: 29,
      size: 36,
      imageUrl: "http://localhost:8000/images/shoe-01.jpg",
    },
  ];

  return (
    <main className={`${classes.block} ${classes.col2}`}>
      <h2>Tooted</h2>
      <div /*className={classes.gridContainer}*/>
        <div className={classes.gridItem}>
          {products.map((product) => (
            <ItemCard product={product} key={product.id} />
          ))}
          {/*  {products.map((product: { id: React.Key | null | undefined }) => (
          <Product key={product.id} product={product} onAdd={onAdd} />
        ))} */}
        </div>
      </div>
    </main>
  );
};

export default Main;
