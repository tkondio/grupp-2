import React from "react";
import { useLocation, Link } from "react-router-dom";
import NavigationPath from "../routes/NavigationPath";
import { createUseStyles } from "react-jss";
import theme from "../common/theme";

const useStyles = createUseStyles({
  container: {
    background: theme.colors.gradient,
    position: "sticky",
    height: "80px",
    top: "0",
    color: theme.colors.white,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0px 20px",
  },
  title: {
    fontSize: 20,
    fontWeight: 400,
    color: theme.colors.white,
  },
  logo: {
    left: 20,
    top: 9,
    width: 70,
  },
  icons: {
    listStyleType: "none",
    margin: 0,
    padding: 0,
    overflow: "hidden",
    display: "inline-flex",
    float: "left",
  },
  img: {
    color: theme.colors.white,
    textAlign: "center",
    padding: 16,
    textDecoration: "none",
    opacity: 0.6,
    transition: 0.3,
    "&:hover": {
      opacity: 1,
    },
  },
});

const Navbar: React.FC = () => {
  const location = useLocation();
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Link to="/">
        <div>
          <img src="images/SINUSUSS.png" alt="LOGO" className={classes.logo} />
        </div>
      </Link>
      <div className={classes.title}>Sussikaubamaja SINU SUSS</div>
      <ul className={classes.icons}>
        <li>
          <img
            className={classes.img}
            src="images/searchicon.png"
            alt="Search" /*onClick={this.myfunction}*/
          />
        </li>
        <li>
          <div>
            {NavigationPath.map((el, idx) => (
              <Link
                className="link"
                to={el.path}
                key={idx}
                style={{
                  color: "white",
                  textDecoration:
                    location.pathname === el.path ? "underline" : "none",
                }}
              >
                <img
                  src={`images/${el.icon}.png`}
                  alt={el.icon}
                  className={classes.img}
                />
              </Link>
            ))}
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
