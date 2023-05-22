import React from "react";
import TextField from "@mui/material/TextField";

import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing(5),
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
    width: "300px",
  },
  title: {
    marginBottom: theme.spacing(4),
  },
}));

export default function PublishForm() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography variant="h4" className={classes.title}>
        INCLUDE SOME DETAILS
      </Typography>
      <Box className={classes.formContainer}>
        <TextField
          label="Advertisement title"
          variant="outlined"
          color="secondary"
        />
        <TextField label="Description" variant="outlined" color="secondary" />
        <TextField
          label="Contact Number"
          variant="outlined"
          color="secondary"
        />
        <TextField label="SET A PRICE" variant="outlined" color="secondary" />
      </Box>
    </Box>
  );
}
