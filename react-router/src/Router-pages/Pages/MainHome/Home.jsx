import { Button } from '@mui/material';
import { Container, Stack } from '@mui/system';
import React from 'react';
import '../MainHome/home-style.css';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import foodImg from '../../asserts/Images/food-junk.png'

const Home = () => {
  return (
    <div>
      <Container maxWidth="xl">
        <div className="row d-flex align-items-center">
          <div className="col-lg-6 hero-left">
            <h1 className="display-4 mb-5">
              We Love
              <br />
              Delicious Foods!
            </h1>
            <div className="mb-2">
              <Stack direction="row" spacing={2}>
                <Button variant="contained" color="error">
                  Explore Menu
                </Button>
                <Button variant="outlined" color="error">
                  Play Video
                </Button>
              </Stack>
            </div>
            <ul className="hero-info list-unstyled d-flex text-center mb-0">
              <li className="border-right">
                <span className="lnr lnr-rocket">{<RocketLaunchIcon />}</span>
                <h5>Fast Delivery</h5>
              </li>
              <li className="border-right">
                <span className="lnr lnr-leaf">{<FoodBankIcon />}</span>
                <h5>Fresh Food</h5>
              </li>
              <li>
                <span className="lnr lnr-bubble">{<SupportAgentIcon />}</span>
                <h5>24/7 Support</h5>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-6 hero-right">
          <img src={foodImg} alt='food'></img>
        </div>
      </Container>
    </div>
  );
};

export default Home;
