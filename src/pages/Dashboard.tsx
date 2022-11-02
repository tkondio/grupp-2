import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";
import { getCurrentUser } from "../api/controller/authController";
import theme from "../common/theme";
import useEffectAsync from "../common/useEffectAsync";
import ItemCard from "../components/ItemCard";
import { AuthUser } from "../models/AuthUser";
import { Product } from "../models/Product";

const useStyles = createUseStyles({
  background: {
    backgroundPosition: theme.backgroundImage.backgroundPosition,
    backgroundSize: theme.backgroundImage.backgroundSize,
    backgroundRepeat: theme.backgroundImage.backgroundRepeat,
    height: "100vh",

    backgroundImage:
      "url(https://images.pexels.com/photos/2909067/pexels-photo-2909067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
  },
  page: {
    display: "flex",
  },
  sidepanel: {
    display: "flex",
    flexDirection: "column",
    position: "fixed",
    width: 300,
    height: "100vh",
    backgroundColor: theme.colors.lightGreen,
    opacity: 0.8,
    paddingTop: 90,
    marginTop: 80,
  },
  userInfo: {
    color: "white",
    padding: 20,
  },
  productArea: {
    distplay: "flex",
    padding: 20,
    paddingTop: 90,
    marginLeft: 300,
    color: theme.colors.white,
    backgroundColor: theme.colors.lightGrey,
    opacity: 0.8,
    marginTop: 80,
  },
  toShop: {
    display: "flex",
    alignSelf: "flex-end",
    marginBottom: 200,
    marginleft: 700,
    paddingTop: 30,
    color: theme.colors.white,
    textDecoration: "none",
  },

  recommendedBox: {
    display: "flex",
    width: 990,
    paddingTop: 30,
    justifyContent: "space-between",
  },
});

const Dashboard: React.FC = () => {
  const classes = useStyles();
  const [currentUser, setCurrentUser] = useState<AuthUser | null>(null);

  useEffectAsync(async () => {
    const response = await getCurrentUser();
    if (response.isSuccess === true) {
      setCurrentUser(response.body);
    }
  }, []);

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
      <div>
        <div className={classes.page}>
          <div className={classes.sidepanel}></div>

          <div className={classes.productArea}>
            <div>
              Tere tulemast!
              {`${currentUser?.firstName} ${currentUser?.lastName}`}
            </div>
            Soovitame sulle...
            <div className={classes.recommendedBox}>
              {products.map((product) => (
                <ItemCard product={product} key={product.id} />
              ))}
            </div>
            <Link className={classes.toShop} to={"./shop"}>
              liigu poodi, et avastada veel susse!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
