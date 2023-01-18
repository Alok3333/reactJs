import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h1 style={{ color: 'Green' }}>About Pages.</h1>
      <ul>
        <li>
          <Link to="/user/anil">Anil</Link>
        </li>
        <li>
          <Link to="/user/peter">Peter</Link>
        </li>
      </ul>
    </div>
  );
};

export default About;
