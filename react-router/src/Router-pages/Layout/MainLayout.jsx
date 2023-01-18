import React from 'react';
import Footer from './Footer';
import TopHeader from './AppBar';
import '../Layout/layout-style.css';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <div className="App">
        <TopHeader />
        <div className="container">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
