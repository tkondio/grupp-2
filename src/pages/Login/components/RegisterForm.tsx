import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../../api/controller/authController";
import theme from "../../../common/theme";
import { setAuthToken } from "../../../helpers/authHelpers";
//import registerUser

const useStyles = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
  header: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "32px",
    lineHeight: "108.02%",
    letterSpacing: "-0.02em",
    color: theme.colors.white,
    textDecoration: "none",
    marginBottom: "30px",
    marginTop: "50px",
  },
  loginform: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 8,
  },
  inputField: {
    boxSizing: "border-box",
    width: "451px",
    height: "53px",
    fontSize: "20px",
    fontFamily: theme.font.fontFamily,
    color: theme.colors.darkGreen,
    padding: "12px 12px",
    background: theme.colors.inputBoxColor,
    border: "1px solid #324327",
    "&::placeholder": {
      fontStyle: "normal",
      fontWeight: "300",
      color: theme.colors.darkGreen,
    },
  },
  registerButton: {
    width: "170px",
    height: "43px",
    fontFamily: theme.font.fontFamily,
    fontWeight: "600",
    fontSize: "32px",
    letterSpacing: "-0.02em",
    color: theme.colors.white,
    background: "none",
    border: "none",
    textDecoration: "none",
    "&:hover": {
      color: theme.colors.sageGreen,
      cursor: "pointer",
    },
  },
  terms: {
    marginTop: 20,
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: "20px",
    color: theme.colors.white,
  },
  backToLogin: {
    fontFamily: "Montserrat",
    fontStyle: "bold",
    fontWeight: "300",
    fontSize: "20px",
    letterSpacing: "-0.02em",
    color: theme.colors.white,
    background: "none",
    border: "none",
    textDecoration: "none",
    "&:hover": {
      fontWeight: "600",
      cursor: "pointer",
    },
  },
});
export const RegisterForm = (props: {
  onFormSwitch: (arg0: string) => void;
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const classes = useStyles();

  const navigate = useNavigate();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const newUser = {
      email,
      password,
      firstName,
      lastName,
    };
    const response = await registerUser(newUser);
    if (response.isSuccess === true) {
      const { accessToken } = response.body;
      if (accessToken) {
        setAuthToken(accessToken);
        navigate("/dashboard");
      }
    }
  };

  return (
    <div className={classes.container}>
      <form className={classes.loginform} onSubmit={handleSubmit}>
        <label className={classes.header}> Registreeri kasutajaks </label>
        <input
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
          name="firstName"
          id="firstName"
          placeholder="Eesnimi"
          type="text"
          className={classes.inputField}
        />
        <input
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
          name="lastname"
          id="lastname"
          placeholder="Perekonnanimi"
          type="text"
          className={classes.inputField}
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="E-mail"
          id="email"
          name="email"
          className={classes.inputField}
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Parool"
          id="password"
          name="password"
          className={classes.inputField}
        />
        <label className={classes.terms}>
          Kliendiks registreerudes n??ustud meie kliendiandmete t????tlemise
          tingimustega.
        </label>
        <button 
        className={classes.registerButton} 
        type="submit"
        disabled={(firstName && lastName && password && email) === ""}>
          REGISTREERI</button>
      </form>
      <button
        className={classes.backToLogin}
        onClick={() => props.onFormSwitch("login")}
      >
        Sul on juba kasutaja? Logi sisse siin.
      </button>
    </div>
  );
};