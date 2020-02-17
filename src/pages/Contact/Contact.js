import React, { Fragment } from 'react';
import NavBar from '../../component/NavBarMenu/NavBarMenu';
import MainContact from '../../component/MainContact/MainContact';
import Footer from '../../component/Footer/Footer';

const Contact = () => (
  <Fragment>
    <NavBar />
    <MainContact/>
    <Footer/>
  </Fragment>
);

export default Contact;
