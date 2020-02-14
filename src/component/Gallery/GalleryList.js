import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { Container, Row, Col, Image } from "react-bootstrap";

import { photos } from "./photos";
import Logo1 from "../../assets/images/logo1.png";

const GalleryList = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <Container>
      <div style={{ width: "60vw", margin: "0 auto" }}>
      <Col>
        <div style={{ marginTop: 10, marginBottom: 10 }}>
          <Row>
            <Col sm={1}>
              <Image src={Logo1} roundedCircle style={{ maxWidth: "70px" }} />
            </Col>
            <Col sm={11}>
              <div style={{ marginLeft: 10}}>Jan Kowlaski Fotograf</div>
              <div style={{ marginLeft: 10 }}>Historia Weselna | Kętrzyn | 2020</div>
            </Col>
          </Row>
        </div>
        <Row>
          <div style={{ width: "60vw", margin: "0 auto" }}>
            <Gallery photos={photos} onClick={openLightbox} />
            <ModalGateway>
              {viewerIsOpen ? (
                <Modal onClose={closeLightbox}>
                  <Carousel
                    currentIndex={currentImage}
                    views={photos.map(x => ({
                      ...x,
                      srcset: x.srcSet,
                      caption: x.title
                    }))}
                  />
                </Modal>
              ) : null}
            </ModalGateway>
          </div>
        </Row>
        </Col>
        </div>
        
    </Container>
  );
};

export default GalleryList;