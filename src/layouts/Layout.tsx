import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

type LayoutType = {
  withNavbar: boolean;
  withFooter: boolean;
  children: React.ReactNode;
};

export default function Layout({
  withNavbar,
  withFooter,
  children,
}: LayoutType) {
  return (
    <>
      {withNavbar && <Navbar />}
      {children}
      {withFooter && <Footer />}
    </>
  );
}
