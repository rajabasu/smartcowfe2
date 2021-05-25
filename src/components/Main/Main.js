import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import {
  makeStyles,
  Grid,
  Typography,
  TextField,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import SideNav from './SideNav';
import { carouselImage } from '../../utils/data';

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
  container: {
    padding: 20,
  },
  carouselProvider: {
    overflow: 'hidden',
  },
  slideDiv: {
    position: 'relative',
  },
  slideText: {
    position: 'absolute',
    top: 100,
    left: 500,
    width: 800,
  },
  dynamicText: {
    color: 'white',
    textAlign: 'center',
    'mix-blend-mode': 'difference',
    fontSize: 50,
    fontWeight: 'bold',
    '& ::-webkit-text-stroke': '2px black',
  },
  ytDiv: {
    position: 'fixed',
    bottom: 20,
    right: 20,
  },
}));

const Main = ({ handleDrawerClose, open }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <SideNav handleDrawerClose={handleDrawerClose} open={open} />
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <Grid className={classes.container}>
          <Grid>
            <CarouselProvider
              naturalSlideWidth={300}
              totalSlides={carouselImage.length}
              isPlaying={true}
              interval={3000}
              visibleSlides={1}
              className={classes.carouselProvider}
              infinite={true}
              isIntrinsicHeight={true}
            >
              <Slider>
                {carouselImage.map((items, i) => (
                  <Slide index={i} key={i}>
                    <Grid className={classes.slideDiv}>
                      <img
                        src={`/images/${items.image}`}
                        alt=''
                        style={{ width: '100%', height: 500 }}
                      />
                      <Grid className={classes.slideText}>
                        <Typography
                          align='center'
                          className={classes.dynamicText}
                        >
                          {items.text}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Slide>
                ))}
              </Slider>
            </CarouselProvider>
          </Grid>
        </Grid>
        <Grid className={classes.ytDiv}>
          <iframe
            width='300'
            height='200'
            src='https://www.youtube.com/embed/_ITiwPMUzho'
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen
          ></iframe>
        </Grid>
      </main>
    </div>
  );
};

export default Main;
