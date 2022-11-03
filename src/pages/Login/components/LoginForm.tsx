import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import theme from "../../../common/theme";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../../api/controller/authController";
import { setAuthToken } from "../../../helpers/authHelpers";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 20,
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
    fontSize: "20px",
    fontFamily: "Montserrat",
    color: theme.colors.darkGreen,
    padding: "12px 12px",
    background: theme.colors.inputBoxColor,
    border: "1px solid #324327",
    "&::placeholder": {
      fontSize: "20px",
      fontFamily: "Montserrat",
      fontStyle: "normal",
      fontWeight: "300",
      color: theme.colors.darkGreen,
    },
  },
  forgotPassword: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: "20px",
    color: theme.colors.white,
    lineHeight: "108.02%",
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
    color: theme.colors.white,
    textDecoration: "none",
    background: "none",
    border: "none",
    "&:hover": {
      color: theme.colors.sageGreen,
      cursor: "pointer",
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
    color: theme.colors.white,
    background: "none",
    border: "none",
    "&:hover": {
      fontWeight: "600",
      cursor: "pointer",
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
export const LoginForm = (props: { onFormSwitch: (arg0: string) => void }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const classes = useStyles();
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const loginNewUser = {
      email,
      password,
    };

    const response = await loginUser(loginNewUser);
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
        <div>
          {" "}
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="E-mail"
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
            placeholder="Parool"
            id="password"
            name="password"
            className={classes.inputField}
          />{" "}
        </div>
        <div>
          {" "}
          <label className={classes.forgotPassword}>
            {" "}
            Unustasid parooli? Vajuta <b>SIIA</b>!
          </label>
        </div>
        <button className={classes.logInButton} type="submit">
          LOGI SISSE
        </button>
      </form>
      <button
        className={classes.letsRegister}
        onClick={() => props.onFormSwitch("register")}
      >
        Ei ole kasutajat? Registreeri siin.
      </button>
    </div>
  );
};
