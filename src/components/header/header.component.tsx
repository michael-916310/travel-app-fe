import React from 'react-dom';
import {useAppSelector, useAppDispatch} from './../../store/hooks';

import LanguageList from './header.language.component';

import {setCountryListFilterAC} from './../../store/countryListSlice';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles, createStyles, Theme } from '@material-ui/core/styles';

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
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.black, 0.05),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.black, 0.1),
      },
      '&:focus': {
        backgroundColor: fade(theme.palette.common.black, 0.5),
      },
      marginRight: 'auto',
      marginLeft: 'auto',
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
      '&:focus': {
        backgroundColor: fade(theme.palette.common.black, 0.1),
      },
    },
  })
)

function Header(){

  const classes = useStyle();

  const filterValue = useAppSelector((store)=>{return store.countryList.filter});
  const dispatch = useAppDispatch();

  return (
    <Container component="header" maxWidth="lg" className={classes.container}>
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
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              value = {filterValue}
              onChange = {(event)=>{dispatch(setCountryListFilterAC(event.target.value))}}
              autoFocus
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={3}>
          <LanguageList/>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Header;