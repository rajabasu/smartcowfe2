import React from 'react';
import clsx from 'clsx';
import {
  makeStyles,
  Grid,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Hidden,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    padding: 10,
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    [theme.breakpoints.down('xs')]: {
      fontSize: 20,
    },
  },
}));

const Navbar = ({ handleDrawerOpen, open }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <AppBar
        position='fixed'
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <Hidden xsDown>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              onClick={handleDrawerOpen}
              edge='start'
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>

          <Grid style={{ width: '100%' }}>
            <Typography
              variant='h6'
              noWrap
              align='center'
              className={classes.title}
            >
              SmartCow Frontend Assignment Task 1
            </Typography>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
