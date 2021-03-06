import React, {useEffect} from 'react';

import { Link as RouterLink } from "react-router-dom";
import Link from '@material-ui/core/Link';

import {getCountryList, useLang} from './../../app/utils';

import Container from '@material-ui/core/Container'
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import {useAppSelector} from './../../store/hooks';

const useStyles = makeStyles({
  root: {
    "&:hover": {
      transform: 'scale(1.05)',
      transition: 'transform 0.5s',
      cursor: 'pointer',
    }
  },
  media: {
    minHeight: '300px',
    minWidth: '320px',
    ['@media (max-width:380px)']: { // eslint-disable-line no-useless-computed-key
      minHeight: '200px',
      minWidth: '220px',
    }
  },
});


export default function Content(){

  const list = useAppSelector((store)=>{return store.countryList.list});
  const lang: string = useLang(useAppSelector);
  const filterValue: string = useAppSelector((store)=>{return store.countryList.filter});

  const classes = useStyles();

  // При переключении языка
  // Обновим данные в storage
  useEffect(()=>{
    getCountryList(lang);
  }, [lang]);

  return (
    <Container component="main" maxWidth="lg" style={{paddingTop: "20px", paddingBottom:"20px"}}>
      <Grid container justify="space-evenly" alignItems="center" spacing={4}>
        {list.filter((item)=>{
          return item.countryName.toLowerCase().includes(filterValue.toLowerCase());
        }).map((item) => {

          return (
          <Grid item key={item.id}>

            <Link component={RouterLink}  underline='none' to={`/country/${item.id}`}>
              <Card className={classes.root}>
                <CardMedia
                  className={classes.media}
                  image={item.imageUrl}
                  title="country image"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" align="center">
                    {item.countryName}
                  </Typography>
                </CardContent>
              </Card>
            </Link>

          </Grid>
          )

        })}
      </Grid>
    </Container>
  )
}

/*
https://material-ui.com/ru/components/cards/
https://material-ui.com/ru/components/app-bar/
*/