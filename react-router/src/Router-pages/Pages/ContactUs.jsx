import { Button } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import SendIcon from '@mui/icons-material/Send';

const ContactUs = () => {
  return (
    <Container maxWidth="md">
      <div>
        <p style={{ textAlign: 'center' }}>How can you communicate?</p>
        <h1 style={{ textAlign: 'center', color: 'darkblue' }}>Contact Me</h1>
      </div>
      <div
        style={{
          paddingRight: '5px',
          paddingLeft: '5px',
          marginBottom: '1rem',
          display: 'flex',
          flexWrap: 'wrap',
          marginRight: '-5px',
          marginLeft: '-5px',
          boxSizing: 'border-box',
          justifyContent: 'center'
        }}
      >
        <form>
          <input
            type="text"
            placeholder="Your Name"
            style={{
              display: 'block',
              width: '400px',
              padding: '.375rem 0.75rem',
              fontSize: '1rem',
              lineHeight: 1.5,
              color: '#495057',
              backgroundClip: 'padding-box',
              backgroundColor: 'rgba(0,0,0,.01)',
              border: '1px solid #ced4da',
              borderRadius: '0.25rem',
              transition:
                'border-color .15s ease-in-out, box-shadow .15s ease-in-out',
              marginBottom: '.5rem',
            }}
          />
          <input
            type="email"
            placeholder="Enter Email"
            style={{
              display: 'block',
              width: '400px',
              padding: '.375rem 0.75rem',
              fontSize: '1rem',
              lineHeight: 1.5,
              color: '#495057',
              backgroundClip: 'padding-box',
              backgroundColor: 'rgba(0,0,0,.01)',
              border: '1px solid #ced4da',
              borderRadius: '0.25rem',
              transition:
                'border-color .15s ease-in-out, box-shadow .15s ease-in-out',
            }}
          />
          <br />
          <textarea placeholder='Message...'
            style={{
              display: 'block',
              width: '400px',
              padding: '.375rem 0.75rem',
              height: '80px',
              fontSize: '1rem',
              lineHeight: 1.5,
              color: '#495057',
              backgroundClip: 'padding-box',
              backgroundColor: 'rgba(0,0,0,.01)',
              border: '1px solid #ced4da',
              borderRadius: '0.25rem',
            }}
          ></textarea>
          <br />
          <Button variant="contained" endIcon={<SendIcon />} sx={{display: 'flex', marginLeft: '140px'}}>Send Message</Button>
        </form>
      </div>
    </Container>
  );
};

export default ContactUs;
