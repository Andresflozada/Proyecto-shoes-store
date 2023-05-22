import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Box } from "@material-ui/core";
import logo from "../assets/logotipo.ico";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "#FFFFFF",
    color: "#fff",
    height: 80,
    position: "relative",
  },
  logoContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    display: "flex",
    alignItems: "center",
  },
  logo: {
    width: "50px",
    height: "50px",
    marginRight: 10,
    position: "absolute",
    left: "128.12px",
    top: "15px",
  },
  titleContainer: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
    width: "432.8px",
    height: "19.95px",
    left: "499.25px",
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "32px",
    lineHeight: "39px",
    color: "#000000",
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Box className={classes.logoContainer}>
            <img src={logo} alt="logo" className={classes.logo} />
          </Box>
          <Box className={classes.titleContainer}>
            <Typography variant="h6" className={classes.title}>
              PUBLISH YOUR PRODUCT
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
