import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Layout.css';

function Layout() {
  const { pathname } = useLocation();
  return (
    <>
      <Header />
      <main className="main">
        <Outlet />
      </main>
      {pathname !== '/profile' && <Footer />}
    </>
  );
}

export default Layout;
