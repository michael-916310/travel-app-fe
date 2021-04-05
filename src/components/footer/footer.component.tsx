import React from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import rs_logoIcon from './rs_school_js.svg';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      background: theme.palette.background.paper,
    },
    grid: {
      minHeight:"4rem",
    },
    author: {
      display: "flex",
      alignItems:"center",
      justifyContent: "center",
      margin: "5px",
    },
    gitHabLogoLink: {
      display: "flex",
      marginLeft: '1rem',
      height: "35px",
      "&:hover": {
        transform: 'scale(1.1)',
        transition: 'transform 0.5s',
      }
    },
    year: {
      textAlign: "center",
      margin: "5px",
    },
    rsLogoLink: {
      display: "flex",
      width: "80px",
      height: "35px",
      margin: "5px auto",
      "&:hover": {
        transform: 'scale(1.1)',
        transition: 'transform 0.5s',
      }
    },
  }),
);

export default function Footer(){

  const classes = useStyles();

  return (
    <Container component="footer" maxWidth="lg" className={classes.container}>
      <Grid container justify="center" alignItems="center" className={classes.grid}>
        <Grid item xs={12} sm={4}>
          <Grid container className={classes.author}>
            <Grid item>
              <Typography>
                Michael Buranov
              </Typography>
            </Grid>
            <Grid item>
              <Link
                href='https://github.com/michael-916310'
                target="_blank"
                rel="noreferrer"
                className={classes.gitHabLogoLink}
              >
                <GitHubIcon
                  color='action'
                  fontSize='large'
                />
              </Link>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography className={classes.year}>
            2021
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Link
            href='https://community-z.com/events/react-rsschool-2021'
            target="_blank"
            rel="noreferrer"
            className={classes.rsLogoLink}
          >
            <img src={rs_logoIcon} alt="logo" />
          </Link>
        </Grid>
      </Grid>
    </Container>
  )
}