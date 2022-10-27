import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import theme from "../common/theme";


const useStyles = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10, 
  },
  header: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "32px",
    lineHeight: "108.02%",
    alignItems: "center",
    letterSpacing: "-0.02em",
    color: "#FFFFFF",
    textDecoration: "none",
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
    "&::placeholder":{
      fontSize: "20px",
      fontFamily: "Montserrat",
      fontStyle: "normal",
      fontWeight: "300",
      color: "#324327",
    }
  },
  registerButton: {
    width: "169px",
    height: "43px",
    fontFamily: "Montserrat",
    fontStyle: "bold",
    fontWeight: "600",
    fontSize: "32px",
    lineHeight: "108.02%",
    alignItems: "center",
    letterSpacing: "-0.02em",
    color: "#FFFFFF",
    background: "none",
    border: "none",
    textDecoration: "none",
    "&:hover": {
      color: "#324327",
    },
  },
  terms: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: "20px",
    color: "#FFFFFF",
    lineheight: "108.02%",
    alignItems: "center",
  },
  backToLogin: {
   
    fontFamily: "Montserrat",
    fontStyle: "bold",
    fontWeight: "300",
    fontSize: "20px",
    lineHeight: "108.02%",
    alignItems: "center",
    letterSpacing: "-0.02em",
    color: "#FFFFFF",
    background: "none",
    border: "none",
    textDecoration: "none",
    "&:hover": {
      color: "#324327",
    },
  },
});
export const Registerapp = (props: {
  onFormSwitch: (arg0: string) => void;
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const classes = useStyles();

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className={classes.container}>
      <form className={classes.loginform} onSubmit={handleSubmit}>
      <label className={classes.header}> Registreeri kasutajaks </label>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          name="name"
          id="name"
          placeholder="Sisesta oma nimi siia"
          type="text"
          className={classes.inputField}
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Sisesta oma e-mail siia"
          id="email"
          name="email"
          className={classes.inputField}
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Sisesta oma parool siia"
          id="password"
          name="password"
          className={classes.inputField}
        />
        <label className={classes.terms}> Kliendiks registreerudes nõustute meie kliendiandmete töötlemise tingimustega </label>
        <button className={classes.registerButton} type="submit" onClick={() => props.onFormSwitch("login")}>REGISTREERI</button>
      </form>
      <button className={classes.backToLogin} onClick={() => props.onFormSwitch("login")}>
        Sul on juba kasutaja? Logi sisse <b>siin</b>
      </button>
    </div>
  );
};