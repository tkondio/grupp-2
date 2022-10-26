import React, { useState } from "react";
import { Loginapp } from "../components/Loginapp";
import { Registerapp } from "../components/Registerapp";
import { createUseStyles } from "react-jss";
import theme from "../common/theme";
import { classicNameResolver } from "typescript";

const useStyles = createUseStyles({
  container: {
    textAlign: "center",
    display: "flex",
    minHeight: "100vh",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.darkGreen,
  },
});

const Login: React.FC = () => {
  const [currentForm, setCurrentForm] = useState("login");
  const classes = useStyles();

  const toggleForm = (formName: React.SetStateAction<string>) => {
    setCurrentForm(formName);
  };

  return (
    <div className={classes.container}>
      {currentForm === "login" ? (
        <Loginapp onFormSwitch={toggleForm} />
      ) : (
        <Registerapp onFormSwitch={toggleForm} />
      )}
    </div>
  );
};

export default Login;
