import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles, Grid, Typography, TextField } from '@material-ui/core';

import SideNav from './SideNav';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  mainDiv: {
    '& > .div:nth-child(3n)': {
      backgroundColor: 'red',
      color: 'black',
    },
  },
  div: {
    padding: 20,
    borderRadius: 5,
    marginBottom: 20,
    '&:nth-child(3n)': {
      border: `1px solid blue`,
    },
  },
  charBox: {
    border: '1px solid',
    borderRadius: 5,
    width: 200,
    height: 200,
    color: 'red',
  },
}));

const Main = ({ handleDrawerClose, open }) => {
  const classes = useStyles();

  const [stringArray, setStringArray] = useState('');
  const [char, setChar] = useState([]);

  console.log(stringArray);

  useEffect(() => {
    if (stringArray) {
      let arr = stringArray.split('');
      console.log(arr);
      setChar(arr);
    } else {
      setChar([]);
    }
  }, [stringArray]);

  return (
    <div className={classes.root}>
      <SideNav handleDrawerClose={handleDrawerClose} open={open} />
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <Grid style={{ marginTop: 20 }}>
          <TextField
            label='Enter anything'
            variant='outlined'
            style={{ width: 500 }}
            onChange={(e) => {
              setStringArray(e.target.value);
            }}
          />
        </Grid>

        <Grid container style={{ marginTop: 20 }}>
          <Grid item xs={12}>
            <Grid
              container
              direction='row'
              justify='flex-start'
              alignItems='flex-start'
              className={classes.mainDiv}
            >
              {char.length > 0 ? (
                <>
                  {char.map((items, i) => (
                    <Grid key={i} className={classes.div}>
                      <Grid container>
                        <Grid item xs={12}>
                          <Grid
                            container
                            direction='row'
                            justify='center'
                            alignItems='center'
                            className={classes.charBox}
                          >
                            <Grid>
                              <Typography style={{ fontSize: 50 }}>
                                {items}
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  ))}
                </>
              ) : null}
            </Grid>
          </Grid>
        </Grid>
      </main>
    </div>
  );
};

export default Main;
