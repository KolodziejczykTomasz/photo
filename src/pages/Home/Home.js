import React, { Fragment, Component } from 'react';

import NavBar from '../../component/NavBarMenu/NavBarMenu';
import Slide from '../../component/Slide/Slide';
import Logotypy from '../../component/Logotypy/Logotypy';
import Line from '../../component/Line/Line';
import Footer from '../../component/Footer/Footer';
import GalleryList from '../../component/Gallery/GalleryList';
import Card from '../../component/Card/Card';

class Home extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <Slide />
        <Logotypy />
        <GalleryList />
        <Card />
        <Line />
        <Footer />
      </Fragment>
    );
  }
}

export default Home;
