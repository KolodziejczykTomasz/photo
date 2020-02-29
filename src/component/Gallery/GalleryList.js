import React from 'react';
import { Image } from 'react-bootstrap';
import styled from 'styled-components';
import Logo1 from '../../assets/images/logo1.png';

const StyledWrapper = styled.div`
  display: grid;
  width: 70vw;
  margin: 10px auto 70px auto;
`;

const StyledHeader = styled.div`
  padding-top: 15px;
  display: grid;
  grid-template-columns: 0.09fr 0.75fr;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
`;

const GalleryList = () => {
  return (
    <StyledWrapper>
      <StyledHeader>
        <div>
          <Image src={Logo1} roundedCircle style={{ maxWidth: '70px', marginLeft: '10px' }} />
        </div>
        <div>
          <p style={{ paddingLeft: '10px' }}> Jan Kowlaski Fotograf</p>
          <p style={{ paddingLeft: '10px' }}>Historia Weselna | Kętrzyn | 2020</p>
        </div>
      </StyledHeader>
      <StyledGrid>
        <div>
          <img src={Logo1} style={{ maxWidth: '350px' }} alt="galleryItem" />
        </div>
        <div>
          <img src={Logo1} style={{ maxWidth: '350px' }} alt="galleryItem" />
        </div>
        <div>
          <img src={Logo1} style={{ maxWidth: '350px' }} alt="galleryItem" />
        </div>
      </StyledGrid>
      <StyledGrid>
        <div>
          <img src={Logo1} style={{ maxWidth: '350px' }} alt="galleryItem" />
        </div>
        <div>
          <img src={Logo1} style={{ maxWidth: '350px' }} alt="galleryItem" />
        </div>
        <div>
          <img src={Logo1} style={{ maxWidth: '350px' }} alt="galleryItem" />
        </div>
      </StyledGrid>
    </StyledWrapper>
  );
};

export default GalleryList;
