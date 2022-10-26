import React from "react";
import { createUseStyles } from "react-jss";
import theme from "../common/theme";
import ItemCard from "../components/ItemCard";

// sidepanel
// recommended
// toShop
const useStyles = createUseStyles({
  background: {
    display: "flex",
    backgroundPosition: theme.backgroundImage.backgroundPosition,
    backgroundSize: theme.backgroundImage.backgroundSize,
    backgroundRepeat: theme.backgroundImage.backgroundRepeat,
    backgroundImage:
      "url(https://images.pexels.com/photos/2909067/pexels-photo-2909067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
  },
  sidepanel: {
    display: "flex",
    flexDirection: "column",
    width: 300,
    height: "100vh",
    backgroundColor: theme.colors.lightGreen,
    opacity: 0.8,
  },
  userInfo: {
    color: "white",
    padding: 20,
  },
  productArea: {
    distplay: "flex",
    padding: 20,
    color: theme.colors.white,
  },
  toShop: {
    display: "flex",
    alignSelf: "flex-end",
    marginBottom: 200,
    marginleft: 700,
    paddingTop: 30,
    color: theme.colors.white,
  },

  recommendedBox: {
    display: "flex",
    width: 990,
    paddingTop: 30,
    justifyContent: "space-between",
  },


});

const Account: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <div className={classes.sidepanel}>
        <div className={classes.userInfo}>
          Tere kasutaja!
          <div>Nimi:</div>
          <div>email:</div>
          <div>Aadress:</div>
          <div>Telefon:</div>
        </div>
      </div>

      <div className={classes.productArea}>Soovitame sulle...
      <div className={classes.recommendedBox}>
      <ItemCard></ItemCard>
      <ItemCard></ItemCard>
      <ItemCard></ItemCard>

      </div>
      <div className={classes.toShop}>liigu /selle lingi kaudu/ poodi, et avastada veel susse!</div>

      </div>


      <div className={classes.productArea}>Soovitame sulle...</div>
      <div className={classes.toShop}>
        liigu /selle lingi kaudu/ poodi, et avastada veel susse!
      </div>

    </div>
  );
};

export default Account;
