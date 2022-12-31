import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './Footer/Footer';
import Header from './Header/Header';

function Layout() {
  const { pathname } = useLocation();
  return (
    <>
      <Header />
      <div className="container">
        <Outlet />
      </div>
      {pathname !== '/profile' && <Footer />}
    </>
  );
}

export default Layout;
