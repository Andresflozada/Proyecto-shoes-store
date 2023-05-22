import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, AppBar, Toolbar } from "@material-ui/core";

import Header from "../Components/Header";
import PublishForm from "../Components/PublishForm";
import CategorySelector from "../Components/CategorySelector";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  mainContainer: {
    flexGrow: 1,
    display: "flex",
    alignItems: "stretch",
    marginTop: theme.spacing(5),
  },
  sidebar: {
    width: "20%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRight: "1px solid #000000",
    marginRight: theme.spacing(2),
  },
  mainContent: {
    width: "80%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Header />
      </AppBar>
      <Box className={classes.mainContainer}>
        <Box className={classes.sidebar}>
          <CategorySelector />
        </Box>
        <Box className={classes.mainContent}>
          <PublishForm />
        </Box>
      </Box>
    </div>
  );
}

export default App;
