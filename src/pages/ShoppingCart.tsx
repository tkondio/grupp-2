import React from "react";
import { createUseStyles } from "react-jss";
import theme from "../common/theme";
//import Cart from "../components/Cart";
import ItemCard from "../components/ItemCard";
import { Product } from "../models/Product";

const useStyles = createUseStyles({
  background: {
    backgroundPosition: theme.backgroundImage.backgroundPosition,
    backgroundSize: theme.backgroundImage.backgroundSize,
    backgroundRepeat: theme.backgroundImage.backgroundRepeat,
    width: theme.backgroundImage.width,
    height: theme.backgroundImage.height,
    backgroundAttachment: theme.backgroundImage.backgroundAttachment,
    backgroundImage: "url(images/grass.jpeg)",
  },
  page: {
    //display: "flex",
    paddingTop: 100,
    padding: 30,
    justifyContent: "space-evenly",
    color: theme.colors.white,
    gap: 30,
  },
  cart: {
    display: "flex",
    flexDirection: "column",
    width: "400",
    backgroundColor: theme.colors.lightGrey,
    padding: 20,
    float: "right",
  },
  userInfo: {
    color: "white",
    padding: 20,
  },
  productArea: {
    display: "grid",
    color: theme.colors.white,
    float: "left",
    //backgroundColor: theme.colors.lightGrey,
  },
  productList: {
    display: "grid",
    gridTemplateColumns: "auto auto",
    backgroundColor: theme.colors.lightGrey,
    padding: 50,
  },
});

const Dashboard: React.FC = () => {
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
    <div className={classes.background}>
      <div className={classes.page}>
        <div className={classes.productArea}>
          <div className={classes.productList}>
            {products.map((product) => (
              <div>
                <ItemCard product={product} key={product.id} />
              </div>
            ))}
          </div>
        </div>
        <div className={classes.cart}>
          <div className={classes.userInfo}>Ostukorv</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
