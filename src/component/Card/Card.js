import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

import Logo1 from "../../assets/images/logo1.png";


const Card = () => (
  <Container>
    <Col>
      <Row>
        <div
          style={{
            width: "55vw",
            height: 300,
            margin: "0 auto",
            marginLeft: 170,
            backgroundColor: "#eeeeee",           
            
          }}
        >
          <div
            style={{
              width: 350,
              height: 300,
              marginTop: 15,
              marginLeft: 15,
              backgroundColor: "white",
              boxShadow: "5px 5px 5px rgba(83, 83, 83, 0.63)"
            }}
          >
            <Container>
              <Row>
                <Col sm={12}>
                  <p style={{ textAlign: "center", marginTop: 60 }}>Łukasz Sienkiewicz </p>
                </Col>
              </Row>
              <Row>
                <Col sm={3}></Col>
                <Col sm={9}>
                  <p style={{ textAlign: "center", fontWeight: 700}}>
                    "Fotografując staram się pokazać, to czego nikt inny by nie
                    zauważył"
                  </p>
                  <p style={{ textAlign: "center", marginTop: 60 }}>READ ABOUT ME</p>{" "}
                </Col>
              </Row>
            </Container>
          </div>
          <div>
            <Image
              src={Logo1}
              roundedCircle
              style={{ maxWidth: 150, marginLeft: -70, marginTop: -250 }}
            />
          </div>
        </div>
      </Row>
    </Col>
  </Container>
);

export default Card;
