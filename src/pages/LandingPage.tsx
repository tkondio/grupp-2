import React from "react";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";
import theme from "../common/theme";

const useStyles = createUseStyles({
  catchphrase: {
    marginLeft: 120,
    paddingTop: 320,
    fontSize: 40,
    color: "white",
  },
  landingLinks: {
    marginTop: 120,
    marginLeft: 220,
    display: "flex",
    flexDirection: "column",
  },
  landingLink: {
    padding: 20,
    textDecoration: "none", 
    color: theme.colors.white,
    fontSize: 40,
  },
  linkSeparator: {
    borderColor: theme.colors.lightGreen,
    borderTop: "1px solid", 
    marginLeft: 0, 
    marginRight: 0, 
    width: 180,
  },
  background: {
    backgroundPosition: theme.backgroundImage.backgroundPosition,
    backgroundSize: theme.backgroundImage.backgroundSize,
    backgroundRepeat: theme.backgroundImage.backgroundRepeat,
    width: theme.backgroundImage.width,
    height: theme.backgroundImage.width,
  },
});

const LandingPage: React.FC = () => {
  const classes = useStyles();

  return (
    <div
      className={classes.background} style={{
        //suvaline placeholder pilt
        backgroundImage: `url(${"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-three-females-in-slippers-royalty-free-image-1659569918.jpg"})`,
      }}
    >
      <div className={classes.catchphrase}>Sinu susside kodu.</div>

      <div className={classes.landingLinks}>
          <Link to="./Shop" className={classes.landingLink}>
            MEHED
          </Link>
          <div className={classes.linkSeparator} ></div>

          <Link to="./Shop" className={classes.landingLink}>
            NAISED
          </Link>
      </div>
    </div>
  );
};

export default LandingPage;
