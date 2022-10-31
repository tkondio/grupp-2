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
      id: "e1",
      itemTitle: "Hall Suss",
      itemDescription: "Lorem Ipsum Parim Suss: üks suurus sobib kõigile!",
      itemPrice: 29,
    },
    {
      id: "e2",
      itemTitle: "Hele Hall Suss",
      itemDescription: "Lorem Ipsum Naiste Suss: kitsam liist ja kõrgem konts!",
      itemPrice: 29,
    },
    {
      id: "e3",
      itemTitle: "Tume Hall Suss",
      itemDescription:
        "Lorem Ipsum Spordisuss: hea pidamine ja parim kiirendus!",
      itemPrice: 29,
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
