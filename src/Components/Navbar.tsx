import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUseStyles } from 'react-jss';
import theme from '../common/theme';
import { removeAuthToken } from '../helpers/authHelpers';

const useStyles = createUseStyles({
  container: {
    background: theme.colors.gradient,
    position: 'fixed',
    width: '100%',
    height: '80px',
    top: '0',
    color: theme.colors.white,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0px 60px 0px 0px',
    // backgroundColor: "transparent",
    fontFamily: theme.font.fontFamily,
  },
  rightSide: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontWeight: 400,
    fontFamily: theme.font.fontFamily,
    letterSpacing: 1,
    color: "white",
  },
  logo: {
    left: 20,
    top: 9,
    width: 70,
  },
  icons: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    overflow: 'hidden',
    display: 'inline-flex',
    float: 'left',
  },
  img: {
    textAlign: 'center',
    padding: 10,
    textDecoration: 'none',
    opacity: 0.6,
    transition: 0.3,
    '&:hover': {
      opacity: 1,
    },
  },
  logoutButton: {
    cursor: 'pointer',
    height: 22,
  },
});

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    removeAuthToken();
    navigate("/");
  };
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Link to="/">
        <div>
          <img
            src="images/SINUSUSS.png"
            alt="LOGO"
            className={classes.logo}
          />
        </div>
      </Link>
      <div className={classes.title}>Sussikaubamaja <b>SINU SUSS</b></div>
      <div>
      <div className={classes.rightSide}>
      <Link to="/dashboard">
          <img
            src="images/basketicon.png"
            alt="Account"
            className={classes.img}
          />
      </Link>
        <Link to="/login">
            <img
              src="images/accounticon.png"
              alt="Account"
              className={classes.img}
            />
        </Link>
        <div>
          <img
            onClick={handleLogout}
            src="images/logout.png"
            alt="logout"
            className={`${classes.logoutButton} ${classes.img}`}
          />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
