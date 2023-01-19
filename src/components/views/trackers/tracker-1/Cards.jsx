import React from 'react';
import {Card, CardContent, Typography,Grid} from '@mui/material';
import styles from '../tracker-1/Cards.css';
import CountUp from 'react-countup';
import cx from 'classnames';

const  Cards = ({data:{active, deaths, recovered, updated } })=> {
  if(!active){
    return 'Loading...';
  }
 
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item component={Card}xs={12} md={3} className={cx(styles.card, styles.infected)}>
        <CardContent>
          <Typography color="texSecondary" gutterBottom>Infected</Typography>
          <Typography variant="h5">
            <CountUp start={active} end={active.value} duration={2.5} separator=',' />
          </Typography>
          <Typography color="textSecondary">{new Date(updated).toDateString()}</Typography>
          <Typography variant="body2">Number of active cases of Covid-2022</Typography>
        </CardContent>
        </Grid>
        <Grid item component={Card}xs={12} md={3} className={cx(styles.card, styles.recovered)}>
        <CardContent>
          <Typography color="texSecondary" gutterBottom>Recovered</Typography>
          <Typography variant="h5">
          <CountUp start={recovered} end={recovered.value} duration={2.5} separator=','/>
          </Typography>
          <Typography color="textSecondary">{new Date(updated).toDateString()}</Typography>
          <Typography color="textSecondary">Real Date</Typography>
          <Typography variant="body2">Number of recoveries from Covid-2022</Typography>
        </CardContent>
        </Grid>
        <Grid item component={Card}xs={12} md={3} className={cx(styles.card, styles.deaths)}>
        <CardContent>
          <Typography color="texSecondary" gutterBottom>Deaths</Typography>
          <Typography variant="h5">
          <CountUp start={deaths} end={deaths.value} duration={2.5} separator=',' />
          </Typography>
          <Typography color="textSecondary">{new Date(updated).toDateString()}</Typography>
          <Typography color="textSecondary">Real Date</Typography>
          <Typography variant="body2">Number deaths of Covid-2022</Typography>
        </CardContent>
        </Grid>
      </Grid>
      </div>
  )
}

export default Cards;
