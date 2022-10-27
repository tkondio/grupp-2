import React from 'react'
import { useLocation } from "react-router-dom";
import { createUseStyles } from "react-jss";
import theme from '../common/theme';

const useStyles = createUseStyles({
    container: {
        height: "70px",
        background: "transparent",
        bottom: "0",
        position: "fixed",
        width: "100%"
    },
    text: {
        color: theme.colors.white,
        fontWeight: "bold",
        paddingLeft: "20px",
        paddingTop: "15px"
    }
})

const Footer: React.FC<{}>= () => {
    const location = useLocation();
    const classes = useStyles();

  return (
    <footer className={classes.container}>
        <div className={classes.text}>© COPYRIGHT 2022 // Sussimeistrid</div>
    </footer>
  )
}




export default Footer