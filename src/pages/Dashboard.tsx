import React from "react";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";
import theme from "../common/theme";
import ItemCard from "../components/ItemCard";
import TemporaryUserField from "../components/TemporaryUserField";
import { Product } from "../models/Product";
import { TemporaryUser } from "../models/TemporaryUser";

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

  const temporaryUser: TemporaryUser[] = [
    { id: "u1", temporaryName: "Jaan", temporarySurname: "Tamm" },
  ];

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
      <div>
        <div className={classes.page}>
          <div className={classes.sidepanel}></div>

          <div className={classes.productArea}>
            <div>
              Tere tulemast!
              {temporaryUser.map((temporaryUser) => (
                <TemporaryUserField
                  temporaryUser={temporaryUser}
                  key={temporaryUser.id}
                />
              ))}
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
