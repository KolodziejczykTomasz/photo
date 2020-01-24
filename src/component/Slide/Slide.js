import React, { Fragment } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import SlideImg from "../../assets/images/slide.jpg";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";

const Slide = () => (
  <Fragment>
    <Container>
      <Row>
        <Col sm={12}>
          <Image src={SlideImg} fluid />
        </Col>
      </Row>
      <Row>
        <Col sm>
          <FaFacebookSquare />
          <FaTwitterSquare />
          <FaWhatsappSquare />
        </Col>
        <Col sm></Col>
        <Col sm>
          <p style={{ textAlign: "end" }}>
            SCROLL DOWN <FaAngleDown />
          </p>
        </Col>
      </Row>
    </Container>
  </Fragment>
);

export default Slide;
