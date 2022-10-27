import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import theme from "../common/theme";
import { Link } from "react-router-dom";

const useStyles = createUseStyles({

import { classicNameResolver } from "typescript";
import { createUseStyles } from "react-jss";
import theme from "../common/theme";

const useStyles = createUseStyles({

  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    justifyContent: "space-between",
    gap: 50, //ei saa aru, miks ta ulatub vaid Logi Sisse ja Rega ennast tekstile

  },
  loginform: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    gap: 50
    

  },

  inputField: {
    boxSizing: "border-box",
    width: "632px",
    height: "95px",
    background: "rgba(255, 255, 255, 0.67)",
    borderbottom: "1px solid #000000",
  },
   
  letsRegister: {
    position: "center",
    width: "446px",
    height: "43px",
    left: "506px",
    top: "863px",
    fontFamily: "Khula",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: "40px",
    lineHeight: "108.02%", 
    display: "flex",
    alignItems: "center",
    letterSpacing: "-0.065em",
    color: "#FFFFFF"
  },
  
  logInButton: {
    position: "center",
    width: "169px",
    height: "43px",
    left: "666px",
    top: "751px",
    fontFamily: "Khula",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: "40px",
    lineHeight: "108.02%", 
    display: "flex",
    alignItems: "center",
    letterSpacing: "-0.065em",
    color: "#FFFFFF"
  },
  background: {
    backgroundPosition: theme.backgroundImage.backgroundPosition,
    backgroundSize: theme.backgroundImage.backgroundSize,
    backgroundRepeat: theme.backgroundImage.backgroundRepeat,
    width: theme.backgroundImage.width,
    height: theme.backgroundImage.width,
  },
});

  },
});


export const Loginapp = (props: { onFormSwitch: (arg0: string) => void }) => {
  const classes = useStyles();
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
       <div> <input

    <div className={classes.container}>
      <form className={classes.loginform} onSubmit={handleSubmit}>
        <label htmlFor="email">E-mail</label>
        <input

          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Sisesta oma e-mail siia"
          id="email"
          name="email"
          className={classes.inputField}
          
         /> </div>
         <div>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Sisesta oma parool siia"
          id="password"
          name="password"

          className={classes.inputField}
          
        /> </div>
        
          <Link to="/shoppingbag" className={classes.logInButton}>
            Logi sisse
          </Link>
      </form> 
      
      <button className={classes.letsRegister} onClick={() => props.onFormSwitch("register")}> 
        Ei ole kasutajat? Registreeru siin
       </button> 
 </div>
        />
        <button type="submit">Logi sisse</button>
      </form>
      <button onClick={() => props.onFormSwitch("register")}>
        Ei ole kasutajat? Registreeru siin.
      </button>
    </div>

  );
};
function rgba(arg0: number, arg1: number, arg2: number, arg3: number) {
  throw new Error("Function not implemented.");
}

