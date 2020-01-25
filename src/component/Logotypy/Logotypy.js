import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

import Logo1 from "../../assets/images/logo1.png";

import { FaChevronRight } from "react-icons/fa";

const Logotypy = () => (
  <Container>
    <div style={{marginTop: 80, marginBottom: 80}}>
    <Row>
      <Col sm>
        <Row>
          <p style={{fontWeight: 600}}>HISTORIE ŚLUBNE</p>
          <p>Obejrzyj moje najnowsze historie ślubne</p>
        </Row>
          <Row>
            <p style={{marginTop: "40%"}}>
              ZOBACZ WIĘCEJ <FaChevronRight />
            </p> 
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
    </div>
  </Container>
);

export default Logotypy;
