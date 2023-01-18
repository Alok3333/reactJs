import { Grid } from '@mui/material';
import React from 'react';
import FoodImg from '../asserts/Images/photo-fastfood.jpeg';

const Service = () => {
  return (
    <div>
      <h1 style={{textAlign: 'center', fontFamily: 'bold'}}>Food Service</h1>
      <Grid sx={{ flexGrow: 1, marginTop: '10%' }} container spacing={2}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={3}>
            {[0, 1, 2].map((value) => (
              <Grid key={value} item>
                <img alt="complex" src={FoodImg} style={{height: 400, width: 300}}/>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Service;
