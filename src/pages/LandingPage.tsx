import React from "react";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";
import theme from "../common/theme";

const useStyles = createUseStyles({
  catchphrase: {
    //marginLeft: 120,
    paddingTop: 220,
    fontSize: 30,
    color: "white",
    //position: "absolute",
    width: "455",
    height: "134",
    left: "178",
    top: "425",
    position: "relative",
    //fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: 400,
    //lineHeight: 67,
    textAlign: "left",
    letterSpacing: "-0.075em",
  },
  landingLinks: {
    //marginTop: 120,
    //marginLeft: 220,
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center",
    alignContent: "flex-end",
    position: "relative",
  },
  landingLink: {
    padding: 20,
    textDecoration: "none",
    color: theme.colors.white,
    fontSize: 40,
    transition: "0.3",
    "&:not(:first-child)": {
      borderColor: theme.colors.lightGreen,
      borderTop: "2px solid",
      width: 180,
    },
    "&:hover": {
      color: theme.colors.lightGreen,
    },
  },
  background: {
    backgroundPosition: theme.backgroundImage.backgroundPosition,
    backgroundSize: theme.backgroundImage.backgroundSize,
    backgroundRepeat: theme.backgroundImage.backgroundRepeat,
    width: theme.backgroundImage.width,
    height: theme.backgroundImage.height,
    backgroundAttachment: theme.backgroundImage.backgroundAttachment,
    backgroundImage: "url(images/lpbg2.png)",
  },
  page: {
    padding: 50,
    display: "flex",
    flexDirection: "column",
    gap: 100,
    alignContent: "center",
    alignItems: "center",
  },
});

const LandingPage: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <div className={classes.page}>
        <div className={classes.catchphrase}>
          Enam ei pea kodus paljajalu käima.
        </div>

        <div className={classes.landingLinks}>
          <Link to="/login" className={classes.landingLink}>
            MEHED
          </Link>
          <Link to="/login" className={classes.landingLink}>
            NAISED
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
