import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  InputBase,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import FavoriteIcon from "@material-ui/icons/Favorite";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AddIcon from "@material-ui/icons/Add";
// import Logo from "../assets/logotipo.ico";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "#FFFFFF",
    color: "#000000",
  },
  logo: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#ECECEC",
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
    width: "auto",
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
    width: "100%",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
  actionIcons: {
    display: "flex",
    alignItems: "center",
    marginRight: theme.spacing(2),
  },
}));

const Logo = () => {
  const classes = useStyles();

  return <img src="Logotipo.ico" alt="Logo" />;
 
};

const PageTitle = () => {
  const classes = useStyles();

//   return (
//     <Typography variant="h6" className={classes.title}>
//       My Page
//     </Typography>
//   );
};

const AddButton = () => {
    const classes = useStyles();
    
     return (
       <IconButton color="inherit">
          <Typography variant="h6" className={classes.title}>
   //       Sell <AddIcon />
   //     </Typography>
       </IconButton>
     );
   };

const SearchBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Search..."
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
      />
    </div>
  );
};

const ActionIcons = () => {
  const classes = useStyles();

  return (
    <div className={classes.actionIcons}>
      <IconButton color="inherit">
        <FavoriteIcon />
      </IconButton>
      <IconButton color="inherit">
        <AccountCircleIcon />
      </IconButton>
    </div>
  );
};

export default function MyPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Logo />
          <PageTitle />
          <SearchBar />
          <ActionIcons />
          <AddButton />
        </Toolbar>
      </AppBar>
      {/* Resto del contenido de la página */}
    </div>
  );
}
