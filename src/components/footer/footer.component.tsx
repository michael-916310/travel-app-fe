import React from 'react-dom';

import rs_logo from './rs_school_js.svg';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      fontSize: '1.1rem',
    },
    author: {
      display: 'flex',
      alignItems: 'center',
    },
    rsLogo: {
      width: '4.5rem',
      "&:hover": {
        transform: 'scale(1.1)',
        transition: 'transform 0.5s',
      }
    },
    gitHabLogo: {
      marginLeft: '1rem',
      "&:hover": {
        transform: 'scale(1.15)',
        transition: 'transform 0.5s',
      }
    }
  }),
);

export default function Footer(){

  const classes = useStyles();

  return (
    <Container component="footer" maxWidth="md" className={classes.container}>

      <div className={classes.author}>
        Michael Buranov
        <a
          href='https://github.com/michael-916310'
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon
            className={classes.gitHabLogo}
            color='action'
            fontSize='large'
          />
        </a>
      </div>

      <span>
        2021
      </span>

      <a
        href='https://community-z.com/events/react-rsschool-2021'
        target="_blank"
        rel="noreferrer"
      >
        <img src={rs_logo} className={classes.rsLogo} alt="logo" />
      </a>

    </Container>
  )
}