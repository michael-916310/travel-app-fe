import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';

import {getCountryInfo, useLang} from './../../app/utils';
import {useAppSelector} from './../../store/hooks';

import {Card, CardContent, Container, Grid, Typography } from '@material-ui/core';

export default function Content(){
  let {countryId} = useParams() as {countryId:string};

  const lang: string = useLang(useAppSelector);
  const info = useAppSelector((store)=>{return store.countryInfo});

  useEffect(()=>{
    getCountryInfo(countryId,lang);
  },[lang]);

  return (
    <Container component="main" maxWidth="lg" style={{paddingTop: "20px", paddingBottom:"20px"}}>
      <Grid container spacing={2}>
        <Grid component="main" item xs={12} lg={10}>
          <Card>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <img src={info.imageUrl} alt="country" style= {{height:"100%", width:"100%", objectFit: "cover"}}/>
              </Grid>
              <Grid item xs={12}  md={6}>
                <CardContent>
                  <Typography component="h4" variant="h4">
                    {info.name}
                  </Typography>
                  <Typography component="h5" variant="h5">
                    {info.capital}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    {info.description}
                  </Typography>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid component="aside" item xs={12} lg={2} style={{border:'1px dotted grey'}}>
          <div>
            Погода в столице
          </div>
          <div>
            Курс к RUR, USD, EUR
          </div>
          <div>
            Дата и время в столице
          </div>
        </Grid>
      </Grid>
    </Container>
  )
}