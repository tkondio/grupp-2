import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import theme from "../common/theme";
import { Link } from "react-router-dom";
const useStyles = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
  },
  loginform: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 24,
  },
  inputField: {
    boxSizing: "border-box",
    width: "451px",
    height: "53px",
    background: "rgba(255, 255, 255, 0.67)",
    borderbottom: "1px solid #000000",
    "&::placeholder": {
      fontSize: "20px",
      fontFamily: "Montserrat",
      fontStyle: "normal",
      fontWeight: "300",
      color: "#324327",
    },
  },
  forgotPassword: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: "20px",
    color: "#FFFFFF",
    lineheight: "108.02%",
    alignItems: "center",
  },
  logInButton: {
    fontFamily: "Montserrat",
    fontStyle: "bold",
    fontWeight: "600",
    fontSize: "32px",
    lineHeight: "108.02%",
    alignItems: "center",
    letterSpacing: "-0.02em",
    color: "#FFFFFF",
    textDecoration: "none",
    "&:hover": {
      color: "#324327",
    },
  },
  letsRegister: {
    width: "446px",
    height: "43px",
    fontFamily: "Montserrat",
    fontStyle: "bold",
    fontWeight: "450",
    fontSize: "24px",
    lineHeight: "108.02%",
    letterSpacing: "-0.02em",
    color: "#FFFFFF",
    background: "none",
    border: "none",
    "&:hover": {
      fontWeight: "600",
    },
  },
  background: {
    backgroundPosition: theme.backgroundImage.backgroundPosition,
    backgroundSize: theme.backgroundImage.backgroundSize,
    backgroundRepeat: theme.backgroundImage.backgroundRepeat,
    width: theme.backgroundImage.width,
    height: theme.backgroundImage.width,
  },
});
export const Loginapp = (props: { onFormSwitch: (arg0: string) => void }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const classes = useStyles();
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(email);
  };
  return (
    <div className={classes.container}>
      <form className={classes.loginform} onSubmit={handleSubmit}>
        <div>
          {" "}
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Sisesta oma e-mail siia"
            id="email"
            name="email"
            className={classes.inputField}
          />{" "}
        </div>
        <div>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Sisesta oma parool siia"
            id="password"
            name="password"
            className={classes.inputField}
          />{" "}
        </div>
        <div>
          {" "}
          <label className={classes.forgotPassword}>
            {" "}
            Unustasid parooli? Vajuta <b>SIIA</b>
          </label>
        </div>
        <Link to="/shoppingbag" className={classes.logInButton}>
          LOGI SISSE
        </Link>
      </form>     
      <button
        className={classes.letsRegister}
        onClick={() => props.onFormSwitch("register")}
      >
        Ei ole kasutajat? Registreeri siin
      </button>
    </div>
  );
};
