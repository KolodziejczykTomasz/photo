import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

import Logo1 from "../../assets/images/logo1.png";

import { FaChevronRight } from "react-icons/fa";

const Logotypy = () => (
  <Container>
    <Row>
      <Col sm>
        <Row>
          <p>HISTORIE ŚLUBNE</p>
          <p>Obejrzyj moje najnowsze historie ślubne</p>
        </Row>
        <Row>
          ZOBACZ WIĘCEJ <FaChevronRight />
        </Row>
      </Col>
      <Col sm>
        <Image src={Logo1} rounded style={{ width: "90%" }} />
      </Col>
      <Col sm>
        <Image src={Logo1} rounded style={{ width: "90%" }} />
      </Col>
      <Col sm>
        <Image src={Logo1} rounded style={{ width: "90%" }} />
      </Col>
    </Row>
  </Container>
);

export default Logotypy;
