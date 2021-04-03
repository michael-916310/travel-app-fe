import React from 'react-dom';
import LanguageList from './header.language.component';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import logoIcon from './around.svg';

const useStyle = makeStyles((theme:Theme) =>
  createStyles({
    container: {
      background: theme.palette.background.paper,
      minHeight:"4rem",
    },
    logoLink: {
      display: "flex",
      width: "35px",
      height: "35px",
      margin: "5px auto",
      "&:hover": {
        transform: 'scale(1.1)',
        transition: 'transform 0.5s',
      }
    },
  })
)

function Header(){

  const classes = useStyle();

  return (
    <Container component="header" maxWidth="md" className={classes.container}>
      <Grid container justify="space-between" alignItems="center">
        <Grid item xs={12} sm={2}>
          <Link
            href='/'
            rel="noreferrer"
            className={classes.logoLink}
          >
            <img src={logoIcon} alt="logo" />
          </Link>
        </Grid>
        <Grid item xs={12} sm={7} style={{display:"flex", padding:"15px 5px"}}>
          <TextField
            label="Country search"
            type="search"
            variant="outlined"
            style={{marginLeft:"auto", marginRight:"auto"}} />
        </Grid>
        <Grid item xs={12} sm={3}>
          <LanguageList/>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Header;