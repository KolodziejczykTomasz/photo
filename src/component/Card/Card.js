import React, { Fragment } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

import Logo1 from "../../assets/images/logo1.png";

const Card = () => (
  <Container>
    <Col>
      <Row>
        <div
          style={{
            width: "60vw",
            height: 200,
            margin: "0 auto",
            backgroundColor: "#eeeeee"
          }}
        >
          <div
            style={{
              width: 350,
              height: 200,
              marginTop: 15,
              marginLeft: 15,
              backgroundColor: "white",
              boxShadow: "5px 5px 5px rgba(83, 83, 83, 0.63)"
            }}
          >
            <Container>
              <Row>
                <Col sm={12}>
                  <p style={{ textAlign: "center", marginTop: 20 }}>Łukasz Sienkiewicz </p>
                </Col>
              </Row>
              <Row>
                <Col sm={3}></Col>
                <Col sm={9}>
                  <p style={{ textAlign: "center", fontWeight: 600}}>
                    "Fotografując staram się pokazać, tonikt inny by nie
                    zauważył"
                  </p>
                  <p style={{ textAlign: "center" }}>READ ABOUT ME</p>{" "}
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
