import React from 'react';
import { makeStyles, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'sticky',
    top: 0,
  },
  navbar: {
    border: '1px solid',
    padding: '15px 20px',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Grid container>
        <Grid item xs={12}>
          <Grid
            container
            direction='row'
            justify='center'
            alignItems='center'
            className={classes.navbar}
          >
            <Grid>
              <Typography className={classes.title}>
                SmartCow Frontend Assignment Task 1
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Navbar;
