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
        <label htmlFor="name">Full name</label>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          name="name"
          id="name"
          placeholder="Sinu Nimi"
          type="text"
        />
        <label htmlFor="email">E-mail</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        />
        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="******"
          id="password"
          name="password"
        />
        <button type="submit">Logi sisse</button>
      </form>
      <button onClick={() => props.onFormSwitch("login")}>
        Sul on juba kasutaja? Logi sisse siin.
      </button>
    </div>
  );
};
