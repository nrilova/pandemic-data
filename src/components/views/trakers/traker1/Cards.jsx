import React from 'react';
import {Card, Typography,Grid} from '@mui/material';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import Map from '../traker1/Map';




const  Cards = ({data:{todayCases, todayDeaths, todayRecovered, updated,cases,deaths } })=> {
  if(!todayCases){
    return 'Loading...';
  }
  return (
      <Grid container spacing={4}xs={12} sm={4} md={4} lg={4} xl={4} className={styles.container}>
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6} className={styles.cords}>
        <Card className={styles.todayCases}>
          
        <Typography color="texSecondary" gutterBottom>todayCases</Typography>
         
          <Typography variant="h6">

         
            <CountUp start={todayCases} end={todayCases.value} duration={2.5} separator=',' />
          </Typography> 
        </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
        <Card className={ styles.todayDeaths}>
          <Typography color="texSecondary" gutterBottom>todayDeaths</Typography>
          <Typography variant="h6">
          <CountUp start={todayDeaths} end={todayDeaths.value} duration={2.5} separator=','/>
          </Typography>
        </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
        <Card className={styles.todayRecovered}>
        
          <Typography color="texSecondary" gutterBottom>todayRecovered</Typography>
          <Typography variant="h6">
          <CountUp start={todayRecovered} end={todayRecovered.value} duration={2.5} separator=',' />
          </Typography>
        </Card>
        
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
        <Card className={styles.updated}>
         
          <Typography color="texSecondary" gutterBottom>updated</Typography>
          <Typography variant="h6">
          <CountUp start={updated} end={updated.value} duration={2.5} separator=',' />
          </Typography>
        </Card>  
       
        </Grid>

        <Grid item  xs={12} sm={6} md={6} lg={6} xl={6}>
        <Card className={ styles.cases}>
   
          <Typography color="texSecondary" gutterBottom>cases</Typography>
          <Typography variant="h6">
          <CountUp start={cases} end={cases.value} duration={2.5} separator=',' />
          </Typography>
          </Card> 
       
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
        <Card className={styles.deaths}>
          <Typography color="texSecondary" gutterBottom>deaths</Typography>
          <Typography variant="h6">
          <CountUp start={deaths} end={deaths.value} duration={2.5} separator=',' />
          </Typography>
        </Card>
        </Grid>
        <Grid>
       </Grid>
      <Grid item xs={0} sm={0} md={1} lg={1} xl={1}>
        < Map />
      </Grid>
      </Grid>
      
      
  )
}

export default Cards;