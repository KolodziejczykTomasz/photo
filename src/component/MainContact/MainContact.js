import React, { Fragment } from 'react';
import Contact from '../../assets/images/contactpage.jpg';
import { Row, Col } from 'react-bootstrap';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import { FaWhatsappSquare } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import FormContact from '../Form/FormContact'

import './MainContact.css';

const MainContact = () => (
  <Fragment>
    <div>
      <span className="Contact_Header">Kontakt</span>
    </div>
    <div className="Contact_Wrapper">
      <div className="MContact_Box_Image">
        <img src={Contact} alt="title about me" className="Contact_Box_Image_Header" />
      </div>

      <div className="Main_Box_Form">
        <div className="Main_Box_Form_Left">
          <span className="Main_Box_Text_Header">Napisz do mnie</span>
          <FormContact />
        </div>
        <div className="Main_Box_Form_Right">
          <span className="Main_Box_Text_Header">Znajdź mnie tutaj</span>
          <Row>
            <Col style={{ marginBottom: '50px' }}>
              <FaFacebookSquare />
              <FaTwitterSquare />
              <FaWhatsappSquare />
            </Col>
          </Row>
          <span className="Main_Box_Text_Header">Zadzwoń do mnie</span>
          <Row>
            <Col style={{ marginBottom: '50px' }}>
              <FaPhone style={{ marginRight: '15px' }} />
              +48 123 456 789
            </Col>
          </Row>
          <span className="Main_Box_Text_Header">Email</span>
          <Row>
            <Col style={{ marginBottom: '50px' }}>
              <FaEnvelope style={{ marginRight: '15px' }} />
              kolodziejczyk.tomasz44@gmail.com
            </Col>
          </Row>
        </div>
      </div>
    </div>
  </Fragment>
);

export default MainContact;
