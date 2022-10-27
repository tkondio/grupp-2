import React, { useState } from "react";
import { Loginapp } from "../components/Loginapp";
import { Registerapp } from "../components/Registerapp";

import theme from "../common/theme";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  background: {
    backgroundPosition: theme.backgroundImage.backgroundPosition,
    backgroundSize: theme.backgroundImage.backgroundSize,
    backgroundRepeat: theme.backgroundImage.backgroundRepeat,
    width: theme.backgroundImage.width,
    height: theme.backgroundImage.width,
  },

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

  },
});

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
    <div
    className={classes.background} style={{
      backgroundImage: "url(/images/grass.jpeg)",
    }}>

    <div className={classes.container}>
        {currentForm === "login" ? (
          <Loginapp onFormSwitch={toggleForm} />
        ) : (
          <Registerapp onFormSwitch={toggleForm} />
        )}
      </div>
      </div>

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
