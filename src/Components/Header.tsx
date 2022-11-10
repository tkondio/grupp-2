import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import { getCurrentUser } from "../api/controller/authController";
import theme from "../common/theme";
import useEffectAsync from "../common/useEffectAsync";
import { AuthUser } from "../models/AuthUser";

const useStyles = createUseStyles({
  container: {
    //background: theme.colors.lightGrey,
    position: "absolute",
    width: "100%",
    color: theme.colors.white,
    marginTop: 80,
    textAlign: "center",
  },
});

const Header = () => {
  const classes = useStyles();
  const [currentUser, setCurrentUser] = useState<AuthUser | null>(null);

  useEffectAsync(async () => {
    const response = await getCurrentUser();
    if (response.isSuccess === true) {
      setCurrentUser(response.body);
    }
  }, []);

  return (
    <header className={classes.container}>
      <div>
        {/*  <h1>Tere, {`${currentUser?.firstName} ${currentUser?.lastName}`}!</h1> */}
      </div>
    </header>
  );
};

export default Header;
