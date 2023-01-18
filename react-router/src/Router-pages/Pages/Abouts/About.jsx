import { Button, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import Chuwmein from '../../asserts/Images/chowmein.jpg';
import '../Abouts/About-style.css';

const About = () => {
  return (
    <Container maxWidth="xxl">
      <div className="about_title">
        <h1>
          <h2 style={{color: 'darkblue'}}>About Us</h2>
          <Typography variant="subtitle1" gutterBottom>
            Fast food is a type of mass-produced food designed for commercial
            resale, with a strong priority placed on speed of service. It is a
            commercial term, limited to food sold in a restaurant or store with
            frozen, preheated or precooked ingredients and served in packaging
            for take-out/take-away.
          </Typography>
        </h1>
        <div className="food_image">
          <img src={Chuwmein} alt="fastfood" />
        </div>
      </div>
      <div className="button_read">
        <Button variant="contained">Read More</Button>
      </div>
    </Container>
  );
};

export default About;
