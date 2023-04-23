import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Add } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function Sellbutton() {
  const classes = useStyles();

  return (
    <div>

      <Button
        variant="contained"
        color="default"
        className={classes.button}
        endIcon={<Add />}
      >
        SELL
      </Button>

    </div>
  );
}
