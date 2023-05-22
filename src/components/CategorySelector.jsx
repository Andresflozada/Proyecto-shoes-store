import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(5),
  },
  title: {
    marginBottom: theme.spacing(2),
    textAlign: 'center',
  },
  categoryContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1),
    width: "100%",
    alignItems: 'center',
  },
  categoryOption: {
    backgroundColor: '#D9D9D9', // Fondo gris
    color: '#000000', // Letras negras
    borderRadius: '12px', // Bordes redondeados
    padding: theme.spacing(2),
    width: '140px',
    height: '38px',
    '&.MuiButton-root': {
      borderRadius: '12px', // Bordes redondeados
    },
  },
}));

export default function CategorySelector() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography variant="h6" className={classes.title}>
        Select a category
      </Typography>
      <ButtonGroup
        // variant="contained"
        // color="secondary"
        aria-label="category buttons"
        className={classes.categoryContainer}
      >
        <Button className={classes.categoryOption}>Women</Button>
        <Button className={classes.categoryOption}>Men</Button>
        <Button className={classes.categoryOption}>Kids</Button>
      </ButtonGroup>
    </Box>
  );
}
