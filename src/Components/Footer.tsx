import React from "react";
import { useState } from "react";
import { createUseStyles } from "react-jss";
import theme from "../common/theme";

const useStyles = createUseStyles({
  container: {
    height: "70px",
    background: "transparent",
    bottom: "0",
    position: "fixed",
    width: "100%",
  },
  text: {
    color: theme.colors.white,
    fontWeight: "regular",
    paddingLeft: "20px",
    paddingRight: "20px",
    paddingTop: "25px",
    textAlign: "right",
    fontFamily: theme.font.fontFamily,
  },
});

const Footer: React.FC<{}> = () => {
  const classes = useStyles();
  const [currentYear] = useState(() => new Date().getFullYear());

  return (
    <footer className={classes.container}>
      <div className={classes.text}>
        &copy; Copyright {currentYear} || Sussimeistrid
      </div>
    </footer>
  );
};

export default Footer;
