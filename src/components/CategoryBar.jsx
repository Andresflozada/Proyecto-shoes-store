import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

const useStyles = makeStyles({
  root: {
    width: 500,
    fontFamily: "Inter",
    fontSize: "50px",
  },
  label: {
    fontFamily: "Inter",
    fontSize: "50px",
  }
});

const CategoryBar = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Home" className={classes.label}/>
      <BottomNavigationAction label="Brands" />
      <BottomNavigationAction label="Women" />
      <BottomNavigationAction label="Men" />
      <BottomNavigationAction label="Kids" />
    </BottomNavigation>
  );
};

export default CategoryBar;
