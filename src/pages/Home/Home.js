import React, { Component, Fragment } from "react";

import NavBar from "../../component/NavBarMenu/NavBarMenu";
import Slide from "../../component/Slide/Slide";
import Logotypy from "../../component/Logotypy/Logotypy";
import Footer from "../../component/Footer/Footer";
import GalleryList from "../../component/Gallery/GalleryList";
import Card from "../../component/Card/Card";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <Slide />
        <Logotypy />
        <GalleryList />;
        <Card />
        <Footer />
      </Fragment>
    );
  }
}

export default Home;
